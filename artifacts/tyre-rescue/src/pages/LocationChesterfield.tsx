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

const chesterfield: CityData = {
  name: "Chesterfield",
  region: "Derbyshire",
  postcodePrefix: "S40-S45",
  postcodeRange: "S40 - S45",
  motorways: ["M1 J29", "M1 J30", "A61", "A617", "A619"],
  neighbourhoods: ["Town Centre", "Brampton", "Walton", "Hasland", "Newbold", "Whittington Moor", "Old Whittington", "Staveley", "Brimington", "Holymoorside", "Wingerworth", "Clay Cross"],
  landmarks: ["Chesterfield Crooked Spire (St Mary's)", "Chesterfield FC - SMH Group Stadium", "Chesterfield Train Station", "Chesterfield Royal Hospital", "Ravenside Retail Park", "Peak District access via A619"],
  intro: "Chesterfield's reliable 24/7 mobile tyre fitter - serving the whole of north Derbyshire.",
  faqs: [
    { q: "How fast can you reach me in Chesterfield?", a: "We aim for 30-60 minute response across Chesterfield and surrounding villages. Our vans cover S40 to S45 postcodes and have quick access to the M1 at junctions 29 and 30." },
    { q: "Do you provide a 24/7 mobile tyre service in Chesterfield?", a: "Yes - 24 hours a day, every day including bank holidays. Whether it's a roadside emergency on the A61 at midnight or a flat tyre at home in Walton, we're available." },
    { q: "What Chesterfield areas do you cover?", a: "Chesterfield town centre, Brampton, Hasland, Newbold, Whittington Moor, Old Whittington, Staveley, Brimington, Wingerworth, Holymoorside and Clay Cross. We also cover the M1 and routes towards the Peak District." },
    { q: "How much does emergency tyre repair cost in Chesterfield?", a: "Puncture repairs typically start from £30, with new tyres fitted from around £55. We give a clear quote before we travel - no hidden fees, no surprises on arrival." },
    { q: "Do you carry tyres for vans and 4x4s in Chesterfield?", a: "Yes - our Chesterfield vans stock car, van, SUV and light commercial tyres in budget, mid-range and premium brands. Specialist sizes can usually be sourced within an hour." },
    { q: "Can you do a tyre call out in Chesterfield on a Sunday?", a: "Absolutely - Sundays, weekends and bank holidays included. There is no premium for unsociable hours; the price stays the same." },
  ],
  reviews: [
    { name: "Tom R.", area: "Chesterfield S40", text: "Flat tyre on the A61 near the Crooked Spire on a Sunday. They were with me in 30 minutes and back on the road in under an hour. Brilliant." },
    { name: "Emma B.", area: "Chesterfield S42", text: "Slow puncture in Wingerworth, called Monday morning, fitted at the house by lunch. Friendly fitter, fair price. Highly recommended." },
    { name: "Karl P.", area: "Chesterfield S43", text: "Van tyre blew out near Staveley. Fast response, quality replacement, sorted on the verge. Saved my work day." },
  ],
};

export default function LocationChesterfield() {
  return (
    <Layout>
      <SEOHead
        title="Mobile Tyre Fitting Chesterfield - 24/7 Emergency Tyre Repair"
        description="Mobile tyre fitting and emergency tyre repair in Chesterfield. 24/7 call out across S40-S45 postcodes, M1 J29-J30, Brampton, Staveley and surrounding Derbyshire areas."
        keywords="mobile tyre fitting Chesterfield, emergency tyre repair Chesterfield, tyre call out Chesterfield, puncture repair Chesterfield, 24/7 mobile tyre service Chesterfield, mobile tyres Chesterfield"
        schemas={buildLocationSchemas(chesterfield, "/mobile-tyre-fitting-chesterfield", 53.2350, -1.4187)}
      />

      <div className="bg-[#0A1F44] pt-12 pb-20 text-white">
        <div className="container px-4 mx-auto">
          <Breadcrumbs items={[{ label: "Areas We Cover", href: "/areas-we-cover" }, { label: "Chesterfield" }]} />
          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#DC2626] rounded-full text-xs font-bold uppercase tracking-wider mb-5">
              <Clock className="w-3.5 h-3.5" /> 30-60 Min Response in Chesterfield
            </div>
            <h1 className="text-4xl md:text-6xl font-black font-display mb-6">Mobile Tyre Fitting Chesterfield - 24/7 Tyre Rescue</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Trusted local mobile tyre service for Chesterfield and the whole of north Derbyshire. Roadside, home or workplace - we come to you 24 hours a day.
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
              <h2 className="text-3xl font-black font-display text-[#0A1F44] mb-5">Chesterfield's Local Mobile Tyre Service</h2>
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p>
                  Whether you're in town near the Crooked Spire, stuck on the A61 ring road, or need a tyre fitted at home in Wingerworth or Staveley, Mobile Tyre Rescue 247 has Chesterfield covered around the clock.
                </p>
                <p>
                  Our fully equipped vans serve all S40-S45 postcodes and beyond, with rapid response to the M1 at junctions 29 and 30. We carry car, van and SUV tyres in budget, mid-range and premium brands ready to fit on the spot - usually within 30-60 minutes of your call.
                </p>
              </div>
            </div>
            <div className="bg-[#F5F5F5] p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-7 h-7 text-[#DC2626] flex-shrink-0" />
                <h3 className="text-2xl font-bold font-display text-[#0A1F44]">Chesterfield Coverage Map</h3>
              </div>
              <CityMap city="Chesterfield" center={[53.2350, -1.4187]} zoom={12} height="320px" />
              <p className="mt-3 text-sm text-gray-600">Serving all Chesterfield postcodes and surrounding Derbyshire areas.</p>
            </div>
          </div>
        </div>
      </div>

      <LocalLandmarks city={chesterfield} />
      <HowItWorksLocal city="Chesterfield" />
      <LocalTestimonials city={chesterfield} />
      <LocalFAQ city={chesterfield} />
      <LocalCTA city="Chesterfield" />
    </Layout>
  );
}
