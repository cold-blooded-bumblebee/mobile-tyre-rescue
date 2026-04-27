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

const nottingham: CityData = {
  name: "Nottingham",
  region: "Nottinghamshire",
  postcodePrefix: "NG",
  postcodeRange: "NG1 - NG16",
  motorways: ["M1 J24", "M1 J25", "M1 J26", "A52", "A453"],
  neighbourhoods: ["City Centre", "West Bridgford", "Beeston", "Arnold", "Carlton", "Hyson Green", "Sherwood", "Mapperley", "Wollaton", "Bulwell", "Clifton", "Long Eaton"],
  landmarks: ["Nottingham Castle", "Nottingham Forest - City Ground", "Notts County - Meadow Lane", "Trent Bridge Cricket Ground", "Nottingham Train Station", "Queen's Medical Centre", "Victoria Centre"],
  intro: "Nottingham's 24/7 mobile tyre rescue service - fast response across Nottinghamshire.",
  faqs: [
    { q: "How fast can you arrive in Nottingham?", a: "We typically reach Nottingham callouts within 30-60 minutes. Our vans operate from multiple bases across NG1-NG16 postcodes, with rapid access to M1 junctions 24, 25 and 26 for emergency motorway response." },
    { q: "Do you offer 24 hour tyre call out in Nottingham?", a: "Yes - we cover Nottingham 24 hours a day, 365 days a year. Late-night flat tyres on the A52, weekend punctures in West Bridgford, or early morning emergencies anywhere in NG postcodes - just call." },
    { q: "Which Nottingham areas do you cover?", a: "All NG1-NG16 postcodes including the city centre, West Bridgford, Beeston, Arnold, Carlton, Sherwood, Wollaton, Bulwell and Long Eaton. We also serve the M1 corridor and A52 ring road." },
    { q: "How much is mobile tyre fitting in Nottingham?", a: "Tyre prices start from around £55 fitted. We offer budget, mid-range and premium brands. The price you're quoted is the price you pay - no hidden callout charges." },
    { q: "Can you fit tyres at my workplace in Nottingham?", a: "Yes - many of our customers book us at their office, depot or even retail car parks across Nottingham. We fit while you work." },
    { q: "Do you repair punctures or only replace tyres in Nottingham?", a: "Both. Where the puncture is within the safely repairable area, we'll plug-patch it to British Standard. Otherwise, we'll fit a new tyre on the spot from our van stock." },
  ],
  reviews: [
    { name: "Sarah T.", area: "Nottingham NG2", text: "Punctured in West Bridgford on a Saturday night. They arrived in 40 minutes, fitted a new tyre and were really professional. Excellent." },
    { name: "Daniel O.", area: "Nottingham NG7", text: "Locking wheel nut snapped in Hyson Green - couldn't change the tyre myself. They removed it, fitted a new tyre and gave me a replacement key set. Top job." },
    { name: "Linda M.", area: "Nottingham NG9", text: "Slow puncture on the school run in Beeston. Booked them for the same afternoon, fixed at home, no fuss. Will use again." },
  ],
};

export default function LocationNottingham() {
  return (
    <Layout>
      <SEOHead
        title="Mobile Tyre Fitting Nottingham - 24/7 Emergency Tyre Repair"
        description="Mobile tyre fitting and emergency tyre repair across Nottingham. 24 hour tyre call out service to NG1-NG16 postcodes, M1 corridor and surrounding Nottinghamshire areas."
        keywords="mobile tyre fitting Nottingham, emergency tyre repair Nottingham, 24 hour tyre call out Nottingham, mobile tyre change Nottingham, roadside tyre repair Nottingham, puncture repair Nottingham"
        schemas={buildLocationSchemas(nottingham, "/mobile-tyre-fitting-nottingham", 52.9548, -1.1581)}
      />

      <div className="bg-[#0A1F44] pt-12 pb-20 text-white">
        <div className="container px-4 mx-auto">
          <Breadcrumbs items={[{ label: "Areas We Cover", href: "/areas-we-cover" }, { label: "Nottingham" }]} />
          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#DC2626] rounded-full text-xs font-bold uppercase tracking-wider mb-5">
              <Clock className="w-3.5 h-3.5" /> 30-60 Min Response in Nottingham
            </div>
            <h1 className="text-4xl md:text-6xl font-black font-display mb-6">Mobile Tyre Fitting Nottingham - 24/7 Tyre Rescue</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Fast emergency mobile tyre fitting and puncture repair across Nottingham and Nottinghamshire. Day or night, weekday or weekend - we come to you anywhere in NG postcodes.
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
              <h2 className="text-3xl font-black font-display text-[#0A1F44] mb-5">Nottingham's Local Mobile Tyre Specialists</h2>
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p>
                  From a punctured tyre in West Bridgford to an emergency blowout on the M1 near Junction 25, Mobile Tyre Rescue 247 brings the garage to you anywhere in Nottingham. Our fully kitted vans carry a wide stock of car, van and SUV tyres ready to fit on the spot.
                </p>
                <p>
                  Nottingham's traffic and busy ring roads make a damaged tyre a real headache. Our local fitters know every shortcut, so we get to you fast - usually within 30-60 minutes - and finish the job within an hour. Cover spans NG1 in the city centre out through Beeston, Arnold, Carlton, Sherwood and Long Eaton.
                </p>
              </div>
            </div>
            <div className="bg-[#F5F5F5] p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-7 h-7 text-[#DC2626] flex-shrink-0" />
                <h3 className="text-2xl font-bold font-display text-[#0A1F44]">Nottingham Coverage Map</h3>
              </div>
              <CityMap city="Nottingham" center={[52.9548, -1.1581]} zoom={12} height="320px" />
              <p className="mt-3 text-sm text-gray-600">Serving all Nottingham postcodes and surrounding Nottinghamshire areas.</p>
            </div>
          </div>
        </div>
      </div>

      <LocalLandmarks city={nottingham} />
      <HowItWorksLocal city="Nottingham" />
      <LocalTestimonials city={nottingham} />
      <LocalFAQ city={nottingham} />
      <LocalCTA city="Nottingham" />
    </Layout>
  );
}
