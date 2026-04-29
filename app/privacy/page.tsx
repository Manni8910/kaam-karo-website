import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-100 py-4 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-xl font-black text-[#1B3FAB]">KaamKaro</Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-black mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: April 25, 2026</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
            <p>KaamKaro is owned and operated by <strong>Kaam Technologies LLP</strong> ("we", "our", or "us"), a limited liability partnership registered in India with its registered office in Punjab, India. This Privacy Policy explains how we collect, store, use, share, and protect your personal information when you use our mobile application or website (kaamkaro.co.in).</p>
            <p className="mt-2">By using KaamKaro, you consent to the collection and use of your data as described in this policy. This policy complies with the Information Technology Act, 2000, the Information Technology (Amendment) Act, 2008, and applicable rules thereunder.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
            <p className="mb-3">We collect the following categories of information:</p>

            <h3 className="font-semibold text-gray-800 mb-2">a) Information you provide directly:</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li><strong>Mobile Number:</strong> Your primary identifier, used for OTP-based login and communication.</li>
              <li><strong>Name:</strong> First and last name for your profile.</li>
              <li><strong>Profile Information (Job Seekers):</strong> Location, skills, work experience, educational qualifications, expected salary, job type preferences, profile photo.</li>
              <li><strong>Profile Information (Employers):</strong> Company name, industry, company description, logo, website, location.</li>
              <li><strong>Job Postings:</strong> Job title, description, salary range, location, job type, perks.</li>
              <li><strong>Email Address:</strong> Optional, used for account-related communications.</li>
            </ul>

            <h3 className="font-semibold text-gray-800 mb-2">b) Information collected automatically:</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li><strong>Usage Data:</strong> Jobs viewed, swipes (like/dislike/super-like), matches made, messages sent.</li>
              <li><strong>Device Information:</strong> Device type, operating system version, app version, unique device identifiers.</li>
              <li><strong>Push Notification Token:</strong> To deliver alerts for matches and messages.</li>
              <li><strong>Log Data:</strong> IP address, access times, pages visited, errors encountered.</li>
            </ul>

            <h3 className="font-semibold text-gray-800 mb-2">c) Information from third parties:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Payment transaction reference numbers from Cashfree Payments (we do not receive your card or bank details).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To create and manage your account and verify your identity via OTP</li>
              <li>To display your profile to relevant employers or job seekers</li>
              <li>To power our job matching algorithm and show you relevant jobs or candidates</li>
              <li>To enable in-app communication between matched users</li>
              <li>To send OTP messages for login and verification (via MSG91/Airtel)</li>
              <li>To send push notifications about new matches, messages, and platform updates</li>
              <li>To process payments for job postings (via Cashfree)</li>
              <li>To send transactional emails (job post confirmation, account updates)</li>
              <li>To detect and prevent fraud, spam, and illegal content</li>
              <li>To analyse platform usage and improve our services</li>
              <li>To comply with legal obligations under Indian law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Information Sharing and Disclosure</h2>
            <p className="mb-3">We do <strong>not sell, rent, or trade</strong> your personal information. We share data only in the following circumstances:</p>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong>Between Matched Users:</strong> When a mutual match occurs, your name and contact details (phone/email) are shared with the matched employer or job seeker to facilitate communication. Before a match, only non-identifying information (skills, location, job type) is visible.</li>
              <li><strong>Service Providers:</strong> We use trusted third-party services to operate our platform:
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                  <li>Supabase (PostgreSQL database hosting — India/Japan region)</li>
                  <li>Railway (backend server hosting)</li>
                  <li>MSG91 / Airtel (OTP SMS delivery)</li>
                  <li>Cashfree Payments (payment processing)</li>
                  <li>Resend (transactional email delivery)</li>
                  <li>Expo (push notification delivery)</li>
                </ul>
                <p className="mt-2 text-sm">Each provider operates under their own privacy policy and processes data only as required to provide their service.</p>
              </li>
              <li><strong>Legal Obligations:</strong> We may disclose your information if required by Indian law, court order, or a request from a government or law enforcement authority acting within their legal powers.</li>
              <li><strong>Business Transfer:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred to the successor entity, subject to the same privacy protections.</li>
              <li><strong>Safety:</strong> To protect the rights, safety, or property of KaamKaro, our users, or the public where we believe disclosure is necessary.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Data Storage and Security</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Your data is stored on secure servers hosted by Supabase (PostgreSQL), located in the Asia-Pacific region.</li>
              <li>All data in transit is encrypted using HTTPS/TLS.</li>
              <li>Authentication uses industry-standard JWT (JSON Web Tokens) with secure expiry.</li>
              <li>We implement access controls to ensure only authorised personnel can access production data.</li>
              <li>We conduct periodic reviews of our security practices.</li>
              <li>Despite our best efforts, no electronic storage system is 100% secure. In the event of a data breach affecting your rights, we will notify you as required by law.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Data Retention</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Your account data is retained for as long as your account is active.</li>
              <li>If you request account deletion, we will delete or anonymise your personal data within <strong>30 days</strong>, except where we are required to retain it for legal, regulatory, or fraud prevention purposes.</li>
              <li>Payment records may be retained for up to 7 years as required under Indian financial regulations.</li>
              <li>Log data is retained for up to 90 days for security and debugging purposes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Your Rights</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Access:</strong> You can view and download your profile data within the app at any time.</li>
              <li><strong>Correction:</strong> You can update your profile information through the app settings.</li>
              <li><strong>Deletion:</strong> You can request full account deletion by emailing support@kaamkaro.co.in. We will process your request within 30 days.</li>
              <li><strong>Opt-out of Notifications:</strong> You can disable push notifications through your device settings at any time. You cannot opt out of transactional OTP messages as they are necessary for platform security.</li>
              <li><strong>Withdrawal of Consent:</strong> You may withdraw your consent to data processing at any time by deleting your account, though this will prevent you from using KaamKaro.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Payments and Financial Data</h2>
            <p>All payment processing is handled by <strong>Cashfree Payments</strong>, an RBI-authorised payment aggregator. KaamKaro does not collect, store, or have access to your credit card, debit card, UPI ID, net banking credentials, or bank account details. All payment data is processed by Cashfree in compliance with PCI-DSS standards and RBI regulations.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Children's Privacy</h2>
            <p>KaamKaro is strictly intended for users aged <strong>18 years and above</strong>. We do not knowingly collect personal information from minors. If we become aware that a minor has created an account, we will immediately terminate the account and delete all associated data. If you believe a minor is using our platform, please report it to support@kaamkaro.co.in.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Cookies and Tracking</h2>
            <p>Our website (kaamkaro.co.in) may use essential cookies to maintain your session and ensure the website functions correctly. We do not use advertising or tracking cookies. You can disable cookies through your browser settings, though this may affect website functionality.</p>
            <p className="mt-2">Our mobile app does not use cookies but may use device identifiers for push notification delivery.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">11. Third-Party Links</h2>
            <p>KaamKaro may contain links to third-party websites or services. We are not responsible for the privacy practices or content of those third parties. We encourage you to review the privacy policies of any third-party sites you visit.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">12. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. Material changes will be communicated through the app or via SMS to your registered mobile number. The "Last updated" date at the top of this page will be revised accordingly. Continued use of KaamKaro after any changes constitutes your acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">13. Grievance Officer</h2>
            <p className="mb-3">As required under Rule 5(9) of the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, we have appointed a Grievance Officer to address any complaints or concerns regarding the collection, storage, or use of your personal data:</p>
            <div className="bg-gray-50 rounded-xl p-4">
              <p><strong>Grievance Officer</strong></p>
              <p><strong>Kaam Technologies LLP</strong></p>
              <p>Punjab, India</p>
              <p>Email: <a href="mailto:support@kaamkaro.co.in" className="text-[#1B3FAB]">support@kaamkaro.co.in</a></p>
              <p className="mt-2 text-sm text-gray-500">We will acknowledge your complaint within 24 hours and endeavour to resolve it within 15 days of receipt.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">14. Contact Us</h2>
            <p className="mb-3">For any privacy-related queries, requests, or to exercise your data rights:</p>
            <div className="bg-gray-50 rounded-xl p-4">
              <p><strong>Kaam Technologies LLP</strong></p>
              <p>Punjab, India</p>
              <p>Email: <a href="mailto:support@kaamkaro.co.in" className="text-[#1B3FAB]">support@kaamkaro.co.in</a></p>
              <p>Website: <a href="https://kaamkaro.co.in" className="text-[#1B3FAB]">kaamkaro.co.in</a></p>
            </div>
          </section>

        </div>
      </div>

      <footer className="border-t border-gray-100 py-6 px-4 text-center text-sm text-gray-400">
        <Link href="/" className="hover:text-[#1B3FAB]">KaamKaro</Link> ·{" "}
        <Link href="/terms" className="hover:text-[#1B3FAB]">Terms &amp; Conditions</Link> ·{" "}
        <Link href="/contact" className="hover:text-[#1B3FAB]">Contact</Link>
      </footer>
    </div>
  );
}
