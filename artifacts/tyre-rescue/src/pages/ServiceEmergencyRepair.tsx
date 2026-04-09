import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Phone, CheckCircle2, Clock, AlertTriangle } from "lucide-react";
import { Link } from "wouter";

const PHONE_DISPLAY = "07469 157852";
const PHONE_HREF = "https://wa.me/447469157852";

export default function ServiceEmergencyRepair() {
  return (
    <Layout>
      <SEOHead 
        title="Emergency Tyre Repair - 24/7 Fast Response" 
        description="Stranded with a flat tyre? Our emergency tyre repair service provides rapid 24/7 response across South Yorkshire and Nottinghamshire. Call now."
      />
      
      <div className="bg-[#0A1F44] pt-12 pb-24 text-white">
        <div className="container px-4 mx-auto">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Emergency Tyre Repair" }]} />
          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-bold text-white bg-[#DC2626] rounded-full animate-pulse">
              <AlertTriangle className="w-4 h-4" /> RAPID RESPONSE
            </div>
            <h1 className="text-4xl md:text-6xl font-black font-display mb-6">Emergency Tyre Repair — 24/7 Fast Response</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Stuck on the hard shoulder or stranded at night? Don't panic. Our emergency mobile tyre repair units are on standby right now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={PHONE_HREF} className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-[#FFD700] text-[#0A1F44] font-bold rounded-xl hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/20">
                <Phone className="w-5 h-5" /> Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black font-display text-[#0A1F44] mb-6">We Prioritise Emergencies</h2>
              <div className="prose prose-lg text-gray-600 mb-8">
                <p>
                  A blowout on a busy road is dangerous. That's why we treat emergency callouts with the utmost urgency. When you call us, you speak directly to a dispatcher who will pinpoint your location and send the nearest van immediately.
                </p>
                <p>
                  Our vans carry high-visibility safety equipment to secure the area around your vehicle before we begin work, ensuring you and your family are safe while we repair or replace your tyre.
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  "Priority dispatch for motorway breakdowns",
                  "Aiming for 30-60 minute arrival times",
                  "Safe working practices on busy roads",
                  "Immediate puncture repairs if safe",
                  "Full tyre replacement if unrepairable"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium text-[#0A1F44]">
                    <div className="bg-[#DC2626] rounded-full p-1"><CheckCircle2 className="w-5 h-5 text-white" /></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F5F5F5] p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-black font-display text-[#0A1F44] mb-4">What to do while you wait</h3>
              <ol className="space-y-4 text-gray-600 list-decimal pl-4">
                <li className="pl-2"><strong>Move to safety:</strong> If possible, pull over to a safe place like the hard shoulder or a lay-by.</li>
                <li className="pl-2"><strong>Hazards on:</strong> Turn on your hazard warning lights to alert other drivers.</li>
                <li className="pl-2"><strong>Exit safely:</strong> Use the doors facing away from passing traffic.</li>
                <li className="pl-2"><strong>Stay visible:</strong> Wait behind the barrier or on a grass verge, well away from the road.</li>
                <li className="pl-2"><strong>Call us:</strong> Tell us your exact location (using What3Words or a nearby landmark).</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
