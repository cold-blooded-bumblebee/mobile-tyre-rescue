import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Calendar } from "lucide-react";
import { Link } from "wouter";

export default function Post4() {
  return (
    <Layout>
      <SEOHead 
        title="Benefits of Mobile Tyre Services | Tyre Rescue 247" 
        description="Explore the massive benefits of having your tyres fitted at home or work rather than visiting a traditional garage."
      />
      
      <div className="bg-[#0A1F44] pt-12 pb-24 text-white">
        <div className="container px-4 mx-auto">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Benefits of Mobile Tyre Services" }]} />
        </div>
      </div>

      <div className="py-12 bg-white -mt-16 rounded-t-3xl relative z-10">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="mb-12 border-b border-gray-200 pb-8">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 font-medium">
              <Calendar className="w-4 h-4" /> Sep 05, 2023
            </div>
            <h1 className="text-4xl md:text-5xl font-black font-display text-[#0A1F44] mb-6 leading-tight">Benefits of Mobile Tyre Services</h1>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p>The days of spending your precious weekend sitting in a fast-fit centre waiting room are over. The <Link href="/mobile-tyre-fitting" className="text-[#DC2626] font-bold hover:underline">mobile tyre fitting</Link> industry has transformed how drivers maintain their vehicles. Here are the main benefits of choosing a mobile service.</p>
            
            <h2>1. Unbeatable Convenience</h2>
            <p>The primary benefit is time. You simply book an appointment, and a fully equipped van arrives at your home or workplace. You can carry on working, looking after your kids, or relaxing while the technician fits your new tyres outside.</p>

            <h2>2. Safety During Emergencies</h2>
            <p>If you suffer a puncture or blowout, driving on a flat tyre to reach a garage is incredibly dangerous and will irreparably damage your alloy wheel. A mobile <Link href="/emergency-tyre-repair" className="text-[#DC2626] font-bold hover:underline">emergency repair service</Link> comes to you, meaning you don't have to risk a dangerous journey.</p>

            <h2>3. 24/7 Availability</h2>
            <p>Traditional garages close at 5 PM and often don't open on Sundays. Tyre emergencies happen at all hours. Services like Mobile Tyre Rescue 247 operate around the clock, providing peace of mind to night-shift workers and evening commuters.</p>

            <h2>4. No Compromise on Quality</h2>
            <p>A modern mobile fitting van is essentially a garage on wheels. They contain the exact same heavy-duty tyre changers and electronic wheel balancers used in premium garages. The quality of the fit and balance is identical.</p>

            <h2>5. Transparent Assistance</h2>
            <p>At a garage, your car is taken into a bay, out of sight. With mobile fitting on your driveway, you can see exactly what the technician is doing. You can chat with them, see the <Link href="/puncture-repair" className="text-[#DC2626] font-bold hover:underline">puncture repair</Link> process, and have complete confidence in the work being done.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
