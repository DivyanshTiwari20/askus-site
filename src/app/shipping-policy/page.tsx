'use client';



export default function ShippingPolicyPage() {
  return (
    <>

      <main className="max-w-6xl mx-auto px-4 py-16 mt-16">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Shipping &amp; Delivery Policy</h1>
        <div className="space-y-6 text-gray-800 text-base leading-relaxed">
          <p>
            At Askus Studio, we provide digital marketing, social media management, UGC content creation, and other online services. We do not sell or ship any physical goods.
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-2">Service Delivery:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              All our services are delivered digitally via email, cloud platforms, or other agreed channels.
            </li>
            <li>
              Project timelines are discussed and finalized with clients before starting the work.
            </li>
          </ul>
          <h2 className="text-xl font-semibold mt-8 mb-2">No Physical Shipping:</h2>
          <p>
            Since our services are entirely digital, there is no physical product shipment, courier, or delivery involved.
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-2">Turnaround Time:</h2>
          <p>
            Delivery timelines for digital projects depend on the scope of work and will be communicated in advance. Clients will receive project updates and final deliverables online.
          </p>
        </div>
      </main>

    </>
  );
}
