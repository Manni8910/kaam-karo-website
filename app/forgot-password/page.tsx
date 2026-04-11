"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { apiRequest } from "@/lib/api";

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

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [step, setStep] = useState<"input" | "otp" | "newpass">("input");
  const [method, setMethod] = useState<"email" | "phone">("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [devCode, setDevCode] = useState("");

  async function sendReset() {
    setError("");
    setLoading(true);
    try {
      const body = method === "email" ? { email } : { phone };
      const data = await apiRequest("/api/auth/forgot-password", {
        method: "POST",
        body: JSON.stringify({ ...body, method }),
      });
      if (data.devCode) setDevCode(`Dev OTP: ${data.devCode}`);
      setStep("otp");
    } catch (e: any) { setError(e.message); } finally { setLoading(false); }
  }

  async function verifyOtp() {
    setError("");
    if (otp.length !== 6 && otp.length !== 4) { setError("Enter the OTP"); return; }
    setStep("newpass");
  }

  async function resetPassword() {
    setError("");
    if (newPassword.length < 6) { setError("Password must be at least 6 characters"); return; }
    if (newPassword !== confirmPassword) { setError("Passwords don't match"); return; }
    setLoading(true);
    try {
      const body = method === "email" ? { email } : { phone };
      await apiRequest("/api/auth/reset-password", {
        method: "POST",
        body: JSON.stringify({ ...body, otp, newPassword }),
      });
      setSuccess("Password reset successfully!");
      setTimeout(() => router.push("/login"), 2000);
    } catch (e: any) { setError(e.message); } finally { setLoading(false); }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm p-8 w-full max-w-md">
        <Link href="/" className="text-2xl font-black text-[#FF4F5A] block mb-8">KaamKaro</Link>

        {/* Step indicator */}
        <div className="flex items-center gap-2 mb-6">
          {["Send OTP", "Verify", "New Password"].map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                (step === "input" && i === 0) || (step === "otp" && i === 1) || (step === "newpass" && i === 2)
                  ? "bg-[#FF4F5A] text-white"
                  : ((step === "otp" && i === 0) || (step === "newpass" && i <= 1))
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 text-gray-400"
              }`}>{i + 1}</div>
              <span className="text-xs text-gray-400 hidden sm:block">{s}</span>
              {i < 2 && <div className="flex-1 h-px bg-gray-200 w-4" />}
            </div>
          ))}
        </div>

        {step === "input" && (
          <>
            <h1 className="text-2xl font-bold mb-2">Forgot Password?</h1>
            <p className="text-gray-500 mb-6">We'll send an OTP to reset your password</p>

            <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
              <button onClick={() => setMethod("email")}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${method === "email" ? "bg-white shadow text-[#FF4F5A]" : "text-gray-500"}`}>
                ✉️ Email
              </button>
              <button onClick={() => setMethod("phone")}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${method === "phone" ? "bg-white shadow text-[#FF4F5A]" : "text-gray-500"}`}>
                📱 Mobile
              </button>
            </div>

            {method === "email" ? (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#FF4F5A]" />
              </div>
            ) : (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                <div className="flex">
                  <span className="flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-xl text-gray-500">+91</span>
                  <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                    placeholder="9876543210" className="flex-1 px-4 py-3 border border-gray-300 rounded-r-xl focus:outline-none focus:border-[#FF4F5A]" />
                </div>
              </div>
            )}

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button onClick={sendReset} disabled={loading}
              className="w-full py-3 bg-[#FF4F5A] text-white rounded-xl font-bold hover:bg-red-600 disabled:opacity-50">
              {loading ? "Sending..." : "Send Reset OTP →"}
            </button>
          </>
        )}

        {step === "otp" && (
          <>
            <h1 className="text-2xl font-bold mb-2">Enter OTP</h1>
            <p className="text-gray-500 mb-6">
              OTP sent to {method === "email" ? email : `+91 ${phone}`}
              <button onClick={() => setStep("input")} className="text-[#FF4F5A] underline ml-2 text-sm">Change</button>
            </p>
            {devCode && <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 text-sm px-3 py-2 rounded-lg mb-4">{devCode}</div>}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">OTP Code</label>
              <input type="tel" value={otp} onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                placeholder="Enter OTP" className="w-full px-4 py-3 border border-gray-300 rounded-xl text-center text-2xl tracking-widest focus:outline-none focus:border-[#FF4F5A]" />
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button onClick={verifyOtp} disabled={loading}
              className="w-full py-3 bg-[#FF4F5A] text-white rounded-xl font-bold hover:bg-red-600 disabled:opacity-50">
              Verify OTP →
            </button>
            <button onClick={sendReset} disabled={loading} className="w-full py-2 text-gray-500 text-sm mt-3 hover:text-[#FF4F5A]">
              Resend OTP
            </button>
          </>
        )}

        {step === "newpass" && (
          <>
            <h1 className="text-2xl font-bold mb-2">Set New Password</h1>
            <p className="text-gray-500 mb-6">Choose a strong password</p>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
              <div className="relative">
                <input type={showPass ? "text" : "password"} value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Min 6 characters" className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:border-[#FF4F5A]" />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <EyeIcon show={showPass} />
                </button>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
              <div className="relative">
                <input type={showConfirm ? "text" : "password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Repeat password" className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:border-[#FF4F5A]" />
                <button type="button" onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <EyeIcon show={showConfirm} />
                </button>
              </div>
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            {success && <p className="text-green-600 text-sm mb-4 text-center">{success} Redirecting...</p>}
            <button onClick={resetPassword} disabled={loading}
              className="w-full py-3 bg-[#FF4F5A] text-white rounded-xl font-bold hover:bg-red-600 disabled:opacity-50">
              {loading ? "Resetting..." : "Reset Password →"}
            </button>
          </>
        )}

        <p className="text-center text-sm text-gray-500 mt-6">
          Remember your password? <Link href="/login" className="text-[#FF4F5A] font-medium">Login</Link>
        </p>
      </div>
    </div>
  );
}
