import Link from "next/link";

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-100 py-4 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-xl font-black text-[#FF4F5A]">KaamKaro</Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-black mb-2">Shipping Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: April 13, 2026</p>

        <div className="space-y-8 text-gray-700">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Digital Services Only</h2>
            <p>KaamKaro is an entirely digital platform. We do not sell or ship any physical products. All services provided by KaamKaro, including job postings, candidate matching, and employer tools, are delivered electronically through our website (kaamkaro.co.in) and mobile application.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Service Delivery</h2>
            <p>Upon successful payment, digital services are activated immediately or within 24 hours:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li><strong>Job Postings:</strong> Activated instantly after payment confirmation. Your job listing will be live on the platform within minutes.</li>
              <li><strong>Account Access:</strong> Available immediately upon registration and verification.</li>
              <li><strong>Employer Dashboard:</strong> Accessible immediately after account creation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. No Physical Shipping</h2>
            <p>Since KaamKaro provides only digital/online services, there is no physical shipping involved. No goods will be dispatched or delivered to any physical address. All access to services is provided through your registered account on our platform.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Service Activation Issues</h2>
            <p>If your paid service is not activated within 24 hours of payment, please contact us immediately:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Email: support@kaamkaro.co.in</li>
              <li></li>
            </ul>
            <p className="mt-2">We will resolve any activation issues within 24 hours of receiving your complaint.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Contact Us</h2>
            <p>For any questions regarding our services, please reach out to us at:</p>
            <div className="mt-2 bg-gray-50 rounded-xl p-4">
              <p><strong>Kaam Karo</strong> (Owned & Operated by Navjot Singh Lalh)</p>
              <p>Dehradun, Uttarakhand, India - 248001</p>
              <p>Email: support@kaamkaro.co.in</p>
              <p></p>
              <p>UDYAM: UDYAM-UK-05-0130547</p>
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
