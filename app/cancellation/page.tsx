import Link from "next/link";

export default function CancellationPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-100 py-4 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-xl font-black text-[#FF4F5A]">KaamKaro</Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-black mb-2">Cancellation & Refund Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: April 13, 2026</p>

        <div className="space-y-8 text-gray-700">

          <section className="bg-[#FFF5F5] rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Overview</h2>
            <p>KaamKaro is committed to providing fair and transparent refund policies. Since we provide digital services, our refund policy is designed to be reasonable for both job seekers and employers.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Job Posting Fees (Employers)</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-green-400 pl-4">
                <h3 className="font-bold text-green-800">Full Refund Eligible</h3>
                <p className="text-sm mt-1">You are eligible for a full refund if:</p>
                <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
                  <li>You request a refund within <strong>7 days</strong> of payment</li>
                  <li>Your job post has received <strong>0 applications</strong></li>
                  <li>There was a technical error during payment or job posting</li>
                  <li>The service was not delivered due to a platform issue on our end</li>
                </ul>
              </div>

              <div className="border-l-4 border-yellow-400 pl-4">
                <h3 className="font-bold text-yellow-800">Partial Refund Eligible</h3>
                <p className="text-sm mt-1">You may be eligible for a partial refund if:</p>
                <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
                  <li>You request a refund within 7 days but your post has received applications</li>
                  <li>The job posting was live for less than 50% of the paid duration</li>
                </ul>
              </div>

              <div className="border-l-4 border-red-400 pl-4">
                <h3 className="font-bold text-red-800">No Refund</h3>
                <p className="text-sm mt-1">Refunds will not be issued if:</p>
                <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
                  <li>More than 7 days have passed since payment</li>
                  <li>The job post has been active for more than 50% of the paid duration</li>
                  <li>The job was removed due to violation of our Terms of Service</li>
                  <li>You changed your mind after the job post received significant engagement</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Job Seeker Accounts</h2>
            <p>Job seeking on KaamKaro is completely free. There are no charges for job seekers, so no refund policy applies.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. How to Request a Refund</h2>
            <div className="bg-gray-50 rounded-xl p-4 space-y-3">
              <div className="flex gap-3 items-start">
                <span className="bg-[#FF4F5A] text-white text-xs font-bold px-2 py-1 rounded-full shrink-0">1</span>
                <p className="text-sm">Email us at <strong>support@kaamkaro.co.in</strong> with subject line: <em>"Refund Request - [Your Job Post Title]"</em></p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="bg-[#FF4F5A] text-white text-xs font-bold px-2 py-1 rounded-full shrink-0">2</span>
                <p className="text-sm">Include your registered email, payment transaction ID, and reason for refund</p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="bg-[#FF4F5A] text-white text-xs font-bold px-2 py-1 rounded-full shrink-0">3</span>
                <p className="text-sm">We will review your request within <strong>48 hours</strong> and respond via email</p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="bg-[#FF4F5A] text-white text-xs font-bold px-2 py-1 rounded-full shrink-0">4</span>
                <p className="text-sm">Approved refunds are processed within <strong>5–7 business days</strong> to your original payment method</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Cancellation of Job Posts</h2>
            <p>Employers can cancel/deactivate a job post at any time from their dashboard. Cancellation does not automatically trigger a refund — please follow the refund request process above if you believe you are eligible.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Account Cancellation</h2>
            <p>You may delete your KaamKaro account at any time by contacting support@kaamkaro.co.in. Account deletion does not entitle you to a refund of any prior payments made.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Contact for Refunds</h2>
            <div className="bg-gray-50 rounded-xl p-4">
              <p><strong>Kaam Karo</strong> (Owned & Operated by Navjot Singh Lalh)</p>
              <p>Email: support@kaamkaro.co.in</p>
              <p></p>
              <p>Dehradun, Uttarakhand, India - 248001</p>
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
