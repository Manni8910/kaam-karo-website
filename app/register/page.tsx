"use client";
import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { apiRequest, setAuth } from "@/lib/api";

function EyeIcon({ show }: { show: boolean }) {
  return show ? (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );
}

function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultType = searchParams.get("type") || "seeker";

  const [method, setMethod] = useState<"phone" | "email">("phone");
  const [step, setStep] = useState<"info" | "otp">("info");
  const [userType, setUserType] = useState<"seeker" | "employer">(defaultType as any);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [devCode, setDevCode] = useState("");

  async function sendOtp() {
    setError("");
    if (!name.trim()) { setError("Enter your name"); return; }
    if (!/^[6-9]\d{9}$/.test(phone)) { setError("Enter a valid 10-digit mobile number"); return; }
    setLoading(true);
    try {
      const data = await apiRequest("/api/otp/send", { method: "POST", body: JSON.stringify({ phone }) });
      if (data.devCode) setDevCode(`Dev OTP: ${data.devCode}`);
      setStep("otp");
    } catch (e: any) { setError(e.message); } finally { setLoading(false); }
  }

  async function verifyAndRegister() {
    setError("");
    if (otp.length !== 4) { setError("Enter the 4-digit OTP"); return; }
    setLoading(true);
    try {
      const data = await apiRequest("/api/otp/verify", { method: "POST", body: JSON.stringify({ phone, code: otp, name, userType }) });
      setAuth(data.token, data.user);
      router.push(data.user.userType === "employer" ? "/dashboard/employer" : "/dashboard/seeker");
    } catch (e: any) { setError(e.message); } finally { setLoading(false); }
  }

  async function registerWithEmail() {
    setError("");
    if (!name.trim()) { setError("Enter your name"); return; }
    if (!email || !email.includes("@")) { setError("Enter a valid email"); return; }
    if (password.length < 6) { setError("Password must be at least 6 characters"); return; }
    setLoading(true);
    try {
      const data = await apiRequest("/api/auth/register", { method: "POST", body: JSON.stringify({ name, email, password, userType }) });
      setAuth(data.token, data.user);
      router.push(data.user.userType === "employer" ? "/dashboard/employer" : "/dashboard/seeker");
    } catch (e: any) { setError(e.message); } finally { setLoading(false); }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm p-8 w-full max-w-md">
        <Link href="/" className="text-2xl font-black text-[#1B3FAB] block mb-8">KaamKaro</Link>
        <h1 className="text-2xl font-bold mb-2">Create Account</h1>
        <p className="text-gray-500 mb-6">Join KaamKaro for free</p>

        {/* User Type */}
        <div className="flex bg-gray-100 rounded-xl p-1 mb-4">
          <button onClick={() => setUserType("seeker")}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${userType === "seeker" ? "bg-white shadow text-[#1B3FAB]" : "text-gray-500"}`}>
            👷 Job Seeker
          </button>
          <button onClick={() => setUserType("employer")}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${userType === "employer" ? "bg-white shadow text-[#1B3FAB]" : "text-gray-500"}`}>
            🏢 Employer
          </button>
        </div>

        {/* Method Toggle */}
        <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
          <button onClick={() => { setMethod("phone"); setStep("info"); setError(""); }}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${method === "phone" ? "bg-white shadow text-[#1B3FAB]" : "text-gray-500"}`}>
            📱 Mobile OTP
          </button>
          <button onClick={() => { setMethod("email"); setStep("info"); setError(""); }}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${method === "email" ? "bg-white shadow text-[#1B3FAB]" : "text-gray-500"}`}>
            ✉️ Email
          </button>
        </div>

        {/* Name field always shown */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {userType === "employer" ? "Company / Your Name" : "Your Full Name"}
          </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}
            placeholder={userType === "employer" ? "ABC Pvt Ltd / Rahul Sharma" : "Rahul Sharma"}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#1B3FAB]" />
        </div>

        {method === "phone" ? (
          <>
            {step === "info" ? (
              <>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                  <div className="flex">
                    <span className="flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-xl text-gray-500">+91</span>
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                      placeholder="9876543210" className="flex-1 px-4 py-3 border border-gray-300 rounded-r-xl focus:outline-none focus:border-[#1B3FAB]" />
                  </div>
                </div>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <button onClick={sendOtp} disabled={loading}
                  className="w-full py-3 bg-[#1B3FAB] text-white rounded-xl font-bold hover:bg-red-600 disabled:opacity-50">
                  {loading ? "Sending OTP..." : "Send OTP →"}
                </button>
              </>
            ) : (
              <>
                <p className="text-sm text-gray-500 mb-4">OTP sent to +91 {phone} <button onClick={() => setStep("info")} className="text-[#1B3FAB] underline">Change</button></p>
                {devCode && <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 text-sm px-3 py-2 rounded-lg mb-4">{devCode}</div>}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Enter OTP</label>
                  <input type="tel" value={otp} onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 4))}
                    placeholder="4-digit OTP" className="w-full px-4 py-3 border border-gray-300 rounded-xl text-center text-2xl tracking-widest focus:outline-none focus:border-[#1B3FAB]" />
                </div>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <button onClick={verifyAndRegister} disabled={loading}
                  className="w-full py-3 bg-[#1B3FAB] text-white rounded-xl font-bold hover:bg-red-600 disabled:opacity-50">
                  {loading ? "Creating account..." : "Create Account →"}
                </button>
              </>
            )}
          </>
        ) : (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#1B3FAB]" />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min 6 characters" className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:border-[#1B3FAB]" />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <EyeIcon show={showPassword} />
                </button>
              </div>
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button onClick={registerWithEmail} disabled={loading}
              className="w-full py-3 bg-[#1B3FAB] text-white rounded-xl font-bold hover:bg-red-600 disabled:opacity-50">
              {loading ? "Creating account..." : "Create Account →"}
            </button>
          </>
        )}

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account? <Link href="/login" className="text-[#1B3FAB] font-medium">Login</Link>
        </p>
        <p className="text-center text-xs text-gray-400 mt-4">
          By registering you agree to our{" "}
          <Link href="/terms" className="underline">Terms</Link> and{" "}
          <Link href="/privacy" className="underline">Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return <Suspense><RegisterForm /></Suspense>;
}
