import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-100 py-4 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-xl font-black text-[#1B3FAB]">KaamKaro</Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-black mb-2">Contact Us</h1>
        <p className="text-gray-500 mb-8">We're here to help — reach out anytime</p>

        <div className="space-y-8 text-gray-700">

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#FFF5F5] rounded-2xl p-6">
              <div className="text-3xl mb-3">✉️</div>
              <h2 className="text-lg font-bold text-gray-900 mb-2">Email Support</h2>
              <p className="text-sm text-gray-600 mb-3">For general queries, billing, and account issues</p>
              <a href="mailto:support@kaamkaro.co.in" className="text-[#1B3FAB] font-bold">support@kaamkaro.co.in</a>
              <p className="text-xs text-gray-400 mt-2">Response within 24 hours</p>
            </div>

            <div className="bg-[#FFF5F5] rounded-2xl p-6">
              <div className="text-3xl mb-3">💬</div>
              <h2 className="text-lg font-bold text-gray-900 mb-2">WhatsApp Support</h2>
              <p className="text-sm text-gray-600 mb-3">For urgent queries and support</p>
              <a href="mailto:support@kaamkaro.co.in" className="text-[#1B3FAB] font-bold">support@kaamkaro.co.in</a>
              <p className="text-xs text-gray-400 mt-2">Mon–Sat, 10 AM – 6 PM IST</p>
            </div>
          </div>

          <section className="bg-gray-50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Business Details</h2>
            <div className="space-y-2 text-sm">
              <div className="flex gap-3">
                <span className="text-gray-400 w-32 shrink-0">Business Name</span>
                <span className="font-medium">Kaam Karo</span>
              </div>
              <div className="flex gap-3">
                <span className="text-gray-400 w-32 shrink-0">Owner</span>
                <span className="font-medium">Navjot Singh Lalh</span>
              </div>
              <div className="flex gap-3">
                <span className="text-gray-400 w-32 shrink-0">Address</span>
                <span className="font-medium">Dehradun, Uttarakhand, India - 248001</span>
              </div>
              <div className="flex gap-3">
                <span className="text-gray-400 w-32 shrink-0">UDYAM No.</span>
                <span className="font-medium">UDYAM-UK-05-0130547</span>
              </div>
              <div className="flex gap-3">
                <span className="text-gray-400 w-32 shrink-0">Email</span>
                <span className="font-medium">support@kaamkaro.co.in</span>
              </div>
              <div className="flex gap-3">
                <span className="text-gray-400 w-32 shrink-0">Website</span>
                <span className="font-medium">kaamkaro.co.in</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="border border-gray-100 rounded-xl p-4">
                <h3 className="font-bold mb-1">How do I post a job?</h3>
                <p className="text-sm text-gray-600">Register as an employer, go to your dashboard, and click "Post New Job". Pay ₹199 per job posting.</p>
              </div>
              <div className="border border-gray-100 rounded-xl p-4">
                <h3 className="font-bold mb-1">Is job searching free?</h3>
                <p className="text-sm text-gray-600">Yes! Job seekers can create profiles and apply to jobs completely free of charge.</p>
              </div>
              <div className="border border-gray-100 rounded-xl p-4">
                <h3 className="font-bold mb-1">How do I get a refund?</h3>
                <p className="text-sm text-gray-600">Email us at support@kaamkaro.co.in within 7 days of payment. See our <Link href="/cancellation" className="text-[#1B3FAB]">Cancellation Policy</Link> for details.</p>
              </div>
              <div className="border border-gray-100 rounded-xl p-4">
                <h3 className="font-bold mb-1">Where is KaamKaro available?</h3>
                <p className="text-sm text-gray-600">KaamKaro is available across all of India — Pan India coverage.</p>
              </div>
            </div>
          </section>

        </div>
      </div>

      <footer className="bg-gray-50 border-t border-gray-100 py-6 px-4 mt-12">
        <div className="max-w-3xl mx-auto flex gap-6 text-sm text-gray-500 flex-wrap">
          <Link href="/privacy" className="hover:text-gray-800">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gray-800">Terms of Service</Link>
          <Link href="/shipping" className="hover:text-gray-800">Shipping Policy</Link>
          <Link href="/contact" className="hover:text-gray-800">Contact Us</Link>
          <Link href="/cancellation" className="hover:text-gray-800">Cancellation & Refunds</Link>
        </div>
      </footer>
    </div>
  );
}
