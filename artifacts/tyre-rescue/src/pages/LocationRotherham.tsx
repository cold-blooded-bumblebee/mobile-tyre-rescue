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

const rotherham: CityData = {
  name: "Rotherham",
  region: "South Yorkshire",
  postcodePrefix: "S60-S66",
  postcodeRange: "S60 - S66",
  motorways: ["M1 J33", "M1 J34", "M18 J1", "A630"],
  neighbourhoods: ["Town Centre", "Wickersley", "Wath-upon-Dearne", "Maltby", "Dinnington", "Bramley", "Brinsworth", "Greasbrough", "Whiston", "Kimberworth", "Aston", "Thurcroft"],
  landmarks: ["Rotherham United - AESSEAL New York Stadium", "Rotherham Train Station", "Rotherham General Hospital", "Magna Science Adventure Centre", "Parkgate Shopping", "Manvers Lakeside"],
  intro: "Rotherham's go-to 24/7 mobile tyre fitting service across South Yorkshire.",
  faqs: [
    { q: "How fast is your tyre call out in Rotherham?", a: "We typically reach Rotherham customers within 30-60 minutes. Our vans operate from across S60-S66 postcodes with quick access to M1 J33/34 and the M18." },
    { q: "Do you offer 24 hour mobile tyres in Rotherham?", a: "Yes - we run a true 24/7 service across Rotherham. Roadside emergencies, home callouts, fleet jobs - any time of day or night, including weekends and bank holidays." },
    { q: "Which Rotherham areas do you cover?", a: "All S60-S66 postcodes including the town centre, Wickersley, Wath-upon-Dearne, Maltby, Dinnington, Bramley, Greasbrough, Kimberworth, Whiston and Thurcroft. Also rapid response on the M1 and M18." },
    { q: "How much is mobile puncture repair in Rotherham?", a: "Puncture repairs from around £30. New tyres fitted from £55 depending on size and brand. There are no hidden callout charges - the quoted price is what you pay." },
    { q: "Do you carry van tyres in Rotherham?", a: "Yes - our vans stock car, van, 4x4 and light commercial tyres. Specialist sizes can usually be sourced within an hour from our local supplier network." },
    { q: "Can you fit tyres at my workplace in Rotherham?", a: "Yes - office car parks, depots, retail sites, fleet yards. We work around your day so you don't lose time off the road." },
  ],
  reviews: [
    { name: "Steve H.", area: "Rotherham S60", text: "Tyre blew on the M1 near J34 heading into Rotherham. They reached me in 25 minutes and had a quality replacement fitted on the hard shoulder. Brilliant." },
    { name: "Aisha N.", area: "Rotherham S65", text: "Slow puncture at home in Wickersley. Booked the morning, fitted at lunch, lovely fitter and the price was as quoted. Five stars." },
    { name: "Gary L.", area: "Rotherham S66", text: "Locking nut wouldn't shift - they removed it cleanly and fitted a new tyre on the spot in Maltby. Saved me a trip to a garage." },
  ],
};

export default function LocationRotherham() {
  return (
    <Layout>
      <SEOHead
        title="Mobile Tyre Fitting Rotherham - 24/7 Emergency Tyre Repair"
        description="Mobile tyre fitting and emergency tyre repair across Rotherham. 24 hour mobile tyre call out to S60-S66 postcodes, M1 J33-J34 and surrounding South Yorkshire areas."
        keywords="mobile tyre fitting Rotherham, emergency tyre repair Rotherham, tyre call out Rotherham, mobile puncture repair Rotherham, 24 hour mobile tyres Rotherham, mobile tyres Rotherham"
        schemas={buildLocationSchemas(rotherham, "/mobile-tyre-fitting-rotherham", 53.4302, -1.3572)}
      />

      <div className="bg-[#0A1F44] pt-12 pb-20 text-white">
        <div className="container px-4 mx-auto">
          <Breadcrumbs items={[{ label: "Areas We Cover", href: "/areas-we-cover" }, { label: "Rotherham" }]} />
          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#DC2626] rounded-full text-xs font-bold uppercase tracking-wider mb-5">
              <Clock className="w-3.5 h-3.5" /> 30-60 Min Response in Rotherham
            </div>
            <h1 className="text-4xl md:text-6xl font-black font-display mb-6">Mobile Tyre Fitting Rotherham - 24/7 Tyre Rescue</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Fast, professional mobile tyre fitting and emergency repair across Rotherham. Roadside, home or work - we cover every S60-S66 postcode 24 hours a day.
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
              <h2 className="text-3xl font-black font-display text-[#0A1F44] mb-5">Rotherham's Trusted Mobile Tyre Specialists</h2>
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p>
                  From a sudden blowout on the M1 near Junction 33 to a slow puncture at home in Wickersley or Maltby, Mobile Tyre Rescue 247 brings the tyre garage directly to you anywhere in Rotherham, day or night.
                </p>
                <p>
                  Our fully equipped vans cover all S60-S66 postcodes - town centre, Brinsworth, Wath-upon-Dearne, Kimberworth, Dinnington, Bramley and beyond - with quality car, van and SUV tyres in stock and a typical response time of 30-60 minutes.
                </p>
              </div>
            </div>
            <div className="bg-[#F5F5F5] p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-7 h-7 text-[#DC2626] flex-shrink-0" />
                <h3 className="text-2xl font-bold font-display text-[#0A1F44]">Rotherham Coverage Map</h3>
              </div>
              <CityMap city="Rotherham" center={[53.4302, -1.3572]} zoom={12} height="320px" />
              <p className="mt-3 text-sm text-gray-600">Serving all Rotherham postcodes and surrounding South Yorkshire areas.</p>
            </div>
          </div>
        </div>
      </div>

      <LocalLandmarks city={rotherham} />
      <HowItWorksLocal city="Rotherham" />
      <LocalTestimonials city={rotherham} />
      <LocalFAQ city={rotherham} />
      <LocalCTA city="Rotherham" />
    </Layout>
  );
}
