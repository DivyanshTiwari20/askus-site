'use client';



export default function PrivacyPolicyPage() {
  return (
    <>

      <main className="max-w-6xl mx-auto px-4 py-16 mt-16">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Privacy Policy</h1>
        <div className="space-y-6 text-gray-800 text-base leading-relaxed">
          <p>
            At Askus Studio, we respect your privacy and are committed to protecting any personal information you share with us.
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-2">Information We Collect:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Name, email, phone number, company details, and project requirements submitted via our website, WhatsApp, or email.
            </li>
            <li>
              Analytics data like IP address, browser type, and cookies for improving our services.
            </li>
          </ul>
          <h2 className="text-xl font-semibold mt-8 mb-2">How We Use Your Data:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              To provide requested services (marketing, design, website development, UGC, etc.).
            </li>
            <li>
              For communication regarding project updates, proposals, and promotions.
            </li>
            <li>
              To improve website performance and personalize your experience.
            </li>
          </ul>
          <h2 className="text-xl font-semibold mt-8 mb-2">Data Sharing:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              We never sell your personal data.
            </li>
            <li>
              We may share limited information with trusted third-party tools (like payment gateways, CRM, ad platforms) strictly to fulfill services.
            </li>
            <li>
              We comply with all applicable data protection laws.
            </li>
          </ul>
          <h2 className="text-xl font-semibold mt-8 mb-2">Security:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              All stored data is encrypted and access is restricted to authorized personnel only.
            </li>
          </ul>
          <h2 className="text-xl font-semibold mt-8 mb-2">Your Rights:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              You may request access, correction, or deletion of your data at any time by emailing <a href="mailto:askusstudio@gmail.com" className="text-blue-600 underline">askusstudio@gmail.com</a>.
            </li>
          </ul>
        </div>
      </main>
      
    </>
  );
}
