import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CheckCircle2, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Pricing() {
  return (
    <Layout>
      <SEOHead 
        title="Mobile Tyre Fitting Pricing | Tyre Rescue 247" 
        description="Transparent pricing for mobile tyre fitting, puncture repair, and emergency tyre replacement. No hidden callout fees."
      />
      
      <div className="bg-[#0A1F44] pt-12 pb-24 text-white">
        <div className="container px-4 mx-auto">
          <Breadcrumbs items={[{ label: "Pricing" }]} />
          <div className="max-w-3xl mt-8">
            <h1 className="text-4xl md:text-6xl font-black font-display mb-6">Transparent Pricing</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              No hidden fees, no surprise callout charges. We give you a clear, upfront quote before we dispatch a van.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-[#F5F5F5]">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
              <h3 className="text-2xl font-bold font-display text-[#0A1F44] mb-2">Puncture Repair</h3>
              <p className="text-gray-500 mb-6">Permanent BSAU159 standard repair</p>
              <div className="text-4xl font-black text-[#DC2626] mb-6">From £45<span className="text-lg text-gray-500 font-normal">.00</span></div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex gap-3 text-gray-600"><CheckCircle2 className="w-5 h-5 text-[#FFD700]" /> Mobile callout included</li>
                <li className="flex gap-3 text-gray-600"><CheckCircle2 className="w-5 h-5 text-[#FFD700]" /> Internal vulcanised patch</li>
                <li className="flex gap-3 text-gray-600"><CheckCircle2 className="w-5 h-5 text-[#FFD700]" /> Wheel re-balancing</li>
                <li className="flex gap-3 text-gray-600"><CheckCircle2 className="w-5 h-5 text-[#FFD700]" /> Valve check</li>
              </ul>
              <Link href="/book-a-service" className="block text-center w-full py-4 font-bold text-white bg-[#0A1F44] rounded-xl hover:bg-[#0A1F44]/90 transition-colors">
                Book Now
              </Link>
            </div>

            <div className="bg-[#0A1F44] text-white p-8 rounded-2xl shadow-xl border border-[#FFD700] flex flex-col relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFD700] text-[#0A1F44] px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold font-display mb-2 text-white">Tyre Replacement</h3>
              <p className="text-gray-300 mb-6">New tyre supplied and fitted</p>
              <div className="text-4xl font-black text-[#FFD700] mb-6">From £75<span className="text-lg text-gray-400 font-normal">.00</span></div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-[#FFD700]" /> Mobile callout included</li>
                <li className="flex gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-[#FFD700]" /> New tyre of your choice</li>
                <li className="flex gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-[#FFD700]" /> Electronic balancing</li>
                <li className="flex gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-[#FFD700]" /> Old tyre disposal</li>
              </ul>
              <a href="https://wa.me/447469157852" className="block text-center w-full py-4 font-bold text-[#0A1F44] bg-[#FFD700] rounded-xl hover:bg-white transition-colors">
                Get a Quote
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
              <h3 className="text-2xl font-bold font-display text-[#0A1F44] mb-2">Locking Nut Removal</h3>
              <p className="text-gray-500 mb-6">Safe removal of lost/damaged nuts</p>
              <div className="text-4xl font-black text-[#DC2626] mb-6">From £65<span className="text-lg text-gray-500 font-normal">.00</span></div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex gap-3 text-gray-600"><CheckCircle2 className="w-5 h-5 text-[#FFD700]" /> Mobile callout included</li>
                <li className="flex gap-3 text-gray-600"><CheckCircle2 className="w-5 h-5 text-[#FFD700]" /> Damage-free extraction</li>
                <li className="flex gap-3 text-gray-600"><CheckCircle2 className="w-5 h-5 text-[#FFD700]" /> All vehicle makes</li>
                <li className="flex gap-3 text-gray-600"><CheckCircle2 className="w-5 h-5 text-[#FFD700]" /> High success rate</li>
              </ul>
              <Link href="/book-a-service" className="block text-center w-full py-4 font-bold text-white bg-[#0A1F44] rounded-xl hover:bg-[#0A1F44]/90 transition-colors">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
