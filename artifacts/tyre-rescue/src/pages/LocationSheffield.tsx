import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Phone, CheckCircle2, MapPin } from "lucide-react";
import { CityMap } from "@/components/CityMap";

const PHONE_DISPLAY = "07469 157852";
const PHONE_HREF = "https://wa.me/447469157852";

export default function LocationSheffield() {
  return (
    <Layout>
      <SEOHead 
        title="Mobile Tyre Fitting Sheffield | 24/7 Emergency Tyres" 
        description="Mobile tyre fitting and emergency tyre repair in Sheffield. Fast response to S1-S36 postcodes. We come to your home, work, or roadside in Sheffield."
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Mobile Tyre Rescue 247 Sheffield",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Sheffield",
            "addressRegion": "South Yorkshire",
            "addressCountry": "UK"
          }
        }}
      />
      
      <div className="bg-[#0A1F44] pt-12 pb-24 text-white">
        <div className="container px-4 mx-auto">
          <Breadcrumbs items={[{ label: "Areas We Cover", href: "/areas-we-cover" }, { label: "Sheffield" }]} />
          <div className="max-w-3xl mt-8">
            <h1 className="text-4xl md:text-6xl font-black font-display mb-6">Mobile Tyre Fitting Sheffield</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Fast, reliable mobile tyre fitting and emergency puncture repair across Sheffield. Our vans operate 24/7 covering the city centre, suburbs, and the M1 corridor.
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
              <h2 className="text-3xl font-black font-display text-[#0A1F44] mb-6">Sheffield's Trusted Mobile Tyre Experts</h2>
              <div className="prose prose-lg text-gray-600 mb-8">
                <p>
                  Whether you're stranded with a flat tyre near Meadowhall, have a slow puncture at home in Crookes, or need replacement tyres fitted at your workplace in the city centre, Mobile Tyre Rescue 247 has Sheffield covered.
                </p>
                <p>
                  Navigating Sheffield's hills and busy roads with a damaged tyre is dangerous. Our fully equipped mobile fitting vans arrive directly at your location — usually within 30 to 60 minutes — to repair or replace your tyre safely and efficiently. We cover all S postcodes, from S1 to S36, including quick access to the M1 motorway for emergency roadside breakdowns.
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  "Covering City Centre, Hillsborough, Ecclesall, and beyond",
                  "Rapid response for M1 J33, J34, and J35 breakdowns",
                  "Same-day mobile tyre fitting at your driveway or workplace",
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
                <h3 className="text-2xl font-bold font-display text-[#0A1F44]">Sheffield Coverage Map</h3>
              </div>
              <CityMap city="Sheffield" center={[53.3811, -1.4701]} zoom={11} height="340px" />
              <p className="mt-4 text-sm text-gray-600">Serving all Sheffield postcodes and surrounding areas.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
