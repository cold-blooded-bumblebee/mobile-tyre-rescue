import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Phone, CheckCircle2, MapPin } from "lucide-react";
import { CityMap } from "@/components/CityMap";

const PHONE_DISPLAY = "07469 157852";
const PHONE_HREF = "https://wa.me/447469157852";

export default function LocationRotherham() {
  return (
    <Layout>
      <SEOHead 
        title="Mobile Tyre Fitting Rotherham | 24/7 Emergency Tyres" 
        description="Mobile tyre fitting and emergency tyre repair in Rotherham. Fast response. We come to your home, work, or roadside in Rotherham."
      />
      
      <div className="bg-[#0A1F44] pt-12 pb-24 text-white">
        <div className="container px-4 mx-auto">
          <Breadcrumbs items={[{ label: "Areas We Cover", href: "/areas-we-cover" }, { label: "Rotherham" }]} />
          <div className="max-w-3xl mt-8">
            <h1 className="text-4xl md:text-6xl font-black font-display mb-6">Mobile Tyre Fitting Rotherham</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Fast, reliable mobile tyre fitting and emergency puncture repair across Rotherham. From the town centre to the M1 and M18.
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
              <h2 className="text-3xl font-black font-display text-[#0A1F44] mb-6">Rotherham's 24/7 Tyre Rescue</h2>
              <div className="prose prose-lg text-gray-600 mb-8">
                <p>
                  A flat tyre in Rotherham doesn't have to disrupt your schedule. Whether you're at work at the Advanced Manufacturing Park, parked at Parkgate, or stuck at home in Wickersley, we deliver a full mobile tyre fitting service directly to you.
                </p>
                <p>
                  Our technicians are highly experienced in providing safe roadside assistance on busy routes like the M1, M18, and A630. Don't risk driving on a flat — let us bring the replacement to you.
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  "Covering all areas of Rotherham",
                  "Rapid response for M1 J33, J34 and M18 J1 breakdowns",
                  "Same-day mobile tyre fitting at your home or work",
                  "Puncture repairs, new tyres, and locking nut removal",
                  "No hidden callout fees"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium text-[#0A1F44]">
                    <div className="bg-[#FFD700] rounded-full p-1"><CheckCircle2 className="w-5 h-5 text-[#0A1F44]" /></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F5F5F5] p-6 rounded-2xl border border-gray-100 h-full flex flex-col shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-8 h-8 text-[#DC2626] flex-shrink-0" />
                <h3 className="text-2xl font-bold font-display text-[#0A1F44]">Rotherham Coverage Map</h3>
              </div>
              <CityMap city="Rotherham" center={[53.4302, -1.3572]} zoom={12} height="340px" />
              <p className="mt-4 text-sm text-gray-600">Serving all Rotherham postcodes and surrounding areas.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
