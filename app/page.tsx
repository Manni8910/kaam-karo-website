"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const content = {
  en: {
    tagline: "India Ka Kaam Platform",
    subtitle: "Swipe to find jobs. Swipe to hire workers. It's that simple.",
    coverage: "Full-time · Part-time · Contract · Internship — Available across all of India 🇮🇳",
    findJob: "Find a Job →",
    hire: "Hire Workers →",
    app: "📱 Also available on Android — Download the App",
    stats: ["All India", "Free", "₹199"],
    statsLabel: ["Pan India Coverage", "For Job Seekers", "Per Job Post"],
    seekerTitle: "For Job Seekers 👷",
    seekerSub: "Find your next job in minutes, not weeks",
    employerTitle: "For Employers 🏢",
    employerSub: "Hire the right person fast",
    steps: {
      seeker: [
        { title: "Create Profile", desc: "Sign up with phone or email. Add your skills, experience and location.", icon: "📱" },
        { title: "Swipe Jobs", desc: "Swipe right on jobs you like. Swipe left to skip. Just like Tinder — but for jobs!", icon: "👆" },
        { title: "Get Hired", desc: "When employer likes you back — it's a match! Chat and get hired.", icon: "🎉" },
      ],
      employer: [
        { title: "Post a Job", desc: "List your job in 2 minutes. Pay just ₹199 per posting — no subscriptions.", icon: "📝" },
        { title: "Review Applicants", desc: "Browse candidate profiles. See their skills, location and experience.", icon: "🔍" },
        { title: "Hire Directly", desc: "Match with candidates and chat directly. No middlemen, no commissions.", icon: "✅" },
      ],
    },
    categories: "Popular Job Categories",
    cities: "Available Across All of India",
    cta: "Ready to get started?",
    ctaSub: "Join thousands of workers and employers on KaamKaro",
    iAmSeeker: "I'm Looking for Work",
    iAmEmployer: "I Want to Hire",
    login: "Login",
    getStarted: "Get Started",
    findJobFree: "Find Jobs Free →",
    postJob: "Post a Job for ₹199 →",
  },
  hi: {
    tagline: "भारत का काम प्लेटफ़ॉर्म",
    subtitle: "नौकरी खोजें, काम के लिए स्वाइप करें। बस इतना आसान है।",
    coverage: "फुल टाइम · पार्ट टाइम · कॉन्ट्रैक्ट · इंटर्नशिप — पूरे भारत में उपलब्ध 🇮🇳",
    findJob: "नौकरी खोजें →",
    hire: "कर्मचारी ढूंढें →",
    app: "📱 Android पर भी उपलब्ध — ऐप डाउनलोड करें",
    stats: ["पूरा भारत", "मुफ़्त", "₹199"],
    statsLabel: ["पैन इंडिया कवरेज", "नौकरी खोजने वालों के लिए", "प्रति जॉब पोस्ट"],
    seekerTitle: "नौकरी खोजने वालों के लिए 👷",
    seekerSub: "मिनटों में अपनी अगली नौकरी खोजें",
    employerTitle: "नियोक्ताओं के लिए 🏢",
    employerSub: "सही व्यक्ति को जल्दी से काम पर रखें",
    steps: {
      seeker: [
        { title: "प्रोफ़ाइल बनाएं", desc: "फ़ोन या ईमेल से साइन अप करें। अपने कौशल, अनुभव और स्थान जोड़ें।", icon: "📱" },
        { title: "नौकरियां स्वाइप करें", desc: "पसंद की नौकरी पर दाईं ओर स्वाइप करें। छोड़ने के लिए बाईं ओर। बिल्कुल Tinder जैसा — पर नौकरियों के लिए!", icon: "👆" },
        { title: "नौकरी पाएं", desc: "जब नियोक्ता आपको पसंद करे — मैच हो जाए! चैट करें और नौकरी पाएं।", icon: "🎉" },
      ],
      employer: [
        { title: "नौकरी पोस्ट करें", desc: "2 मिनट में नौकरी लिस्ट करें। केवल ₹199 प्रति पोस्ट — कोई सब्सक्रिप्शन नहीं।", icon: "📝" },
        { title: "आवेदकों की समीक्षा करें", desc: "उम्मीदवारों की प्रोफ़ाइल देखें। उनके कौशल, स्थान और अनुभव देखें।", icon: "🔍" },
        { title: "सीधे काम पर रखें", desc: "उम्मीदवारों से सीधे मैच करें और चैट करें। कोई बिचौलिया नहीं।", icon: "✅" },
      ],
    },
    categories: "लोकप्रिय जॉब कैटेगरी",
    cities: "पूरे भारत में उपलब्ध",
    cta: "शुरू करने के लिए तैयार हैं?",
    ctaSub: "हजारों कामगारों और नियोक्ताओं के साथ KaamKaro से जुड़ें",
    iAmSeeker: "मुझे नौकरी चाहिए",
    iAmEmployer: "मुझे कर्मचारी चाहिए",
    login: "लॉगिन",
    getStarted: "शुरू करें",
    findJobFree: "मुफ़्त नौकरी खोजें →",
    postJob: "₹199 में जॉब पोस्ट करें →",
  },
};

const cities = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata",
  "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Surat", "Kanpur",
  "Nagpur", "Indore", "Bhopal", "Chandigarh", "Patna",
  "Coimbatore", "Kochi", "Vishakhapatnam", "Agra", "Varanasi",
  "Meerut", "Rajkot", "Amritsar", "Jodhpur", "Raipur", "Guwahati",
  "Thiruvananthapuram", "Ranchi", "Bhubaneswar", "Noida", "Gurgaon",
  "Faridabad", "Ludhiana", "Jalandhar", "और भी हर शहर...",
];

export default function Home() {
  const [lang, setLang] = useState<"en" | "hi">("en");
  const t = content[lang];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <Image src="/kaam-icon.jpeg" alt="KaamKaro" width={36} height={36} className="rounded-xl" />
            <Image src="/kaam-logo.jpeg" alt="KaamKaro" width={130} height={36} className="object-contain hidden sm:block" />
            <span className="text-xl font-black text-[#1B3FAB] sm:hidden">KaamKaro</span>
            <span className="text-xs bg-[#38B83A] text-white px-2 py-0.5 rounded-full font-semibold tracking-wide">BETA</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex bg-gray-100 rounded-lg p-0.5 text-sm">
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded-md font-medium transition-all ${lang === "en" ? "bg-white shadow text-[#1B3FAB]" : "text-gray-500"}`}
              >EN</button>
              <button
                onClick={() => setLang("hi")}
                className={`px-3 py-1 rounded-md font-medium transition-all ${lang === "hi" ? "bg-white shadow text-[#1B3FAB]" : "text-gray-500"}`}
              >हिं</button>
            </div>
            <Link href="/login" className="px-4 py-2 text-gray-600 hover:text-[#1B3FAB] font-medium transition-colors text-sm hidden sm:block">
              {t.login}
            </Link>
            <Link href="/register" className="px-5 py-2 bg-[#1B3FAB] text-white rounded-xl font-semibold text-sm hover:bg-[#162f88] transition-all shadow-sm hover:shadow-md">
              {t.getStarted}
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0a0f2e] via-[#111836] to-[#0d1b35] text-white py-28 px-4 overflow-hidden">
        {/* Ambient glow effects */}
        <div className="absolute top-[-80px] left-1/4 w-[500px] h-[500px] bg-[#1B3FAB] rounded-full blur-[140px] opacity-25 pointer-events-none" />
        <div className="absolute bottom-[-60px] right-1/4 w-[400px] h-[400px] bg-[#38B83A] rounded-full blur-[120px] opacity-15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#1B3FAB] rounded-full blur-[180px] opacity-8 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 text-sm font-semibold text-white/90 mb-8">
            <span className="w-2 h-2 bg-[#38B83A] rounded-full animate-pulse inline-block"></span>
            {lang === "en" ? "India's Swipe-Based Job Platform" : "भारत का स्वाइप जॉब प्लेटफ़ॉर्म"}
          </div>

          <h1 className="text-5xl md:text-[72px] font-black mb-6 leading-[1.08] tracking-tight">
            {lang === "en" ? (
              <>
                India Ka{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5b8df5] to-[#38B83A]">Kaam</span>{" "}
                Platform
              </>
            ) : (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5b8df5] to-[#38B83A]">
                {t.tagline}
              </span>
            )}
          </h1>

          <p className="text-xl text-gray-300 mb-3 max-w-2xl mx-auto leading-relaxed">{t.subtitle}</p>
          <p className="text-gray-400 text-sm mb-10">{t.coverage}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/register?type=seeker"
              className="px-9 py-4 bg-[#1B3FAB] text-white rounded-2xl font-bold text-lg hover:bg-[#162f88] transition-all shadow-[0_4px_24px_rgba(27,63,171,0.4)] hover:shadow-[0_8px_32px_rgba(27,63,171,0.5)] hover:-translate-y-0.5"
            >
              {t.findJob}
            </Link>
            <Link
              href="/register?type=employer"
              className="px-9 py-4 bg-white/10 backdrop-blur-sm border border-white/25 text-white rounded-2xl font-bold text-lg hover:bg-white/18 transition-all hover:-translate-y-0.5"
            >
              {t.hire}
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-gray-400 mb-12">
            <span className="flex items-center gap-1.5"><span className="text-[#38B83A]">✓</span> Free for Job Seekers</span>
            <span className="flex items-center gap-1.5"><span className="text-[#38B83A]">✓</span> Verified Employers</span>
            <span className="flex items-center gap-1.5"><span className="text-[#38B83A]">✓</span> Instant Match</span>
            <span className="flex items-center gap-1.5"><span className="text-[#38B83A]">✓</span> Pan India</span>
          </div>

          {/* App Banner */}
          <div className="inline-flex items-center gap-4 bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl px-7 py-4">
            <span className="text-3xl">📱</span>
            <div className="text-left">
              <div className="text-white font-bold text-sm">Android App — Coming Soon!</div>
              <div className="text-gray-400 text-xs mt-0.5">
                {lang === "en" ? "Available on Google Play Store soon · Get notified" : "जल्द Google Play Store पर उपलब्ध"}
              </div>
            </div>
            <span className="bg-[#38B83A] text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap">SOON</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#1B3FAB] py-14 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 text-center text-white">
          {t.stats.map((stat, i) => (
            <div key={i} className="py-2">
              <div className="text-4xl md:text-5xl font-black mb-1">{stat}</div>
              <div className="text-blue-200 text-sm">{t.statsLabel[i]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works — Job Seekers */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-50 text-[#1B3FAB] text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">For Job Seekers</span>
            <h2 className="text-4xl font-black mb-4 text-gray-900">{t.seekerTitle}</h2>
            <p className="text-gray-500 text-lg">{t.seekerSub}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.steps.seeker.map((item, i) => (
              <div key={i} className="relative bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group cursor-default">
                <div className="absolute top-6 right-6 w-8 h-8 bg-[#1B3FAB]/8 text-[#1B3FAB] rounded-full flex items-center justify-center text-sm font-black">
                  {i + 1}
                </div>
                <div className="w-14 h-14 bg-gradient-to-br from-[#1B3FAB] to-[#2d52c5] rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-md group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-black text-lg mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/register?type=seeker" className="inline-flex items-center px-8 py-3.5 bg-[#1B3FAB] text-white rounded-2xl font-bold hover:bg-[#162f88] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
              {t.findJobFree}
            </Link>
          </div>
        </div>
      </section>

      {/* How it works — Employers */}
      <section className="py-24 px-4 bg-[#0a0f2e]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-white/10 text-white text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">For Employers</span>
            <h2 className="text-4xl font-black mb-4 text-white">{t.employerTitle}</h2>
            <p className="text-gray-400 text-lg">{t.employerSub}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.steps.employer.map((item, i) => (
              <div key={i} className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:-translate-y-1.5 transition-all duration-300 group cursor-default">
                <div className="absolute top-6 right-6 w-8 h-8 bg-[#38B83A]/15 text-[#38B83A] rounded-full flex items-center justify-center text-sm font-black">
                  {i + 1}
                </div>
                <div className="w-14 h-14 bg-gradient-to-br from-[#38B83A] to-[#2ea030] rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-md group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-black text-lg mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/register?type=employer" className="inline-flex items-center px-8 py-3.5 bg-[#38B83A] text-white rounded-2xl font-bold hover:bg-[#2ea030] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
              {t.postJob}
            </Link>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-blue-50 text-[#1B3FAB] text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">Browse by Role</span>
          <h2 className="text-4xl font-black mb-3 text-gray-900">{t.categories}</h2>
          <p className="text-gray-500 mb-10">Find openings that match your expertise</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Driver 🚗", "Security Guard 🛡️", "Cook 👨‍🍳", "Delivery Boy 🛵",
              "Carpenter 🔨", "Electrician ⚡", "Plumber 🔧", "Sales Executive 💼",
              "Data Entry 💻", "Receptionist 📞", "Nurse 🏥", "Teacher 📚",
              "Tailor 🧵", "Mechanic 🔩", "Waiter 🍽️", "Helper 🤝",
              "Peon", "Sweeper", "Gardener 🌿", "Watchman",
              "AC Technician ❄️", "Painter 🎨", "Mason 🧱", "Welder", "Typist",
            ].map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium hover:border-[#1B3FAB] hover:text-[#1B3FAB] hover:bg-blue-50 transition-all cursor-pointer shadow-sm"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-green-50 text-[#38B83A] text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">Pan India Coverage</span>
          <h2 className="text-4xl font-black mb-4 text-gray-900">{t.cities}</h2>
          <p className="text-gray-500 mb-10">
            {lang === "en"
              ? "From Kashmir to Kanyakumari — KaamKaro works everywhere in India"
              : "कश्मीर से कन्याकुमारी तक — KaamKaro पूरे भारत में काम करता है"}
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-gray-600">
            {cities.map((city) => (
              <span
                key={city}
                className="px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-sm hover:bg-blue-50 hover:border-blue-100 hover:text-[#1B3FAB] transition-colors cursor-default"
              >
                📍 {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-4 relative overflow-hidden bg-gradient-to-br from-[#0a0f2e] via-[#111836] to-[#0d1b35] text-white text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1B3FAB] rounded-full blur-[150px] opacity-20" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#38B83A] rounded-full blur-[100px] opacity-15" />
        </div>
        <div className="max-w-2xl mx-auto relative z-10">
          <span className="inline-block bg-white/10 border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-wider">Get Started Today — It&apos;s Free</span>
          <h2 className="text-5xl font-black mb-4">{t.cta}</h2>
          <p className="text-gray-300 mb-10 text-lg leading-relaxed">{t.ctaSub}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register?type=seeker"
              className="px-9 py-4 bg-[#1B3FAB] text-white rounded-2xl font-bold text-lg hover:bg-[#162f88] transition-all shadow-[0_4px_24px_rgba(27,63,171,0.4)] hover:shadow-[0_8px_32px_rgba(27,63,171,0.5)] hover:-translate-y-0.5"
            >
              {t.iAmSeeker}
            </Link>
            <Link
              href="/register?type=employer"
              className="px-9 py-4 bg-white/10 backdrop-blur-sm border border-white/25 text-white rounded-2xl font-bold text-lg hover:bg-white/18 transition-all hover:-translate-y-0.5"
            >
              {t.iAmEmployer}
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Image src="/kaam-icon.jpeg" alt="KaamKaro" width={44} height={44} className="rounded-xl" />
                <div>
                  <div className="text-xl font-black text-white">KaamKaro</div>
                  <div className="text-xs mt-0.5 text-gray-500">India Ka Kaam Platform</div>
                </div>
              </div>
              <p className="text-sm max-w-xs leading-relaxed">
                India&apos;s swipe-based job marketplace connecting workers and employers across every city.
              </p>
              <div className="mt-4 text-xs space-y-1">
                <div>📞 +91 95480 27499</div>
                <div>✉️ support@kaamkaro.co.in</div>
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-12 text-sm">
              <div className="flex flex-col gap-3">
                <span className="text-white font-semibold text-xs uppercase tracking-wider mb-1">Platform</span>
                <Link href="/login" className="hover:text-white transition-colors">Login</Link>
                <Link href="/register" className="hover:text-white transition-colors">Register</Link>
                <Link href="/register?type=employer" className="hover:text-white transition-colors">Post a Job</Link>
                <Link href="/register?type=seeker" className="hover:text-white transition-colors">Find Jobs</Link>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-white font-semibold text-xs uppercase tracking-wider mb-1">Legal</span>
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600">
              <span>
                © 2026 KaamKaro ·{" "}
                <strong className="text-gray-400">Kaam Technologies LLP</strong> · Punjab, India
              </span>
              <span className="text-gray-600">🇮🇳 Made in India for India</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
