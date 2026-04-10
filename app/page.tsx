"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-[#FF4F5A]">KaamKaro</span>
            <span className="text-xs bg-[#FF4F5A] text-white px-2 py-0.5 rounded-full">BETA</span>
          </div>
          <div className="flex gap-3">
            <Link href="/login" className="px-4 py-2 text-gray-700 hover:text-[#FF4F5A] font-medium transition-colors">
              Login
            </Link>
            <Link href="/register" className="px-4 py-2 bg-[#FF4F5A] text-white rounded-lg font-medium hover:bg-red-600 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            India Ka <span className="text-[#FF4F5A]">Kaam</span> Platform
          </h1>
          <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
            Swipe to find jobs. Swipe to hire workers. It's that simple.
          </p>
          <p className="text-gray-400 mb-10">
            Full-time · Part-time · Contract · Internship — across 20+ cities in India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register?type=seeker" className="px-8 py-4 bg-[#FF4F5A] text-white rounded-xl font-bold text-lg hover:bg-red-600 transition-colors">
              Find a Job →
            </Link>
            <Link href="/register?type=employer" className="px-8 py-4 bg-white text-[#1a1a2e] rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors">
              Hire Workers →
            </Link>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            📱 Also available on Android — Download the App
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#FF4F5A] py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center text-white">
          <div>
            <div className="text-4xl font-black">20+</div>
            <div className="text-red-100 text-sm mt-1">Cities in India</div>
          </div>
          <div>
            <div className="text-4xl font-black">Free</div>
            <div className="text-red-100 text-sm mt-1">For Job Seekers</div>
          </div>
          <div>
            <div className="text-4xl font-black">₹199</div>
            <div className="text-red-100 text-sm mt-1">Per Job Post</div>
          </div>
        </div>
      </section>

      {/* How it works - Seekers */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-4">
            For Job Seekers 👷
          </h2>
          <p className="text-center text-gray-500 mb-12">Find your next job in minutes, not weeks</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Create Profile", desc: "Sign up with your phone number. Add your skills, experience and location.", icon: "📱" },
              { step: "2", title: "Swipe Jobs", desc: "Swipe right on jobs you like. Swipe left to skip. Just like Tinder — but for jobs!", icon: "👆" },
              { step: "3", title: "Get Hired", desc: "When employer likes you back — it's a match! Chat and get hired.", icon: "🎉" },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="w-8 h-8 bg-[#FF4F5A] text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/register?type=seeker" className="px-8 py-3 bg-[#FF4F5A] text-white rounded-xl font-bold hover:bg-red-600 transition-colors">
              Find Jobs Free →
            </Link>
          </div>
        </div>
      </section>

      {/* How it works - Employers */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-4">
            For Employers 🏢
          </h2>
          <p className="text-center text-gray-500 mb-12">Hire the right person fast</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Post a Job", desc: "List your job in 2 minutes. Pay just ₹199 per posting — no subscriptions.", icon: "📝" },
              { step: "2", title: "Review Applicants", desc: "Browse candidate profiles. See their skills, location and experience.", icon: "🔍" },
              { step: "3", title: "Hire Directly", desc: "Match with candidates and chat directly. No middlemen, no commissions.", icon: "✅" },
            ].map((item) => (
              <div key={item.step} className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="w-8 h-8 bg-[#1a1a2e] text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/register?type=employer" className="px-8 py-3 bg-[#1a1a2e] text-white rounded-xl font-bold hover:bg-gray-800 transition-colors">
              Post a Job for ₹199 →
            </Link>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-10">Popular Job Categories</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Driver", "Security Guard", "Cook", "Delivery Boy", "Carpenter", "Electrician", "Plumber", "Sales Executive", "Data Entry", "Receptionist", "Nurse", "Teacher", "Tailor", "Mechanic", "Waiter"].map((cat) => (
              <span key={cat} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium hover:border-[#FF4F5A] hover:text-[#FF4F5A] transition-colors cursor-pointer">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-10">Available in 20+ Cities</h2>
          <div className="flex flex-wrap justify-center gap-3 text-gray-600">
            {["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Surat", "Kanpur", "Nagpur", "Indore", "Bhopal", "Dehradun", "Chandigarh", "Patna", "Coimbatore", "Kochi"].map((city) => (
              <span key={city} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                📍 {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-black mb-4">Ready to get started?</h2>
          <p className="text-gray-300 mb-8">Join thousands of workers and employers on KaamKaro</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register?type=seeker" className="px-8 py-4 bg-[#FF4F5A] text-white rounded-xl font-bold hover:bg-red-600 transition-colors">
              I'm Looking for Work
            </Link>
            <Link href="/register?type=employer" className="px-8 py-4 bg-white text-[#1a1a2e] rounded-xl font-bold hover:bg-gray-100 transition-colors">
              I Want to Hire
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="text-xl font-black text-white mb-1">KaamKaro</div>
              <div className="text-sm">India Ka Kaam Platform</div>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/login" className="hover:text-white transition-colors">Login</Link>
              <Link href="/register" className="hover:text-white transition-colors">Register</Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 pt-6 text-center text-xs">
            © 2024 KaamKaro (Kaam Karo) · UDYAM-UK-05-0130547 · Dehradun, Uttarakhand, India
          </div>
        </div>
      </footer>
    </div>
  );
}
