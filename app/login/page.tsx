"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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

export default function LoginPage() {
  const router = useRouter();
  const [method, setMethod] = useState<"phone" | "email">("phone");
  const [step, setStep] = useState<"input" | "otp">("input");
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
    if (!/^[6-9]\d{9}$/.test(phone)) { setError("Enter a valid 10-digit Indian mobile number"); return; }
    setLoading(true);
    try {
      const data = await apiRequest("/api/otp/send", { method: "POST", body: JSON.stringify({ phone }) });
      if (data.devCode) setDevCode(`Dev OTP: ${data.devCode}`);
      setStep("otp");
    } catch (e: any) { setError(e.message); } finally { setLoading(false); }
  }

  async function verifyOtp() {
    setError("");
    if (otp.length !== 4) { setError("Enter the 4-digit OTP"); return; }
    setLoading(true);
    try {
      const data = await apiRequest("/api/otp/verify", { method: "POST", body: JSON.stringify({ phone, code: otp }) });
      setAuth(data.token, data.user);
      router.push(data.user.userType === "employer" ? "/dashboard/employer" : "/dashboard/seeker");
    } catch (e: any) { setError(e.message); } finally { setLoading(false); }
  }

  async function loginWithEmail() {
    setError("");
    if (!email || !password) { setError("Enter email and password"); return; }
    setLoading(true);
    try {
      const data = await apiRequest("/api/auth/login", { method: "POST", body: JSON.stringify({ email, password }) });
      setAuth(data.token, data.user);
      router.push(data.user.userType === "employer" ? "/dashboard/employer" : "/dashboard/seeker");
    } catch (e: any) { setError(e.message); } finally { setLoading(false); }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm p-8 w-full max-w-md">
        <Link href="/" className="text-2xl font-black text-[#FF4F5A] block mb-8">KaamKaro</Link>
        <h1 className="text-2xl font-bold mb-2">Welcome back</h1>
        <p className="text-gray-500 mb-6">Login to your account</p>

        {/* Method Toggle */}
        <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
          <button onClick={() => { setMethod("phone"); setStep("input"); setError(""); }}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${method === "phone" ? "bg-white shadow text-[#FF4F5A]" : "text-gray-500"}`}>
            📱 Mobile OTP
          </button>
          <button onClick={() => { setMethod("email"); setStep("input"); setError(""); }}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${method === "email" ? "bg-white shadow text-[#FF4F5A]" : "text-gray-500"}`}>
            ✉️ Email
          </button>
        </div>

        {method === "phone" ? (
          step === "input" ? (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                <div className="flex">
                  <span className="flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg text-gray-500">+91</span>
                  <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                    placeholder="9876543210" className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:border-[#FF4F5A]" />
                </div>
              </div>
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
              <button onClick={sendOtp} disabled={loading}
                className="w-full py-3 bg-[#FF4F5A] text-white rounded-xl font-bold hover:bg-red-600 disabled:opacity-50">
                {loading ? "Sending..." : "Send OTP →"}
              </button>
            </>
          ) : (
            <>
              <p className="text-sm text-gray-500 mb-4">OTP sent to +91 {phone} <button onClick={() => setStep("input")} className="text-[#FF4F5A] underline">Change</button></p>
              {devCode && <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 text-sm px-3 py-2 rounded-lg mb-4">{devCode}</div>}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Enter OTP</label>
                <input type="tel" value={otp} onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 4))}
                  placeholder="4-digit OTP" className="w-full px-4 py-3 border border-gray-300 rounded-xl text-center text-2xl tracking-widest focus:outline-none focus:border-[#FF4F5A]" />
              </div>
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
              <button onClick={verifyOtp} disabled={loading}
                className="w-full py-3 bg-[#FF4F5A] text-white rounded-xl font-bold hover:bg-red-600 disabled:opacity-50">
                {loading ? "Verifying..." : "Login →"}
              </button>
            </>
          )
        ) : (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#FF4F5A]" />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:border-[#FF4F5A]" />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <EyeIcon show={showPassword} />
                </button>
              </div>
            </div>
            <div className="flex justify-end mb-6">
              <Link href="/forgot-password" className="text-sm text-[#FF4F5A] hover:underline">
                Forgot password?
              </Link>
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button onClick={loginWithEmail} disabled={loading}
              className="w-full py-3 bg-[#FF4F5A] text-white rounded-xl font-bold hover:bg-red-600 disabled:opacity-50">
              {loading ? "Logging in..." : "Login →"}
            </button>
          </>
        )}

        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account? <Link href="/register" className="text-[#FF4F5A] font-medium">Register</Link>
        </p>
      </div>
    </div>
  );
}
