import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-100 py-4 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-xl font-black text-[#FF4F5A]">KaamKaro</Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-black mb-2">Terms of Service</h1>
        <p className="text-gray-500 mb-8">Last updated: April 10, 2026</p>

        <div className="space-y-8 text-gray-700">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using KaamKaro (the "Service"), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Service. KaamKaro is operated by Kaam Karo (UDYAM-UK-05-0130547), Dehradun, Uttarakhand, India.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Description of Service</h2>
            <p>KaamKaro is a job marketplace platform that connects job seekers and employers in India. The platform allows:</p>
            <ul className="list-disc pl-5 space-y-1 mt-3">
              <li>Job seekers to create profiles and browse/apply for jobs</li>
              <li>Employers to post job listings and find candidates</li>
              <li>Matched users to communicate via in-app messaging</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. User Accounts</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>You must be at least 18 years old to use KaamKaro</li>
              <li>You must provide a valid Indian mobile number for registration</li>
              <li>You are responsible for maintaining the security of your account</li>
              <li>One account per person/business is permitted</li>
              <li>You must provide accurate and truthful information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Job Seeker Terms</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Job seeking is free on KaamKaro</li>
              <li>You must not misrepresent your qualifications, skills, or experience</li>
              <li>KaamKaro does not guarantee employment</li>
              <li>We are not responsible for the accuracy of job listings posted by employers</li>
              <li>You are responsible for verifying the legitimacy of any employer before accepting work</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Employer Terms</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Each job posting requires a payment of ₹199 (inclusive of taxes)</li>
              <li>Job postings must be genuine and for legitimate employment opportunities</li>
              <li>Employers must not post fraudulent, misleading, or illegal job listings</li>
              <li>Employers must not discriminate based on religion, caste, gender, or disability</li>
              <li>Payments are non-refundable once a job is posted</li>
              <li>KaamKaro reserves the right to remove any job posting that violates these terms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Prohibited Activities</h2>
            <p className="mb-3">You may not use KaamKaro to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Post fake or fraudulent job listings</li>
              <li>Collect personal information from other users without consent</li>
              <li>Harass, abuse, or threaten other users</li>
              <li>Spam or send unsolicited messages</li>
              <li>Use the platform for illegal activities</li>
              <li>Attempt to hack, scrape, or reverse-engineer the platform</li>
              <li>Create multiple accounts to circumvent bans or restrictions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Payments and Refunds</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Job posting fee: ₹199 per posting</li>
              <li>Payments are processed by Razorpay and are subject to their terms</li>
              <li>No refunds for published job posts</li>
              <li>If a payment is processed but the job is not posted due to a technical error, contact us within 7 days for a full refund</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Intellectual Property</h2>
            <p>All content, design, and technology of KaamKaro is owned by Kaam Karo. You may not copy, reproduce, or distribute any part of the platform without written permission. User-generated content (profiles, job posts) remains owned by the user, but you grant KaamKaro a license to display and use it for platform operations.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Limitation of Liability</h2>
            <p>KaamKaro is provided "as is" without warranties of any kind. We are not liable for:</p>
            <ul className="list-disc pl-5 space-y-1 mt-3">
              <li>Any employment outcomes or disputes between users</li>
              <li>Loss of data or service interruptions</li>
              <li>Actions of employers or job seekers on the platform</li>
              <li>Indirect or consequential damages</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Termination</h2>
            <p>KaamKaro reserves the right to suspend or terminate any account that violates these Terms of Service, with or without prior notice. Users may delete their account at any time by contacting support.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">11. Governing Law</h2>
            <p>These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Dehradun, Uttarakhand, India.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">12. Contact</h2>
            <div className="bg-gray-50 rounded-xl p-4">
              <p><strong>Kaam Karo</strong></p>
              <p>UDYAM-UK-05-0130547</p>
              <p>Dehradun, Uttarakhand, India - 248008</p>
              <p>Email: support@kaamkaro.co.in</p>
              <p>Phone: +91 9137127139</p>
            </div>
          </section>
        </div>
      </div>

      <footer className="border-t border-gray-100 py-6 px-4 text-center text-sm text-gray-400">
        <Link href="/" className="hover:text-[#FF4F5A]">KaamKaro</Link> ·{" "}
        <Link href="/privacy" className="hover:text-[#FF4F5A]">Privacy Policy</Link>
      </footer>
    </div>
  );
}
