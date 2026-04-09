import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Phone, Clock, ShieldCheck, Zap, Car, Wrench, CheckCircle2, AlertTriangle, Star, MapPin, ChevronRight } from "lucide-react";
import { Link } from "wouter";

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
        title="24/7 Mobile Tyre Fitting & Emergency Repair" 
        description="Mobile Tyre Rescue 247 provides fast emergency tyre repair, puncture repair, and tyre fitting across Sheffield, Chesterfield, Rotherham, and Nottingham."
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Mobile Tyre Rescue 247",
          "image": "https://tyrerescue247.co.uk/logo.png",
          "url": "https://tyrerescue247.co.uk",
          "telephone": "07469157852",
          "areaServed": ["Sheffield", "Chesterfield", "Rotherham", "Nottingham"],
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          }
        }}
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
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">Fast local response across South Yorkshire and Nottinghamshire.</p>
          
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

    </Layout>
  );
}
