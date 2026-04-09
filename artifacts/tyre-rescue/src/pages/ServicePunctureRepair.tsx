import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Phone, CheckCircle2, Wrench } from "lucide-react";
import { Link } from "wouter";

const PHONE_DISPLAY = "07469 157852";
const PHONE_HREF = "https://wa.me/447469157852";

export default function ServicePunctureRepair() {
  return (
    <Layout>
      <SEOHead 
        title="Mobile Puncture Repair Service" 
        description="Fast, BSAU159 standard puncture repairs at your home or roadside. Save money by repairing rather than replacing."
      />
      
      <div className="bg-[#0A1F44] pt-12 pb-24 text-white">
        <div className="container px-4 mx-auto">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Puncture Repair" }]} />
          <div className="max-w-3xl mt-8">
            <h1 className="text-4xl md:text-6xl font-black font-display mb-6">Puncture Repair Service</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Picked up a nail or screw? A flat tyre doesn't always mean a new tyre. We repair punctures to British Standards, saving you money and getting you back on the road.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={PHONE_HREF} className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-[#FFD700] text-[#0A1F44] font-bold rounded-xl hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/20">
                <Phone className="w-5 h-5" /> Call {PHONE_DISPLAY}
              </a>
              <Link href="/book-a-service" className="inline-flex justify-center items-center px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors">
                Book Online
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black font-display text-[#0A1F44] mb-6">BSAU159 Standard Repairs</h2>
              <div className="prose prose-lg text-gray-600 mb-8">
                <p>
                  We strictly follow the British Standard BSAU159 for puncture repairs. This means we don't just 'plug' the tyre from the outside — we remove the tyre from the wheel, inspect the internal structure for hidden damage, and apply a combined plug and patch from the inside.
                </p>
                <p>
                  If a puncture is deemed unsafe to repair (e.g., it's in the sidewall or too large), our vans always carry a range of replacement tyres, so you're never left stranded.
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  "Repair possible if in the central ¾ of the tread",
                  "Hole must be 6mm or less in diameter",
                  "No secondary internal damage (e.g., from driving flat)",
                  "Safe, permanent vulcanised patch repair",
                  "Wheel re-balanced after repair"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium text-[#0A1F44]">
                    <div className="bg-[#FFD700] rounded-full p-1"><CheckCircle2 className="w-5 h-5 text-[#0A1F44]" /></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F5F5F5] p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold font-display text-[#0A1F44] mb-4">When can a tyre NOT be repaired?</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-2"><strong>1.</strong> The puncture is outside the central tread area (on the shoulder or sidewall).</li>
                <li className="flex gap-2"><strong>2.</strong> The tyre has been driven while flat, damaging the internal casing.</li>
                <li className="flex gap-2"><strong>3.</strong> The tread depth is below the legal limit of 1.6mm.</li>
                <li className="flex gap-2"><strong>4.</strong> It is a run-flat tyre that has been driven on without pressure.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
