import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Phone, MapPin, Clock } from "lucide-react";
import { CityMap } from "@/components/CityMap";
import {
  TrustBadgesRow,
  HowItWorksLocal,
  LocalLandmarks,
  LocalTestimonials,
  LocalFAQ,
  LocalCTA,
  buildLocationSchemas,
  type CityData,
} from "@/components/LocationSections";

const PHONE_DISPLAY = "07469 157852";
const PHONE_HREF = "https://wa.me/447469157852";

const sheffield: CityData = {
  name: "Sheffield",
  region: "South Yorkshire",
  postcodePrefix: "S",
  postcodeRange: "S1 - S36",
  motorways: ["M1 J33", "M1 J34", "M1 J35"],
  neighbourhoods: ["City Centre", "Hillsborough", "Ecclesall", "Crookes", "Meadowhall", "Sharrow", "Heeley", "Walkley", "Nether Edge", "Woodseats", "Stocksbridge", "Chapeltown"],
  landmarks: ["Meadowhall Shopping Centre", "Sheffield United - Bramall Lane", "Sheffield Wednesday - Hillsborough Stadium", "Sheffield Train Station", "Royal Hallamshire Hospital", "Peak District access roads"],
  intro: "Sheffield's trusted 24/7 mobile tyre fitter. Fast emergency response across South Yorkshire.",
  faqs: [
    { q: "How fast can you arrive in Sheffield?", a: "Most Sheffield callouts are reached within 30-60 minutes. We have vans positioned across S1-S36 postcodes for the fastest possible response, including rapid access to M1 junctions 33, 34 and 35." },
    { q: "Do you offer 24/7 tyre call outs in Sheffield?", a: "Yes - we operate 24 hours a day, 7 days a week, including bank holidays. Whether you have a flat tyre at 3am near Meadowhall or a blowout on the M1, we'll come to you." },
    { q: "Which Sheffield postcodes do you cover?", a: "We cover every Sheffield postcode from S1 in the city centre out to S35 and S36 in the surrounding villages, including Hillsborough, Ecclesall, Crookes, Heeley, Stocksbridge and Chapeltown." },
    { q: "How much does mobile tyre fitting cost in Sheffield?", a: "Tyre prices start from around £55 fitted, depending on tyre size and brand. There are no hidden callout fees - the price you're quoted is the price you pay. We offer budget, mid-range and premium tyres in stock." },
    { q: "Do you carry tyres for all car makes in Sheffield?", a: "Yes - our Sheffield vans carry a wide range of tyres for cars, vans, SUVs and light commercial vehicles. If we don't have your exact tyre on the van, we can usually source it within an hour." },
    { q: "Can you repair a puncture in Sheffield instead of replacing the tyre?", a: "Where possible, yes. Punctures within the central tread area can usually be safely repaired to British Standard BS AU 159, saving you the cost of a new tyre." },
  ],
  reviews: [
    { name: "John S.", area: "Sheffield S5", text: "Got a flat near Hillsborough at 11pm. They were with me in 35 minutes and had a new tyre fitted within the hour. Brilliant service." },
    { name: "Priya K.", area: "Sheffield S11", text: "Punctured tyre in the Ecclesall Road area on a Sunday morning. Quick, friendly and the price was exactly as quoted on the phone. Highly recommend." },
    { name: "Mark D.", area: "Sheffield S9", text: "Blowout on M1 J34 heading to Meadowhall. They came out fast, fitted a quality tyre roadside and I was on my way. Lifesaver." },
  ],
};

export default function LocationSheffield() {
  return (
    <Layout>
      <SEOHead
        title="Mobile Tyre Fitting Sheffield - 24/7 Emergency Tyre Repair"
        description="24/7 mobile tyre fitting and emergency tyre repair across Sheffield. Fast 30-60 min response to S1-S36 postcodes, M1 corridor and surrounding areas. No hidden callout fees."
        keywords="mobile tyre fitting Sheffield, emergency tyre repair Sheffield, 24/7 mobile tyre fitter Sheffield, roadside tyre replacement Sheffield, puncture repair Sheffield, mobile tyre change Sheffield, tyre call out Sheffield"
        schemas={buildLocationSchemas(sheffield, "/mobile-tyre-fitting-sheffield", 53.3811, -1.4701)}
      />

      <div className="bg-[#0A1F44] pt-12 pb-20 text-white">
        <div className="container px-4 mx-auto">
          <Breadcrumbs items={[{ label: "Areas We Cover", href: "/areas-we-cover" }, { label: "Sheffield" }]} />
          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#DC2626] rounded-full text-xs font-bold uppercase tracking-wider mb-5">
              <Clock className="w-3.5 h-3.5" /> 30-60 Min Response in Sheffield
            </div>
            <h1 className="text-4xl md:text-6xl font-black font-display mb-6">Mobile Tyre Fitting Sheffield - 24/7 Tyre Rescue</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Fast, reliable mobile tyre fitting and emergency puncture repair across Sheffield. Our vans operate 24/7 covering the city centre, suburbs, and the entire M1 corridor through South Yorkshire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={PHONE_HREF} className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-[#FFD700] text-[#0A1F44] font-bold rounded-xl hover:bg-yellow-400 transition-colors shadow-xl">
                <Phone className="w-5 h-5" /> Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 bg-[#F5F5F5] border-b border-gray-200">
        <div className="container px-4 mx-auto">
          <TrustBadgesRow />
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-black font-display text-[#0A1F44] mb-5">Sheffield's Trusted Mobile Tyre Experts</h2>
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p>
                  Whether you're stranded with a flat tyre near Meadowhall, have a slow puncture at home in Crookes, or need replacement tyres fitted at your workplace in the city centre, Mobile Tyre Rescue 247 has Sheffield covered around the clock.
                </p>
                <p>
                  Navigating Sheffield's hills and busy roads with a damaged tyre is dangerous. Our fully equipped mobile fitting vans arrive directly at your location - usually within 30 to 60 minutes - to repair or replace your tyre safely and efficiently. We cover all S postcodes from S1 to S36, including rapid access to M1 motorway junctions for emergency roadside breakdowns.
                </p>
              </div>
            </div>
            <div className="bg-[#F5F5F5] p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-7 h-7 text-[#DC2626] flex-shrink-0" />
                <h3 className="text-2xl font-bold font-display text-[#0A1F44]">Sheffield Coverage Map</h3>
              </div>
              <CityMap city="Sheffield" center={[53.3811, -1.4701]} zoom={11} height="320px" />
              <p className="mt-3 text-sm text-gray-600">Serving all Sheffield postcodes and surrounding South Yorkshire areas.</p>
            </div>
          </div>
        </div>
      </div>

      <LocalLandmarks city={sheffield} />
      <HowItWorksLocal city="Sheffield" />
      <LocalTestimonials city={sheffield} />
      <LocalFAQ city={sheffield} />
      <LocalCTA city="Sheffield" />
    </Layout>
  );
}
