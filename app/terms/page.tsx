import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-100 py-4 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-xl font-black text-[#1B3FAB]">KaamKaro</Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-black mb-2">Terms &amp; Conditions</h1>
        <p className="text-gray-500 mb-8">Last updated: April 25, 2026</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. About KaamKaro</h2>
            <p>KaamKaro is a mobile and web-based job marketplace platform owned and operated by <strong>Kaam Technologies LLP</strong> ("Company", "we", "us", or "our"), a limited liability partnership registered in India, with its registered office in Punjab, India. KaamKaro connects job seekers and employers across India through a swipe-based matching system.</p>
            <p className="mt-2">By downloading the KaamKaro app, visiting kaamkaro.co.in, or using any of our services, you ("User") confirm that you have read, understood, and agreed to these Terms &amp; Conditions and our Privacy Policy. If you do not agree, please stop using our platform immediately.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Eligibility</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>You must be at least <strong>18 years of age</strong> to register and use KaamKaro.</li>
              <li>You must be a resident of India or an entity registered in India.</li>
              <li>You must provide a valid Indian mobile number for OTP-based verification.</li>
              <li>By using this platform, you confirm that all information you provide is accurate, current, and complete.</li>
              <li>KaamKaro reserves the right to refuse service to anyone for any reason at any time.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. User Accounts</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Each user may maintain only one account. Multiple accounts for the same individual or business are not permitted.</li>
              <li>You are responsible for keeping your account secure. Do not share your OTP or account access with anyone.</li>
              <li>KaamKaro is not liable for any loss arising from unauthorised use of your account.</li>
              <li>You must notify us immediately at support@kaamkaro.co.in if you suspect any unauthorised access to your account.</li>
              <li>We reserve the right to suspend or terminate accounts that violate these terms without prior notice.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Job Seeker Terms</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Job seeking on KaamKaro is <strong>free of charge</strong>.</li>
              <li>You must not misrepresent your qualifications, skills, experience, or identity in your profile.</li>
              <li>KaamKaro does <strong>not guarantee employment</strong>. We are a platform connecting parties, not a recruitment agency.</li>
              <li>You are solely responsible for verifying the legitimacy of any employer, job offer, or workplace before accepting employment.</li>
              <li>Do not share personal financial information (bank account numbers, UPI IDs) with employers through the platform.</li>
              <li>If any employer asks you to pay money for a job, report it immediately to support@kaamkaro.co.in.</li>
              <li>KaamKaro is not responsible for any employment outcome, workplace conditions, salary disputes, or injuries arising from jobs found through our platform.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Employer Terms</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Job postings require payment as per our current pricing, payable in advance.</li>
              <li>All job listings must be for <strong>genuine, legal employment opportunities</strong> within India.</li>
              <li>Employers must not post fraudulent, misleading, duplicate, or irrelevant job listings.</li>
              <li>Employers must not discriminate on the basis of religion, caste, gender, age, disability, or any other protected characteristic under Indian law.</li>
              <li>Including personal contact numbers (phone/WhatsApp) directly in job descriptions is <strong>prohibited</strong>. Communication must happen through the in-app matching system.</li>
              <li>Asking candidates to pay any fee (registration, training, deposit, or otherwise) as a condition of employment is <strong>strictly prohibited</strong> and will result in immediate account termination.</li>
              <li>KaamKaro reserves the right to remove any job posting, without refund, that violates these terms or our content moderation policy.</li>
              <li>By posting a job, you confirm that you have the authority to hire for that position.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Prohibited Content and Activities</h2>
            <p className="mb-3">The following are strictly prohibited on KaamKaro:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Posting jobs related to adult services, escort services, or any sexually explicit content</li>
              <li>Posting jobs related to drugs, narcotics, weapons, gambling, hawala, or any illegal activity</li>
              <li>Human trafficking, bonded labour, forced labour, or employment of minors</li>
              <li>Fraudulent job postings designed to collect money or personal information from job seekers</li>
              <li>Harassing, abusing, threatening, or defaming other users</li>
              <li>Spamming, phishing, or sending unsolicited commercial messages</li>
              <li>Scraping, crawling, or harvesting data from our platform by automated means</li>
              <li>Attempting to reverse-engineer, hack, or disrupt our platform or servers</li>
              <li>Creating fake profiles or impersonating any person or organisation</li>
              <li>Sharing obscene, defamatory, or hate speech content</li>
            </ul>
            <p className="mt-3">Violations may result in immediate account termination and may be reported to law enforcement authorities under applicable Indian laws including the Information Technology Act, 2000.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Matching and Messaging</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>KaamKaro uses a swipe-based matching algorithm. A "match" occurs when both a job seeker and an employer express mutual interest.</li>
              <li>Contact details (phone number, email) are only shared with the other party <strong>after a mutual match</strong>.</li>
              <li>All in-app communication must remain professional and lawful.</li>
              <li>KaamKaro may monitor messages for safety, fraud prevention, and platform integrity purposes.</li>
              <li>We are not responsible for the accuracy of any information shared by users during messaging.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Payments and Refunds</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Payments for job postings or premium features are processed securely through <strong>Cashfree Payments</strong>, a RBI-authorised payment aggregator.</li>
              <li>All prices are inclusive of applicable GST unless stated otherwise.</li>
              <li>Job posting fees are <strong>non-refundable</strong> once a listing has been published and made live.</li>
              <li>If payment is deducted but the job is not posted due to a verified technical error on our end, you may request a refund within 7 days by writing to support@kaamkaro.co.in.</li>
              <li>Refunds, if approved, will be processed to the original payment method within 7–10 business days.</li>
              <li>KaamKaro does not store your card, UPI, or bank account details.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Intellectual Property</h2>
            <p>All content, branding, design, source code, algorithms, and technology of KaamKaro are the exclusive intellectual property of Kaam Technologies LLP. You may not copy, reproduce, modify, distribute, or commercially exploit any part of our platform without express written permission.</p>
            <p className="mt-2">User-generated content (your profile, job postings, messages) remains owned by you. However, by submitting content to KaamKaro, you grant us a non-exclusive, royalty-free, worldwide licence to display, store, and use that content solely for the purpose of operating and improving the platform.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Disclaimer of Warranties</h2>
            <p>KaamKaro is provided on an "as is" and "as available" basis without any warranties of any kind, express or implied, including but not limited to merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that:</p>
            <ul className="list-disc pl-5 space-y-1 mt-3">
              <li>The platform will be uninterrupted, error-free, or free of viruses</li>
              <li>Any job listing is genuine, accurate, or currently available</li>
              <li>Any match will result in employment</li>
              <li>User-provided information is accurate or truthful</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">11. Limitation of Liability</h2>
            <p>To the maximum extent permitted by applicable law, Kaam Technologies LLP shall not be liable for:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Any direct, indirect, incidental, special, or consequential damages</li>
              <li>Any employment disputes, workplace injuries, salary non-payment, or fraud committed by employers or job seekers</li>
              <li>Loss of data, revenue, or business opportunity</li>
              <li>Any damage arising from reliance on user-generated content</li>
              <li>Service interruptions due to maintenance, server failure, or force majeure events</li>
            </ul>
            <p className="mt-3">Our total liability to you for any claim shall not exceed the amount you paid to KaamKaro in the 3 months preceding the claim.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">12. Account Termination</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>KaamKaro reserves the right to suspend or permanently terminate any account at any time for violations of these Terms, fraudulent activity, or misuse of the platform.</li>
              <li>Upon termination, your access to the platform and all associated data may be removed.</li>
              <li>Users may request account deletion at any time by contacting support@kaamkaro.co.in. Data will be deleted within 30 days, subject to legal retention requirements.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">13. Modifications to Terms</h2>
            <p>We reserve the right to update or modify these Terms &amp; Conditions at any time. Material changes will be notified through the app or via SMS. Continued use of KaamKaro after any changes constitutes your acceptance of the revised terms. It is your responsibility to review these Terms periodically.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">14. Governing Law and Dispute Resolution</h2>
            <p>These Terms &amp; Conditions are governed by and construed in accordance with the laws of India, including the Information Technology Act, 2000, Consumer Protection Act, 2019, and Indian Contract Act, 1872.</p>
            <p className="mt-2">Any dispute, claim, or controversy arising out of or relating to these Terms or your use of KaamKaro shall be subject to the exclusive jurisdiction of the courts in <strong>Punjab, India</strong>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">15. Grievance Officer</h2>
            <p className="mb-3">As required under the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, we have appointed a Grievance Officer. If you have any complaints or concerns regarding our platform or these Terms, you may contact:</p>
            <div className="bg-gray-50 rounded-xl p-4">
              <p><strong>Grievance Officer</strong></p>
              <p><strong>Kaam Technologies LLP</strong></p>
              <p>Punjab, India</p>
              <p>Email: <a href="mailto:support@kaamkaro.co.in" className="text-[#1B3FAB]">support@kaamkaro.co.in</a></p>
              <p className="mt-2 text-sm text-gray-500">We will acknowledge your complaint within 24 hours and resolve it within 15 days of receipt.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">16. Contact Us</h2>
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
        <Link href="/privacy" className="hover:text-[#1B3FAB]">Privacy Policy</Link> ·{" "}
        <Link href="/contact" className="hover:text-[#1B3FAB]">Contact</Link>
      </footer>
    </div>
  );
}
