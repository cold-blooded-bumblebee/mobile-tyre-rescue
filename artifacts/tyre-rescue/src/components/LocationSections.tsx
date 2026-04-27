import { CheckCircle2, Clock, Shield, BadgeCheck, MapPin, Phone, Wrench, AlertCircle, Star } from "lucide-react";

const PHONE_DISPLAY = "07469 157852";
const PHONE_HREF = "https://wa.me/447469157852";

export interface CityData {
  name: string;
  region: string;
  postcodePrefix: string;
  postcodeRange: string;
  landmarks: string[];
  motorways: string[];
  neighbourhoods: string[];
  faqs: { q: string; a: string }[];
  reviews: { name: string; area: string; text: string }[];
  intro: string;
}

export function TrustBadgesRow() {
  const badges = [
    { icon: Clock, title: "30-60 Min Response", subtitle: "Typical arrival time" },
    { icon: Shield, title: "Fully Insured", subtitle: "Qualified fitters" },
    { icon: BadgeCheck, title: "No Hidden Fees", subtitle: "Transparent pricing" },
    { icon: Wrench, title: "24/7 Emergency", subtitle: "Day or night" },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {badges.map(({ icon: Icon, title, subtitle }) => (
        <div key={title} className="bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-[#FFD700] rounded-xl mb-3">
            <Icon className="w-6 h-6 text-[#0A1F44]" />
          </div>
          <div className="font-bold text-[#0A1F44] text-sm md:text-base">{title}</div>
          <div className="text-xs text-gray-500 mt-1">{subtitle}</div>
        </div>
      ))}
    </div>
  );
}

export function HowItWorksLocal({ city }: { city: string }) {
  const steps = [
    { n: "1", title: "Call or WhatsApp", text: `Tell us your location and tyre issue anywhere in ${city}.` },
    { n: "2", title: "Van Dispatched", text: "Our nearest fully equipped van is sent to you, usually within 30-60 minutes." },
    { n: "3", title: "On-Site Repair", text: "We repair, replace, or refit your tyre wherever you are - roadside, home, or work." },
    { n: "4", title: "Back On The Road", text: "Pay on the spot. No hidden callout fees. Get on with your day safely." },
  ];
  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black font-display text-[#0A1F44] mb-3">How Our {city} Mobile Tyre Service Works</h2>
          <p className="text-gray-600 text-lg">Simple, fast, transparent - 24 hours a day, 7 days a week.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map(({ n, title, text }) => (
            <div key={n} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#0A1F44] text-[#FFD700] font-black flex items-center justify-center mb-4">{n}</div>
              <h3 className="font-bold text-[#0A1F44] text-lg mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LocalLandmarks({ city }: { city: CityData }) {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-black font-display text-[#0A1F44] mb-4">Why {city.name} Drivers Choose Tyre Rescue 247</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              We're {city.name}'s trusted local mobile tyre fitter. Our vans are stationed nearby for the fastest possible response across {city.region}, covering every {city.postcodePrefix} postcode and the surrounding road network.
            </p>
            <ul className="space-y-3">
              {[
                `Local knowledge of ${city.name}'s roads and shortcuts`,
                `Coverage across ${city.postcodeRange} postcodes`,
                `Rapid emergency response on ${city.motorways.join(", ")}`,
                `Budget, mid-range and premium tyres in stock`,
                `Cars, vans, SUVs and light commercials all serviced`,
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#0A1F44]">
                  <CheckCircle2 className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#F5F5F5] rounded-2xl p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-5">
              <MapPin className="w-7 h-7 text-[#DC2626]" />
              <h3 className="text-2xl font-bold font-display text-[#0A1F44]">Areas We Cover Near {city.name}</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {city.neighbourhoods.map((n) => (
                <span key={n} className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-semibold text-[#0A1F44]">
                  {n}
                </span>
              ))}
            </div>
            <div className="border-t border-gray-200 pt-5">
              <div className="text-sm font-bold text-[#0A1F44] mb-3">Local landmarks we service near:</div>
              <ul className="space-y-2 text-gray-700 text-sm">
                {city.landmarks.map((l) => (
                  <li key={l} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LocalTestimonials({ city }: { city: CityData }) {
  return (
    <section className="py-16 bg-[#0A1F44] text-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black font-display mb-3">What {city.name} Customers Say</h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
            ))}
          </div>
          <p className="text-gray-300">Rated 4.9/5 by drivers across {city.name}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {city.reviews.map((r) => (
            <div key={r.name} className="bg-white/5 backdrop-blur p-6 rounded-2xl border border-white/10">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                ))}
              </div>
              <p className="text-gray-200 italic mb-4 leading-relaxed">"{r.text}"</p>
              <div className="border-t border-white/10 pt-3">
                <div className="font-bold">{r.name}</div>
                <div className="text-sm text-gray-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {r.area}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LocalFAQ({ city }: { city: CityData }) {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black font-display text-[#0A1F44] mb-3">{city.name} Mobile Tyre Service - FAQs</h2>
          <p className="text-gray-600 text-lg">Common questions from drivers in {city.name}.</p>
        </div>
        <div className="space-y-4">
          {city.faqs.map((f, i) => (
            <details key={i} className="group bg-[#F5F5F5] rounded-2xl border border-gray-100 overflow-hidden">
              <summary className="flex items-start justify-between gap-4 p-5 cursor-pointer list-none">
                <h3 className="font-bold text-[#0A1F44] text-lg">{f.q}</h3>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFD700] flex items-center justify-center text-[#0A1F44] font-black text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-5 text-gray-700 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LocalCTA({ city }: { city: string }) {
  return (
    <section className="py-16 bg-[#FFD700]">
      <div className="container px-4 mx-auto text-center max-w-3xl">
        <AlertCircle className="w-12 h-12 text-[#0A1F44] mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-black font-display text-[#0A1F44] mb-3">Tyre Emergency in {city}?</h2>
        <p className="text-[#0A1F44] text-lg mb-6 font-medium">
          Call now for the fastest mobile tyre fitter in {city}. Our vans are on standby 24/7.
        </p>
        <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0A1F44] text-white font-bold rounded-xl hover:bg-black transition-colors text-lg shadow-lg">
          <Phone className="w-5 h-5" /> Call {PHONE_DISPLAY}
        </a>
      </div>
    </section>
  );
}

export function buildLocationSchemas(city: CityData, path: string, lat: number, lng: number) {
  const url = `https://tyrerescue247.co.uk${path}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "AutoRepair",
      "@id": `${url}#business`,
      "name": `Mobile Tyre Rescue 247 - ${city.name}`,
      "description": `24/7 mobile tyre fitting and emergency tyre repair across ${city.name}, ${city.region}. Same-day callout service to home, work or roadside.`,
      "url": url,
      "telephone": "+44 7469 157852",
      "priceRange": "££",
      "image": "https://tyrerescue247.co.uk/opengraph.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": city.name,
        "addressRegion": city.region,
        "addressCountry": "GB",
      },
      "geo": { "@type": "GeoCoordinates", "latitude": lat, "longitude": lng },
      "areaServed": {
        "@type": "City",
        "name": city.name,
      },
      "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "00:00",
        "closes": "23:59",
      }],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "187",
        "bestRating": "5",
      },
      "review": city.reviews.map((r) => ({
        "@type": "Review",
        "author": { "@type": "Person", "name": r.name },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": r.text,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Mobile Tyre Fitting and Emergency Tyre Repair",
      "provider": { "@type": "AutoRepair", "name": `Mobile Tyre Rescue 247 - ${city.name}` },
      "areaServed": { "@type": "City", "name": city.name },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `${city.name} Mobile Tyre Services`,
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": `Mobile Tyre Fitting ${city.name}` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": `Emergency Tyre Repair ${city.name}` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": `Roadside Tyre Replacement ${city.name}` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": `Puncture Repair ${city.name}` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": `Locking Wheel Nut Removal ${city.name}` } },
        ],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": city.faqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    },
  ];
}
