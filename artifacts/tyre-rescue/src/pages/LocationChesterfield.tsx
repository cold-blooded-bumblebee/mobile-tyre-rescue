import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Phone, CheckCircle2, MapPin } from "lucide-react";

const PHONE_DISPLAY = "07469 157852";
const PHONE_HREF = "https://wa.me/447469157852";

export default function LocationChesterfield() {
  return (
    <Layout>
      <SEOHead 
        title="Mobile Tyre Fitting Chesterfield | 24/7 Emergency Tyres" 
        description="Mobile tyre fitting and emergency tyre repair in Chesterfield. Fast response. We come to your home, work, or roadside in Chesterfield."
      />
      
      <div className="bg-[#0A1F44] pt-12 pb-24 text-white">
        <div className="container px-4 mx-auto">
          <Breadcrumbs items={[{ label: "Areas We Cover", href: "/areas-we-cover" }, { label: "Chesterfield" }]} />
          <div className="max-w-3xl mt-8">
            <h1 className="text-4xl md:text-6xl font-black font-display mb-6">Mobile Tyre Fitting Chesterfield</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Fast, reliable mobile tyre fitting and emergency puncture repair across Chesterfield. We bring the tyre shop to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={PHONE_HREF} className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-[#FFD700] text-[#0A1F44] font-bold rounded-xl hover:bg-yellow-400 transition-colors">
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
              <h2 className="text-3xl font-black font-display text-[#0A1F44] mb-6">Chesterfield's Mobile Tyre Solution</h2>
              <div className="prose prose-lg text-gray-600 mb-8">
                <p>
                  From the town centre to surrounding villages like Brampton, Hasland, and Wingerworth, Mobile Tyre Rescue 247 provides rapid tyre assistance throughout Chesterfield and North East Derbyshire.
                </p>
                <p>
                  Our mobile units are frequently operating along the A61 and nearby M1 J29, ensuring swift arrivals for roadside emergencies. We supply budget, mid-range, and premium tyres, balancing and fitting them perfectly while you wait safely.
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  "Covering Chesterfield town and surrounding villages",
                  "Rapid response for A61 and A619 breakdowns",
                  "Same-day mobile tyre fitting at your home or work",
                  "24/7 availability for emergencies",
                  "Transparent pricing, upfront quotes"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium text-[#0A1F44]">
                    <div className="bg-[#FFD700] rounded-full p-1"><CheckCircle2 className="w-5 h-5 text-[#0A1F44]" /></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F5F5F5] p-8 rounded-2xl border border-gray-100 h-full flex flex-col justify-center items-center text-center shadow-sm">
              <MapPin className="w-16 h-16 text-[#DC2626] mb-4" />
              <h3 className="text-2xl font-bold font-display text-[#0A1F44] mb-4">Chesterfield Coverage</h3>
              <div className="w-full aspect-video bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 italic">
                Map Placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
