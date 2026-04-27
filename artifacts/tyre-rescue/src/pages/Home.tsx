import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { TrustBadgesRow } from "@/components/LocationSections";
import { motion } from "framer-motion";
import { Phone, Clock, ShieldCheck, Zap, Car, Wrench, CheckCircle2, AlertTriangle, Star, MapPin, ChevronRight } from "lucide-react";
import { Link } from "wouter";

const HOME_FAQS = [
  { q: "What areas do you cover?", a: "We provide 24/7 mobile tyre fitting across Sheffield, Chesterfield, Rotherham and Nottingham, plus all surrounding postcodes in South Yorkshire, Derbyshire and Nottinghamshire." },
  { q: "How fast can you arrive?", a: "Typical response time is 30 to 60 minutes from your call. Our vans operate from multiple bases across our coverage area for the fastest possible arrival." },
  { q: "Are you available 24/7?", a: "Yes - we operate 24 hours a day, 7 days a week, including bank holidays. There is no premium charge for night, weekend or holiday call-outs." },
  { q: "What does mobile tyre fitting cost?", a: "Tyre prices start from around £55 fitted, depending on size and brand. Puncture repairs from £30. There are no hidden callout fees - the price quoted is the price you pay." },
  { q: "What tyres do you carry?", a: "Our vans stock a wide range of budget, mid-range and premium tyres for cars, vans, SUVs and light commercials. Specialist sizes can usually be sourced within an hour." },
  { q: "Do you accept card payment?", a: "Yes - we accept card, contactless, Apple Pay, Google Pay and bank transfer. Payment is taken on the spot once the job is complete." },
];

const HOME_SCHEMAS = [
  {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": "https://tyrerescue247.co.uk/#organization",
    "name": "Mobile Tyre Rescue 247",
    "alternateName": "Tyre Rescue 247",
    "description": "24/7 mobile tyre fitting and emergency tyre repair across Sheffield, Chesterfield, Rotherham and Nottingham. We come to your home, work or roadside.",
    "image": "https://tyrerescue247.co.uk/opengraph.jpg",
    "logo": "https://tyrerescue247.co.uk/favicon.svg",
    "url": "https://tyrerescue247.co.uk",
    "telephone": "+44 7469 157852",
    "priceRange": "££",
    "address": { "@type": "PostalAddress", "addressRegion": "South Yorkshire", "addressCountry": "GB" },
    "areaServed": [
      { "@type": "City", "name": "Sheffield" },
      { "@type": "City", "name": "Chesterfield" },
      { "@type": "City", "name": "Rotherham" },
      { "@type": "City", "name": "Nottingham" },
    ],
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "00:00", "closes": "23:59",
    }],
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "200", "bestRating": "5" },
    "sameAs": ["https://wa.me/447469157852"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog", "name": "Mobile Tyre Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile Tyre Fitting" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Tyre Repair" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roadside Tyre Replacement" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Puncture Repair" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Locking Wheel Nut Removal" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "24/7 Mobile Tyre Service" } },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": HOME_FAQS.map((f) => ({
      "@type": "Question", "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  },
];

const PHONE_DISPLAY = "07469 157852";
const PHONE_HREF = "https://wa.me/447469157852";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <Layout>
      <SEOHead 
        title="24/7 Mobile Tyre Fitting & Emergency Tyre Repair | Sheffield, Chesterfield, Rotherham, Nottingham" 
        description="Emergency mobile tyre fitting, puncture repair and roadside tyre replacement across Sheffield, Chesterfield, Rotherham and Nottingham. 24/7 call out, 30-60 min response, no hidden fees."
        keywords="emergency tyre repair near me, mobile tyre fitting near me, 24/7 mobile tyre service, tyre call out service, roadside tyre replacement, emergency tyre fitter, mobile tyre change service, mobile tyre fitting Sheffield, mobile tyre fitting Nottingham, mobile tyre fitting Chesterfield, mobile tyre fitting Rotherham"
        schemas={HOME_SCHEMAS}
      />

      {/* Hero Section */}
      <section className="relative flex items-center min-h-[85vh] bg-[#0A1F44] overflow-hidden pt-10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A1F44] opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-[#0A1F44]/80 to-transparent" />
        </div>
        
        <div className="container relative z-10 px-4 mx-auto py-12">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-bold text-white bg-[#DC2626] rounded-full shadow-lg shadow-red-500/20">
              <AlertTriangle className="w-4 h-4" />
              24/7 RAPID RESPONSE UNIT
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="mb-6 text-5xl font-black text-white md:text-7xl font-display leading-[1.1]">
              Mobile <span className="text-[#FFD700]">Tyre Rescue</span><br/> We Come To You
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="mb-10 text-xl text-gray-300 md:text-2xl max-w-2xl font-medium leading-relaxed">
              Emergency roadside tyre replacement and puncture repair in Sheffield, Chesterfield, Rotherham & Nottingham. Fixed fast, right where you are.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href={PHONE_HREF} className="flex items-center justify-center gap-3 px-8 py-5 text-xl font-bold text-[#0A1F44] transition-all bg-[#FFD700] rounded-xl hover:bg-yellow-400 hover:scale-105 shadow-[0_0_30px_rgba(255,215,0,0.3)]">
                <Phone className="w-6 h-6 animate-pulse" />
                Call Now: {PHONE_DISPLAY}
              </a>
              <div className="flex items-center justify-center gap-2 text-sm font-semibold text-white/80 bg-white/10 px-6 py-4 rounded-xl backdrop-blur-sm">
                <Clock className="w-5 h-5 text-[#FFD700]" />
                30-60 Min Response Time
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 mt-12 text-sm font-medium text-gray-300">
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full"><CheckCircle2 className="w-4 h-4 text-[#FFD700]" /> Mobile Fitting</div>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full"><CheckCircle2 className="w-4 h-4 text-[#FFD700]" /> Puncture Repairs</div>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full"><CheckCircle2 className="w-4 h-4 text-[#FFD700]" /> Locking Nut Removal</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-10 bg-[#F5F5F5] border-b border-gray-200">
        <div className="container px-4 mx-auto">
          <TrustBadgesRow />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white relative">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-[#0A1F44] md:text-5xl font-display mb-6">Our Mobile Tyre Services</h2>
            <p className="text-lg text-gray-600">Fully equipped vans ready to handle any tyre emergency. We bring the tyre shop to your driveway, workplace, or roadside.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Mobile Tyre Fitting", desc: "New tyres supplied and fitted at your home, work, or roadside.", icon: Zap, link: "/mobile-tyre-fitting" },
              { title: "Emergency Repair", desc: "Stuck on the side of the road? We'll dispatch a van immediately.", icon: AlertTriangle, link: "/emergency-tyre-repair" },
              { title: "Tyre Replacement", desc: "Wide range of premium, mid-range and budget tyres available.", icon: Car, link: "/roadside-tyre-replacement" },
              { title: "Puncture Repair", desc: "BSAU159 standard repairs to get you moving safely again.", icon: Wrench, link: "/puncture-repair" },
              { title: "Locking Nut Removal", desc: "Lost your key? Safe removal without damaging your alloys.", icon: ShieldCheck, link: "/locking-wheel-nut-removal" },
              { title: "24/7 Availability", desc: "Day or night, rain or shine. We are always ready to help.", icon: Clock, link: "/247-mobile-tyre-service" }
            ].map((service, idx) => (
              <Link key={idx} href={service.link}>
                <div className="group p-8 bg-[#F5F5F5] rounded-2xl transition-all hover:bg-[#0A1F44] hover:text-white hover:-translate-y-2 cursor-pointer h-full border border-transparent hover:border-[#FFD700]/30 shadow-sm hover:shadow-xl">
                  <service.icon className="w-12 h-12 text-[#0A1F44] group-hover:text-[#FFD700] mb-6 transition-colors" />
                  <h3 className="text-xl font-bold font-display mb-3 text-[#0A1F44] group-hover:text-white">{service.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-300 mb-6">{service.desc}</p>
                  <div className="flex items-center text-sm font-bold text-[#DC2626] group-hover:text-[#FFD700] mt-auto">
                    Learn more <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-black font-display text-[#0A1F44] mb-6">Don't Let a Flat Tyre Ruin Your Day</h2>
              <p className="text-lg text-gray-600 mb-8">We know how stressful a breakdown can be. That's why we've built our service to be as fast, transparent, and hassle-free as possible.</p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "No hidden fees or surprise charges",
                  "Average arrival time of 30-60 minutes",
                  "Expert technicians with professional equipment",
                  "We cover Sheffield, Chesterfield, Rotherham & Nottingham"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium text-[#0A1F44]">
                    <div className="bg-[#FFD700] rounded-full p-1"><CheckCircle2 className="w-5 h-5 text-[#0A1F44]" /></div>
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/about" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0A1F44] text-white font-bold rounded-xl hover:bg-[#0A1F44]/90 transition-colors">
                More About Us <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="lg:w-1/2 w-full relative">
              <div className="absolute inset-0 bg-[#FFD700] rounded-3xl rotate-3 scale-105 z-0"></div>
              <div className="bg-white p-8 rounded-3xl relative z-10 shadow-xl border border-gray-100">
                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
                  <div className="w-16 h-16 bg-[#F5F5F5] rounded-full flex items-center justify-center">
                    <Star className="w-8 h-8 text-[#FFD700] fill-current" />
                  </div>
                  <div>
                    <div className="text-3xl font-black font-display text-[#0A1F44]">5.0 Rating</div>
                    <div className="text-gray-500 font-medium">Based on 200+ Reviews</div>
                  </div>
                </div>
                <blockquote className="text-xl font-medium text-gray-800 italic mb-6">
                  "Absolutely brilliant service. Blew a tyre on the M1 at 10pm. They arrived in 40 minutes, replaced the tyre on the hard shoulder safely, and got me home. Highly recommended."
                </blockquote>
                <div className="font-bold text-[#0A1F44]">- James S., Sheffield</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-20 bg-[#0A1F44] text-white">
        <div className="container px-4 mx-auto text-center">
          <MapPin className="w-12 h-12 text-[#FFD700] mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-black font-display mb-6">Areas We Cover</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">Fast local response across South Yorkshire, Derbyshire and Nottinghamshire.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['Sheffield', 'Chesterfield', 'Rotherham', 'Nottingham'].map(area => (
              <Link key={area} href={`/mobile-tyre-fitting-${area.toLowerCase()}`}>
                <span className="px-6 py-3 bg-white/10 hover:bg-[#FFD700] hover:text-[#0A1F44] transition-all font-bold rounded-full cursor-pointer inline-block">
                  {area}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Rich Snippet Optimized */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black font-display text-[#0A1F44] mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about our 24/7 mobile tyre service.</p>
          </div>
          <div className="space-y-4">
            {HOME_FAQS.map((f, i) => (
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

    </Layout>
  );
}
