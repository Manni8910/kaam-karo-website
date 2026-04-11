import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-100 py-4 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-xl font-black text-[#FF4F5A]">KaamKaro</Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-black mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: April 10, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
            <p>KaamKaro ("we", "our", or "us") is owned and operated by <strong>Navjot Singh Lalh</strong>, trading as Kaam Karo, a sole proprietorship registered under UDYAM-UK-05-0130547, based in Dehradun, Uttarakhand, India. This Privacy Policy explains how we collect, use, and protect your personal information when you use our mobile application and website (kaamkaro.co.in).</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Phone Number:</strong> Used for authentication via OTP. This is your primary identifier on KaamKaro.</li>
              <li><strong>Profile Information:</strong> Name, location, skills, work experience, expected salary, job preferences.</li>
              <li><strong>Job Postings:</strong> For employers — job title, description, salary, location, company name.</li>
              <li><strong>Usage Data:</strong> How you interact with the app (jobs swiped, matches, messages).</li>
              <li><strong>Device Information:</strong> Device type, operating system, push notification token (for sending alerts).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To create and manage your account</li>
              <li>To match job seekers with relevant employers</li>
              <li>To send OTP messages for login verification</li>
              <li>To send push notifications about matches and messages</li>
              <li>To process payments for job postings</li>
              <li>To improve our platform and user experience</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Information Sharing</h2>
            <p className="mb-3">We do not sell your personal information. We share data only in these cases:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Between Users:</strong> When a job seeker and employer match, limited profile information is shared to facilitate communication.</li>
              <li><strong>Service Providers:</strong> We use MSG91 (SMS), Razorpay (payments), Supabase (database), and Railway (hosting). These providers process data on our behalf under their own privacy policies.</li>
              <li><strong>Legal Requirements:</strong> If required by Indian law, court order, or government authority.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Data Storage and Security</h2>
            <p>Your data is stored on secure servers hosted by Supabase (PostgreSQL database). We implement industry-standard security measures including JWT token authentication and HTTPS encryption. However, no method of electronic storage is 100% secure.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Your Rights</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Access:</strong> You can view your profile data within the app at any time.</li>
              <li><strong>Update:</strong> You can update your profile information through the app settings.</li>
              <li><strong>Delete:</strong> You can request account deletion by contacting us. We will delete your data within 30 days.</li>
              <li><strong>Opt-out:</strong> You can disable push notifications through your device settings.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Payments</h2>
            <p>Payment processing is handled by Razorpay. We do not store your credit card, debit card, or banking information. All payment transactions are encrypted and processed by Razorpay in compliance with PCI-DSS standards.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Children's Privacy</h2>
            <p>KaamKaro is not intended for users under 18 years of age. We do not knowingly collect personal information from minors. If you believe a minor has provided us with personal information, please contact us immediately.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify users of significant changes through the app or via SMS. Continued use of KaamKaro after changes constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Contact Us</h2>
            <p>For any privacy-related queries or to request data deletion:</p>
            <div className="bg-gray-50 rounded-xl p-4 mt-3">
              <p><strong>Kaam Karo</strong></p>
              <p>UDYAM-UK-05-0130547</p>
              <p>Dehradun, Uttarakhand, India - 248008</p>
              <p>Email: support@kaamkaro.co.in</p>
              <p>Phone/WhatsApp: +91 95480 27499</p>
            </div>
          </section>
        </div>
      </div>

      <footer className="border-t border-gray-100 py-6 px-4 text-center text-sm text-gray-400">
        <Link href="/" className="hover:text-[#FF4F5A]">KaamKaro</Link> ·{" "}
        <Link href="/terms" className="hover:text-[#FF4F5A]">Terms of Service</Link>
      </footer>
    </div>
  );
}
