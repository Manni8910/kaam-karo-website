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
  description: string;
  employer: { name: string };
};

export default function SeekerDashboard() {
  const router = useRouter();
  const user = getUser();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [swiping, setSwiping] = useState(false);
  const [search, setSearch] = useState("");
  const [searchTimeout, setSearchTimeout] = useState<any>(null);

  useEffect(() => {
    if (!user) { router.push("/login"); return; }
    loadJobs();
  }, []);

  async function loadJobs(q = "") {
    setLoading(true);
    try {
      const data = await apiRequest(`/api/jobs/deck${q ? `?search=${encodeURIComponent(q)}` : ""}`);
      setJobs(data.jobs || []);
      setCurrent(0);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  function handleSearch(val: string) {
    setSearch(val);
    if (searchTimeout) clearTimeout(searchTimeout);
    setSearchTimeout(setTimeout(() => loadJobs(val), 500));
  }

  async function swipe(direction: "right" | "left") {
    if (swiping || current >= jobs.length) return;
    setSwiping(true);
    const job = jobs[current];
    try {
      await apiRequest("/api/swipes", {
        method: "POST",
        body: JSON.stringify({ jobId: job.id, direction }),
      });
    } catch (e) {
      console.error(e);
    }
    setCurrent((c) => c + 1);
    setSwiping(false);
  }

  function logout() {
    clearAuth();
    router.push("/");
  }

  const job = jobs[current];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-xl font-black text-[#FF4F5A]">KaamKaro</span>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">👋 {user?.name}</span>
            <button onClick={logout} className="text-sm text-gray-500 hover:text-red-500">Logout</button>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="🔍  Search jobs — driver, cook, security..."
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF4F5A]"
          />
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="text-4xl mb-3">⏳</div>
            <p className="text-gray-500">Loading jobs...</p>
          </div>
        ) : !job ? (
          <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-xl font-bold mb-2">You've seen all jobs!</h3>
            <p className="text-gray-500 mb-6">Check back later for new opportunities</p>
            <button onClick={() => loadJobs(search)} className="px-6 py-3 bg-[#FF4F5A] text-white rounded-xl font-bold">
              Refresh Jobs
            </button>
          </div>
        ) : (
          <>
            {/* Progress */}
            <div className="flex justify-between text-xs text-gray-400 mb-3">
              <span>Job {current + 1} of {jobs.length}</span>
              <span>{jobs.length - current - 1} more</span>
            </div>

            {/* Job Card */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-6">
              <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 text-white">
                <div className="text-sm text-gray-400 mb-1">{job.employer?.name}</div>
                <h2 className="text-2xl font-black mb-2">{job.title}</h2>
                <div className="flex items-center gap-4 text-sm">
                  <span>📍 {job.locationName}</span>
                  <span className="bg-white/20 px-2 py-0.5 rounded-full">{job.jobType.replace("_", " ")}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-2xl font-black text-[#FF4F5A] mb-4">
                  ₹{job.salary?.toLocaleString("en-IN")}<span className="text-base font-normal text-gray-400">/month</span>
                </div>
                {job.description && (
                  <p className="text-gray-600 text-sm leading-relaxed">{job.description}</p>
                )}
              </div>
            </div>

            {/* Swipe Buttons */}
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => swipe("left")}
                disabled={swiping}
                className="flex-1 py-4 bg-white border-2 border-gray-200 text-gray-500 rounded-2xl font-bold text-lg hover:border-gray-400 transition-all disabled:opacity-50"
              >
                ✕ Skip
              </button>
              <button
                onClick={() => swipe("right")}
                disabled={swiping}
                className="flex-1 py-4 bg-[#FF4F5A] text-white rounded-2xl font-bold text-lg hover:bg-red-600 transition-all disabled:opacity-50"
              >
                ♥ Apply
              </button>
            </div>

            <p className="text-center text-xs text-gray-400 mt-4">
              Swipe Apply to express interest · Employer will see your profile
            </p>
          </>
        )}
      </div>
    </div>
  );
}
