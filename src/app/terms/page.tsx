'use client';



export default function TermsAndConditionsPage() {
  return (
    <>

      <main className="max-w-6xl mx-auto px-4 py-16 mt-16">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Terms &amp; Conditions</h1>
        <div className="space-y-8 text-gray-800 text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-2">Services</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Askus Studio provides marketing, design, content creation, and consultancy services as agreed in each project’s scope.
              </li>
              <li>
                Timelines and deliverables depend on the approved proposal and payment terms.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Payments</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Projects begin only after advance payment as per the agreed milestone.
              </li>
              <li>
                Delay in payment can lead to suspension of services.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Client Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Clients must provide necessary information, approvals, and content promptly.
              </li>
              <li>
                Delays from the client side may affect project timelines.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                All work created by Askus Studio remains our property until full payment is received.
              </li>
              <li>
                After full payment, ownership rights are transferred unless otherwise agreed.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Liability</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Askus Studio is not liable for indirect losses (like lost profits) due to marketing campaign results.
              </li>
              <li>
                We commit to providing services with professional skill and care.
              </li>
            </ul>
          </section>
        </div>
      </main>
   
    </>
  );
}
