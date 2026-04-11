"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { apiRequest, getUser, clearAuth } from "@/lib/api";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://kaam-backend-production.up.railway.app';
const RAZORPAY_KEY = process.env.NEXT_PUBLIC_RAZORPAY_KEY || 'rzp_test_SbNdyLC4Xi5gT6';

type Job = {
  id: string;
  title: string;
  locationName: string;
  jobType: string;
  salary: number;
  isActive: boolean;
  createdAt: string;
  _count?: { swipes: number };
};

declare global {
  interface Window { Razorpay: any; }
}

export default function EmployerDashboard() {
  const router = useRouter();
  const user = getUser();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [showPostJob, setShowPostJob] = useState(false);
  const [posting, setPosting] = useState(false);
  const [error, setError] = useState("");
  const [paymentStatus, setPaymentStatus] = useState<"idle"|"processing"|"success"|"failed">("idle");

  // New job form state
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [jobType, setJobType] = useState("FULL_TIME");

  // Pending job data waiting for payment
  const [pendingJob, setPendingJob] = useState<any>(null);

  useEffect(() => {
    if (!user) { router.push("/login"); return; }
    loadJobs();
    loadRazorpayScript();
  }, []);

  function loadRazorpayScript() {
    if (document.getElementById("razorpay-script")) return;
    const script = document.createElement("script");
    script.id = "razorpay-script";
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(script);
  }

  async function loadJobs() {
    try {
      const data = await apiRequest("/api/jobs/mine");
      setJobs(data.jobs || []);
    } catch (e) { console.error(e); }
    finally { setLoading(false); }
  }

  async function handlePostJob() {
    setError("");
    if (!title || !location || !salary) { setError("Please fill all required fields"); return; }
    setPosting(true);
    try {
      // Create Razorpay order — ₹199 = 'week' plan
      const orderData = await apiRequest("/api/payments/create-order", {
        method: "POST",
        body: JSON.stringify({ plan: 'week' }),
      });

      if (orderData.isFree) {
        // Free post — post directly
        await postJobDirectly();
        return;
      }

      // Open Razorpay checkout
      setPendingJob({ title, description: desc, locationName: location, salary: Number(salary), jobType });
      openRazorpay(orderData.orderId, orderData.amount);
    } catch (e: any) {
      setError(e.message);
      setPosting(false);
    }
  }

  function openRazorpay(orderId: string, amount: number) {
    const options = {
      key: RAZORPAY_KEY,
      amount: amount,
      currency: "INR",
      name: "KaamKaro",
      description: "Job Posting Fee",
      image: "https://kaamkaro.co.in/favicon.ico",
      order_id: orderId,
      handler: async function (response: any) {
        setPaymentStatus("processing");
        try {
          // Verify payment
          await apiRequest("/api/payments/verify", {
            method: "POST",
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });
          // Post the job
          await postJobDirectly();
          setPaymentStatus("success");
        } catch (e: any) {
          setPaymentStatus("failed");
          setError("Payment verified but job posting failed. Contact support.");
          setPosting(false);
        }
      },
      prefill: {
        name: user?.name || "",
        email: user?.email || "",
      },
      theme: { color: "#FF4F5A" },
      modal: {
        ondismiss: () => {
          setPosting(false);
          setPaymentStatus("idle");
        }
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", () => {
      setPaymentStatus("failed");
      setError("Payment failed. Please try again.");
      setPosting(false);
    });
    rzp.open();
  }

  async function postJobDirectly() {
    const s = Number(pendingJob?.salary || salary);
    const jobData = pendingJob || { title, description: desc, locationName: location, salaryMin: s, salaryMax: s, jobType };
    await apiRequest("/api/jobs", {
      method: "POST",
      body: JSON.stringify({ ...jobData, salaryMin: s, salaryMax: s }),
    });
    setShowPostJob(false);
    setTitle(""); setDesc(""); setLocation(""); setSalary(""); setJobType("FULL_TIME");
    setPendingJob(null);
    setPosting(false);
    setPaymentStatus("idle");
    loadJobs();
  }

  function logout() { clearAuth(); router.push("/"); }

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center"><div className="text-4xl mb-3">⏳</div><p className="text-gray-500">Loading...</p></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <span className="text-xl font-black text-[#FF4F5A]">KaamKaro</span>
            <span className="text-gray-400 text-sm ml-2">Employer Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">👋 {user?.name}</span>
            <button onClick={logout} className="text-sm text-gray-500 hover:text-red-500">Logout</button>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Payment success banner */}
        {paymentStatus === "success" && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl mb-6 flex items-center gap-2">
            ✅ Payment successful! Your job has been posted.
          </div>
        )}
        {paymentStatus === "failed" && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl mb-6">
            ❌ Payment failed. Please try again.
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="text-3xl font-black text-[#FF4F5A]">{jobs.length}</div>
            <div className="text-gray-500 text-sm mt-1">Jobs Posted</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="text-3xl font-black text-[#FF4F5A]">{jobs.filter(j => j.isActive).length}</div>
            <div className="text-gray-500 text-sm mt-1">Active Jobs</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="text-3xl font-black text-[#FF4F5A]">{jobs.reduce((sum, j) => sum + (j._count?.swipes || 0), 0)}</div>
            <div className="text-gray-500 text-sm mt-1">Total Applications</div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Your Job Listings</h2>
          <button onClick={() => setShowPostJob(true)}
            className="px-5 py-2.5 bg-[#FF4F5A] text-white rounded-xl font-bold hover:bg-red-600 transition-colors">
            + Post New Job
          </button>
        </div>

        {/* Post Job Form */}
        {showPostJob && (
          <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold mb-4">Post a New Job</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Title *</label>
                <input value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. Delivery Boy"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF4F5A]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
                <input value={location} onChange={e => setLocation(e.target.value)} placeholder="e.g. Mumbai, Maharashtra"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF4F5A]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Salary (₹) *</label>
                <input type="number" value={salary} onChange={e => setSalary(e.target.value)} placeholder="15000"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF4F5A]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Type</label>
                <select value={jobType} onChange={e => setJobType(e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF4F5A]">
                  <option value="FULL_TIME">Full Time</option>
                  <option value="PART_TIME">Part Time</option>
                  <option value="CONTRACT">Contract</option>
                  <option value="INTERNSHIP">Internship</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
                <textarea value={desc} onChange={e => setDesc(e.target.value)} rows={3}
                  placeholder="Describe the job, requirements, benefits..."
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF4F5A]" />
              </div>
            </div>
            {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

            {/* Pricing info */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mt-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-orange-800">Job Posting Fee</p>
                  <p className="text-sm text-orange-600">One-time payment per job post</p>
                </div>
                <div className="text-2xl font-black text-orange-800">₹199</div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <img src="https://razorpay.com/assets/razorpay-glyph.svg" alt="Razorpay" className="h-4" onError={(e: any) => e.target.style.display='none'} />
                <span className="text-xs text-orange-600">Secured by Razorpay · UPI, Cards, Net Banking accepted</span>
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <button onClick={handlePostJob} disabled={posting}
                className="px-6 py-2.5 bg-[#FF4F5A] text-white rounded-xl font-bold hover:bg-red-600 disabled:opacity-50 flex items-center gap-2">
                {posting ? (
                  <><span className="animate-spin">⏳</span> Processing...</>
                ) : (
                  <>Pay ₹199 & Post Job →</>
                )}
              </button>
              <button onClick={() => { setShowPostJob(false); setError(""); }}
                className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200">
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Jobs List */}
        {jobs.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center">
            <div className="text-5xl mb-4">📋</div>
            <h3 className="text-lg font-bold mb-2">No jobs posted yet</h3>
            <p className="text-gray-500 mb-6">Post your first job to start finding candidates</p>
            <button onClick={() => setShowPostJob(true)} className="px-6 py-3 bg-[#FF4F5A] text-white rounded-xl font-bold">
              Post First Job →
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">{job.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">📍 {job.locationName} · {job.jobType.replace("_", " ")}</p>
                    <p className="text-[#FF4F5A] font-semibold mt-1">₹{(job.salary || (job as any).salaryMin)?.toLocaleString("en-IN")}/month</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${job.isActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                      {job.isActive ? "Active" : "Inactive"}
                    </span>
                    <p className="text-gray-400 text-xs mt-2">{job._count?.swipes || 0} applications</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
