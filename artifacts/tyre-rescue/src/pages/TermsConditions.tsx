import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function TermsConditions() {
  return (
    <Layout>
      <SEOHead title="Terms and Conditions | Tyre Rescue 247" description="Terms and conditions for Mobile Tyre Rescue 247 services." />
      
      <div className="bg-[#0A1F44] pt-12 pb-24 text-white">
        <div className="container px-4 mx-auto">
          <Breadcrumbs items={[{ label: "Terms and Conditions" }]} />
          <div className="max-w-3xl mt-8">
            <h1 className="text-4xl md:text-6xl font-black font-display mb-6">Terms and Conditions</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              The legal terms governing our mobile tyre fitting services.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container px-4 mx-auto max-w-4xl prose prose-lg text-gray-600">
          <h2>1. General</h2>
          <p>These terms and conditions apply to all mobile tyre fitting and repair services provided by Mobile Tyre Rescue 247 to the customer. By booking our services, you agree to be bound by these terms.</p>

          <h2>2. Bookings and Callouts</h2>
          <p>When you book a service, whether online or via telephone, you are entering into a contract with us. For emergency callouts, the quoted fee includes dispatching a technician to your location. If you cancel the service after a technician has been dispatched, a cancellation fee (equal to the callout charge) will apply.</p>

          <h2>3. Pricing and Payment</h2>
          <ul>
            <li>All prices quoted include VAT unless otherwise stated.</li>
            <li>Payment is due immediately upon completion of the work.</li>
            <li>We accept cash, major credit/debit cards, and bank transfers via secure payment links.</li>
            <li>The final price may vary from an estimate if additional work or parts (e.g., replacement valves, TPMS sensors) are required, but this will always be discussed with you before work commences.</li>
          </ul>

          <h2>4. Locking Wheel Nuts</h2>
          <p>If your vehicle is fitted with locking wheel nuts, you must provide the locking wheel nut key. If you do not have the key, we can attempt removal using specialist tools for an additional fee. While our success rate is very high, we cannot guarantee removal without damage to the nut itself, and we are not liable for any pre-existing damage to the alloy wheel caused by over-tightening or previous removal attempts.</p>

          <h2>5. Puncture Repairs</h2>
          <p>All puncture repairs are carried out in accordance with British Standard BSAU159. The technician holds the final say on whether a tyre is safe to repair. If a tyre cannot be safely repaired, you will be offered a replacement tyre. The callout fee is still payable even if a repair is not possible.</p>

          <h2>6. Liability</h2>
          <p>We are not liable for any consequential loss, loss of profit, or indirect damage arising from a delay in our arrival time or the provision of our services. Our maximum liability in relation to any claim is limited to the value of the services provided.</p>

          <h2>7. Safety</h2>
          <p>Our technicians reserve the right to refuse to work on a vehicle if they deem the location or conditions unsafe (e.g., on a live lane of a motorway without proper traffic management). In such cases, we will assist you in arranging for the vehicle to be moved to a safe location.</p>
        </div>
      </div>
    </Layout>
  );
}
