import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Calendar } from "lucide-react";
import { Link } from "wouter";

export default function Post2() {
  return (
    <Layout>
      <SEOHead 
        title="How Much Does Mobile Tyre Fitting Cost in the UK? | Tyre Rescue 247" 
        description="Is mobile tyre fitting more expensive than a traditional garage? We break down the costs and callout fees."
      />
      
      <div className="bg-[#0A1F44] pt-12 pb-24 text-white">
        <div className="container px-4 mx-auto">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Mobile Tyre Fitting Costs" }]} />
        </div>
      </div>

      <div className="py-12 bg-white -mt-16 rounded-t-3xl relative z-10">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="mb-12 border-b border-gray-200 pb-8">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 font-medium">
              <Calendar className="w-4 h-4" /> Oct 02, 2023
            </div>
            <h1 className="text-4xl md:text-5xl font-black font-display text-[#0A1F44] mb-6 leading-tight">How Much Does Mobile Tyre Fitting Cost in the UK?</h1>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p>One of the most common misconceptions about mobile tyre fitting is that it is a luxury service with a massive premium attached. In reality, having a technician come to your home or workplace is often highly cost-effective when you factor in your time and fuel.</p>
            
            <h2>The Base Costs</h2>
            <p>The price of the tyre itself is usually identical to what you would pay at a physical garage. Whether you opt for a budget tyre at £50 or a premium Michelin at £150, the product cost remains the same. What differs is the service fee.</p>

            <h2>Callout Fees Explained</h2>
            <p>Traditional garages require you to drive to them, wait in a waiting room (often for hours), and drive back. A mobile service brings the garage to you. To cover the cost of the van, fuel, and travel time, a callout fee is often applied.</p>
            <p>However, at Mobile Tyre Rescue 247, we believe in <Link href="/pricing" className="text-[#DC2626] font-bold hover:underline">transparent pricing</Link>. The quote we give you over the phone is fully inclusive of the tyre, the fitting, balancing, a new valve, and old tyre disposal. For standard pre-booked appointments, the convenience factor costs mere pounds more than a garage visit.</p>

            <h2>Emergency vs. Pre-booked</h2>
            <p>Cost variations generally depend on urgency and time of day:</p>
            <ul>
              <li><strong>Pre-booked at home/work:</strong> Highly affordable, often saving you money if you would otherwise have to take time off work to visit a garage.</li>
              <li><strong>Emergency daytime callout:</strong> Slightly higher to account for the immediate rerouting of a van to your location.</li>
              <li><strong>Out-of-hours/Night-time:</strong> Premium rates apply for 2am motorway rescues, reflecting the 24/7 standby nature of the technicians and the hazardous working conditions.</li>
            </ul>

            <h2>The Value of Time</h2>
            <p>When calculating the cost, consider the value of your time. Taking two hours out of your Saturday to sit in a fast-fit centre has a cost. Having a <Link href="/mobile-tyre-fitting" className="text-[#DC2626] font-bold hover:underline">mobile fitter</Link> replace your tyres on your driveway while you relax at home offers unparalleled value.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
