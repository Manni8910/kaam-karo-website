"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { apiRequest, getUser, clearAuth } from "@/lib/api";

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

export default function EmployerDashboard() {
  const router = useRouter();
  const user = getUser();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [showPostJob, setShowPostJob] = useState(false);
  const [posting, setPosting] = useState(false);
  const [error, setError] = useState("");

  // New job form state
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [jobType, setJobType] = useState("FULL_TIME");

  useEffect(() => {
    if (!user) { router.push("/login"); return; }
    loadJobs();
  }, []);

  async function loadJobs() {
    try {
      const data = await apiRequest("/api/jobs/employer");
      setJobs(data.jobs || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  async function postJob() {
    setError("");
    if (!title || !location || !salary) { setError("Please fill all required fields"); return; }
    setPosting(true);
    try {
      await apiRequest("/api/jobs", {
        method: "POST",
        body: JSON.stringify({ title, description: desc, locationName: location, salary: Number(salary), jobType }),
      });
      setShowPostJob(false);
      setTitle(""); setDesc(""); setLocation(""); setSalary(""); setJobType("FULL_TIME");
      loadJobs();
    } catch (e: any) {
      setError(e.message);
    } finally {
      setPosting(false);
    }
  }

  function logout() {
    clearAuth();
    router.push("/");
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-3">⏳</div>
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="text-3xl font-black text-[#FF4F5A]">{jobs.length}</div>
            <div className="text-gray-500 text-sm mt-1">Jobs Posted</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="text-3xl font-black text-[#FF4F5A]">
              {jobs.filter(j => j.isActive).length}
            </div>
            <div className="text-gray-500 text-sm mt-1">Active Jobs</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="text-3xl font-black text-[#FF4F5A]">
              {jobs.reduce((sum, j) => sum + (j._count?.swipes || 0), 0)}
            </div>
            <div className="text-gray-500 text-sm mt-1">Total Applications</div>
          </div>
        </div>

        {/* Post Job Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Your Job Listings</h2>
          <button
            onClick={() => setShowPostJob(true)}
            className="px-5 py-2.5 bg-[#FF4F5A] text-white rounded-xl font-bold hover:bg-red-600 transition-colors"
          >
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
                <input value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. Delivery Boy" className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF4F5A]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
                <input value={location} onChange={e => setLocation(e.target.value)} placeholder="e.g. Mumbai, Maharashtra" className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF4F5A]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Salary (₹) *</label>
                <input type="number" value={salary} onChange={e => setSalary(e.target.value)} placeholder="15000" className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF4F5A]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Type</label>
                <select value={jobType} onChange={e => setJobType(e.target.value)} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF4F5A]">
                  <option value="FULL_TIME">Full Time</option>
                  <option value="PART_TIME">Part Time</option>
                  <option value="CONTRACT">Contract</option>
                  <option value="INTERNSHIP">Internship</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
                <textarea value={desc} onChange={e => setDesc(e.target.value)} rows={3} placeholder="Describe the job, requirements, benefits..." className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF4F5A]" />
              </div>
            </div>
            {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
            <div className="flex gap-3 mt-4">
              <button onClick={postJob} disabled={posting} className="px-6 py-2.5 bg-[#FF4F5A] text-white rounded-xl font-bold hover:bg-red-600 disabled:opacity-50">
                {posting ? "Posting..." : "Post Job ₹199 →"}
              </button>
              <button onClick={() => setShowPostJob(false)} className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200">
                Cancel
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2">* Payment required to publish. You'll be redirected to pay ₹199.</p>
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
                    <p className="text-[#FF4F5A] font-semibold mt-1">₹{job.salary?.toLocaleString("en-IN")}/month</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${job.isActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                      {job.isActive ? "Active" : "Inactive"}
                    </span>
                    <p className="text-gray-400 text-xs mt-2">
                      {job._count?.swipes || 0} applications
                    </p>
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
