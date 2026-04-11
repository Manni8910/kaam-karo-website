"use client";
import Link from "next/link";
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
  "Nagpur", "Indore", "Bhopal", "Dehradun", "Chandigarh", "Patna",
  "Coimbatore", "Kochi", "Vishakhapatnam", "Agra", "Varanasi",
  "Meerut", "Rajkot", "Amritsar", "Jodhpur", "Raipur", "Guwahati",
  "Thiruvananthapuram", "Ranchi", "Bhubaneswar", "Srinagar", "Jammu",
  "Shimla", "Dehradun", "Haridwar", "Noida", "Gurgaon", "Faridabad",
  "और भी हर शहर...",
];

export default function Home() {
  const [lang, setLang] = useState<"en" | "hi">("en");
  const t = content[lang];

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-[#FF4F5A]">KaamKaro</span>
            <span className="text-xs bg-[#FF4F5A] text-white px-2 py-0.5 rounded-full">BETA</span>
          </div>
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-0.5 text-sm">
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded-md font-medium transition-all ${lang === "en" ? "bg-white shadow text-[#FF4F5A]" : "text-gray-500"}`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("hi")}
                className={`px-3 py-1 rounded-md font-medium transition-all ${lang === "hi" ? "bg-white shadow text-[#FF4F5A]" : "text-gray-500"}`}
              >
                हिं
              </button>
            </div>
            <Link href="/login" className="px-4 py-2 text-gray-700 hover:text-[#FF4F5A] font-medium transition-colors">
              {t.login}
            </Link>
            <Link href="/register" className="px-4 py-2 bg-[#FF4F5A] text-white rounded-lg font-medium hover:bg-red-600 transition-colors">
              {t.getStarted}
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            {lang === "en" ? <>India Ka <span className="text-[#FF4F5A]">Kaam</span> Platform</> : <span className="text-[#FF4F5A]">{t.tagline}</span>}
          </h1>
          <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">{t.subtitle}</p>
          <p className="text-gray-400 mb-10">{t.coverage}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register?type=seeker" className="px-8 py-4 bg-[#FF4F5A] text-white rounded-xl font-bold text-lg hover:bg-red-600 transition-colors">
              {t.findJob}
            </Link>
            <Link href="/register?type=employer" className="px-8 py-4 bg-white text-[#1a1a2e] rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors">
              {t.hire}
            </Link>
          </div>
          {/* App Coming Soon Banner */}
          <div className="mt-8 inline-flex items-center gap-3 bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-6 py-4">
            <span className="text-2xl">📱</span>
            <div className="text-left">
              <div className="text-white font-bold text-sm">Android App — Coming Soon!</div>
              <div className="text-gray-400 text-xs mt-0.5">
                {lang === "en" ? "Available on Google Play Store soon · Notify me" : "जल्द Google Play Store पर उपलब्ध"}
              </div>
            </div>
            <span className="bg-[#FF4F5A] text-white text-xs font-bold px-3 py-1 rounded-full">SOON</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#FF4F5A] py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center text-white">
          {t.stats.map((stat, i) => (
            <div key={i}>
              <div className="text-4xl font-black">{stat}</div>
              <div className="text-red-100 text-sm mt-1">{t.statsLabel[i]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works - Seekers */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-4">{t.seekerTitle}</h2>
          <p className="text-center text-gray-500 mb-12">{t.seekerSub}</p>
          <div className="grid md:grid-cols-3 gap-8">
            {t.steps.seeker.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="w-8 h-8 bg-[#FF4F5A] text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">{i + 1}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/register?type=seeker" className="px-8 py-3 bg-[#FF4F5A] text-white rounded-xl font-bold hover:bg-red-600 transition-colors">
              {t.findJobFree}
            </Link>
          </div>
        </div>
      </section>

      {/* How it works - Employers */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-4">{t.employerTitle}</h2>
          <p className="text-center text-gray-500 mb-12">{t.employerSub}</p>
          <div className="grid md:grid-cols-3 gap-8">
            {t.steps.employer.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="w-8 h-8 bg-[#1a1a2e] text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">{i + 1}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/register?type=employer" className="px-8 py-3 bg-[#1a1a2e] text-white rounded-xl font-bold hover:bg-gray-800 transition-colors">
              {t.postJob}
            </Link>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-10">{t.categories}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Driver", "Security Guard", "Cook", "Delivery Boy", "Carpenter", "Electrician", "Plumber", "Sales Executive", "Data Entry", "Receptionist", "Nurse", "Teacher", "Tailor", "Mechanic", "Waiter", "Helper", "Peon", "Sweeper", "Gardener", "Watchman", "AC Technician", "Painter", "Mason", "Welder", "Typist"].map((cat) => (
              <span key={cat} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium hover:border-[#FF4F5A] hover:text-[#FF4F5A] transition-colors cursor-pointer">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Cities - All India */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4">{t.cities}</h2>
          <p className="text-gray-500 mb-8">
            {lang === "en" ? "From Kashmir to Kanyakumari — KaamKaro works everywhere in India" : "कश्मीर से कन्याकुमारी तक — KaamKaro पूरे भारत में काम करता है"}
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-gray-600">
            {cities.map((city) => (
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
          <h2 className="text-4xl font-black mb-4">{t.cta}</h2>
          <p className="text-gray-300 mb-8">{t.ctaSub}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register?type=seeker" className="px-8 py-4 bg-[#FF4F5A] text-white rounded-xl font-bold hover:bg-red-600 transition-colors">
              {t.iAmSeeker}
            </Link>
            <Link href="/register?type=employer" className="px-8 py-4 bg-white text-[#1a1a2e] rounded-xl font-bold hover:bg-gray-100 transition-colors">
              {t.iAmEmployer}
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
              <div className="text-sm">India Ka Kaam Platform · भारत का काम प्लेटफ़ॉर्म</div>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/login" className="hover:text-white transition-colors">Login</Link>
              <Link href="/register" className="hover:text-white transition-colors">Register</Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 pt-6 text-center text-xs">
            © 2026 KaamKaro · UDYAM-UK-05-0130547 · Dehradun, Uttarakhand, India · Pan India Service
            <div className="mt-2">📞 +91 95480 27499 · ✉️ support@kaamkaro.co.in</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
