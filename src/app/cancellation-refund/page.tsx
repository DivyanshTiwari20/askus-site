'use client';



export default function CancellationRefundPage() {
  return (
    <>

      <main className="max-w-6xl mx-auto px-4 py-16 mt-16">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Refund &amp; Cancellation Policy</h1>
        <div className="space-y-8 text-gray-800 text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-2">Refund Policy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Advance payments are non-refundable once the project has started.
              </li>
              <li>
                If you cancel before work begins, a partial refund may be issued after deducting administrative costs.
              </li>
              <li>
                For digital ad spends (like Meta/Google), refunds are subject to third-party policies.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Project Cancellation</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Either party may terminate with written notice if the other breaches terms.
              </li>
              <li>
                Any completed work till date will be billed and delivered.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Data &amp; Cookie Policy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                We use cookies to track site traffic, improve user experience, and measure ad performance.
              </li>
              <li>
                By using our website, you consent to the use of cookies.
              </li>
              <li>
                You can disable cookies anytime in your browser settings.
              </li>
              <li>
                Data is retained only as long as required to provide services and comply with legal obligation.
              </li>
            </ul>
          </section>
        </div>
      </main>

    </>
  );
}
