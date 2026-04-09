import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { 
  Phone, 
  MapPin, 
  Wrench, 
  Clock, 
  ShieldCheck, 
  Zap, 
  Star,
  CheckCircle2,
  AlertTriangle,
  Menu,
  ChevronRight,
  Settings,
  Car
} from "lucide-react";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

const PHONE_DISPLAY = "07469 157852";
const PHONE_HREF = "https://wa.me/447469157852";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function LandingPage() {
  useEffect(() => {
    document.title = "24/7 Mobile Tyre Repair Near Me | Emergency Tyre Fitting | Tyre Rescue 24/7";
    
    // Add meta tags
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "Need emergency tyre repair near you? Tyre Rescue 24/7 provides mobile tyre repair, puncture repair, tyre replacement and fitting across the UK. Call now — we come to you!";
    document.head.appendChild(metaDescription);

    const ogTitle = document.createElement("meta");
    ogTitle.property = "og:title";
    ogTitle.content = "24/7 Mobile Tyre Repair Near Me | Emergency Tyre Fitting";
    document.head.appendChild(ogTitle);

    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(ogTitle);
    };
  }, []);

  return (
    <div className="min-h-[100dvh] w-full bg-[#F5F5F5] font-sans selection:bg-secondary selection:text-primary">
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/80 backdrop-blur-md border-t border-gray-200 md:hidden">
        <a 
          href={PHONE_HREF}
          className="flex items-center justify-center w-full gap-2 px-6 py-4 text-lg font-bold text-[#0A1F44] transition-transform bg-[#FFD700] rounded-xl hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(255,215,0,0.4)]"
        >
          <Phone className="w-6 h-6 animate-pulse" />
          Call Now: {PHONE_DISPLAY}
        </a>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#0A1F44] text-white shadow-xl">
        <div className="container flex items-center justify-between h-20 px-4 mx-auto">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 bg-[#FFD700] rounded-lg">
              <Wrench className="w-6 h-6 text-[#0A1F44]" />
            </div>
            <div>
              <div className="text-xl font-black tracking-tight font-display leading-none text-[#FFD700]">TYRE RESCUE</div>
              <div className="text-xs font-bold tracking-widest text-white/80">24/7 EMERGENCY</div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex gap-6 text-sm font-medium text-white/80">
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
              <a href="#coverage" className="hover:text-white transition-colors">Coverage</a>
            </nav>
            <a 
              href={PHONE_HREF}
              className="flex items-center gap-2 px-6 py-3 font-bold text-[#0A1F44] transition-all bg-[#FFD700] rounded-full hover:bg-white hover:text-[#0A1F44] hover:shadow-lg"
            >
              <Phone className="w-5 h-5" />
              {PHONE_DISPLAY}
            </a>
          </div>
          
          <a href={PHONE_HREF} className="md:hidden flex items-center justify-center w-12 h-12 bg-[#FFD700] rounded-full text-[#0A1F44]">
            <Phone className="w-6 h-6" />
          </a>
        </div>
      </header>

      <main className="pt-20 pb-24 md:pb-0">
        {/* Hero Section */}
        <section className="relative flex items-center min-h-[85vh] bg-[#0A1F44] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/hero-bg.png" 
              alt="Emergency roadside mobile tyre repair at night" 
              className="object-cover w-full h-full opacity-40 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-[#0A1F44]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-transparent to-transparent" />
          </div>
          
          <div className="container relative z-10 px-4 mx-auto py-12">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-3xl"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-bold text-white bg-[#DC2626] rounded-full">
                <AlertTriangle className="w-4 h-4" />
                STUCK ON THE ROAD? WE'RE ON OUR WAY
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="mb-6 text-5xl font-black text-white md:text-7xl font-display leading-[1.1]">
                24/7 Mobile <span className="text-[#FFD700]">Tyre Repair</span> Near You
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="mb-10 text-xl text-gray-300 md:text-2xl max-w-2xl font-medium">
                Emergency puncture repair, rapid tyre replacement, and mobile tyre fitting across the UK. 
                Don't panic — we arrive fast and fix it on the spot.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a 
                  href={PHONE_HREF}
                  className="flex items-center justify-center gap-3 px-8 py-5 text-xl font-bold text-[#0A1F44] transition-all bg-[#FFD700] rounded-xl hover:bg-yellow-400 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,215,0,0.3)]"
                >
                  <Phone className="w-6 h-6 animate-pulse" />
                  Call Now: {PHONE_DISPLAY}
                </a>
                <div className="flex items-center justify-center gap-2 text-sm font-semibold text-white/80">
                  <Clock className="w-5 h-5 text-[#FFD700]" />
                  Average Response: 30-60 Mins
                </div>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-6 mt-12 text-sm font-medium text-gray-400">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#FFD700]" /> Mobile Tyre Fitting</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#FFD700]" /> Puncture Repairs</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#FFD700]" /> Locking Nut Removal</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#FFD700]" /> Tyre Replacement</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#FFD700]" /> Wheel Balancing</div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-[#F5F5F5]">
          <div className="container px-4 mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-black text-[#0A1F44] md:text-5xl font-display mb-6">
                Comprehensive Tyre Services
              </h2>
              <div className="w-24 h-1.5 bg-[#FFD700] mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl">
                We bring the tyre shop to you. Fully equipped vans capable of handling any tyre emergency on the roadside, at home, or at work.
              </p>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {[
                { title: "Mobile Tyre Fitting", desc: "We supply and fit new tyres wherever you are parked. Wide range of budget, mid-range, and premium brands available.", icon: Settings },
                { title: "Emergency Puncture Repair", desc: "Got a flat? If it's safe to repair, we'll fix the puncture to British Standard BSAU159 and get you moving immediately.", icon: Wrench },
                { title: "Tyre Replacement", desc: "Blowout on the motorway? We carry replacement tyres for cars, vans, and SUVs to replace damaged beyond repair tyres.", icon: Car },
                { title: "Locking Wheel Nut Removal", desc: "Lost your key? We use specialist tools to safely remove locking wheel nuts without damaging your alloy wheels.", icon: ShieldCheck },
                { title: "Wheel Balancing", desc: "All our vans are equipped with electronic wheel balancers ensuring a smooth, vibration-free ride after fitting.", icon: Zap },
                { title: "24/7 Availability", desc: "Day, night, weekends, or bank holidays. We are always on standby ready to dispatch a van to your exact location.", icon: Clock }
              ].map((service, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="p-8 transition-transform bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 hover:-translate-y-1">
                  <service.icon className="w-12 h-12 text-[#FFD700] mb-6 bg-[#0A1F44] p-2.5 rounded-xl" />
                  <h3 className="mb-3 text-xl font-bold text-[#0A1F44] font-display">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-black text-[#0A1F44] md:text-5xl font-display mb-6">
                Fast, Simple, Stress-Free
              </h2>
              <p className="text-lg text-gray-600">
                Getting back on the road shouldn't be complicated. Here is how we rescue you.
              </p>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto relative"
            >
              {/* Connection lines for desktop */}
              <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gray-200 z-0 border-t-2 border-dashed border-gray-300"></div>

              {[
                { step: "01", title: "Call Us", desc: "Speak directly to an expert. Give us your location and tyre size.", icon: Phone },
                { step: "02", title: "We Arrive", desc: "Our fully equipped mobile fitting van arrives at your location fast.", icon: Zap },
                { step: "03", title: "Fixed & Go", desc: "Your tyre is repaired or replaced while you wait safely.", icon: ShieldCheck }
              ].map((item, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="relative z-10 flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-xl border border-gray-100">
                  <div className="w-20 h-20 bg-[#0A1F44] rounded-2xl flex items-center justify-center mb-6 text-[#FFD700] shadow-lg rotate-3">
                    <item.icon className="w-10 h-10 -rotate-3" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center text-xl font-black text-[#0A1F44] shadow-md border-4 border-white">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A1F44] mb-3 font-display">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-[#0A1F44] text-white">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col gap-12 lg:flex-row items-center">
              <div className="lg:w-1/2">
                <motion.h2 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl font-black md:text-5xl font-display mb-6"
                >
                  Why Drivers Trust <span className="text-[#FFD700]">Tyre Rescue</span>
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-lg text-gray-300 mb-8"
                >
                  We understand the stress of a breakdown. Our entire operation is built around getting to you fast and sorting the problem efficiently, without hidden fees.
                </motion.p>
                
                <div className="space-y-6">
                  {[
                    "Rapid Response Times across the UK",
                    "Fully Certified & Insured Technicians",
                    "Transparent Pricing - No Hidden Callout Fees",
                    "All Tyre Brands & Sizes Available",
                    "Commercial Vans & Domestic Cars"
                  ].map((point, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex-shrink-0 mt-1 bg-[#FFD700] rounded-full p-1 text-[#0A1F44]">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <p className="text-lg font-semibold">{point}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-12"
                >
                  <a 
                    href={PHONE_HREF}
                    className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-white transition-all bg-[#DC2626] rounded-xl hover:bg-red-700"
                  >
                    Fix My Tyre Now <ChevronRight className="w-5 h-5" />
                  </a>
                </motion.div>
              </div>
              
              <div className="lg:w-1/2 w-full relative">
                <div className="absolute inset-0 bg-[#FFD700] rounded-3xl translate-x-4 translate-y-4 opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1600862089201-1e967a5840bc?q=80&w=800&auto=format&fit=crop" 
                  alt="Tyre repair expert" 
                  className="relative z-10 w-full h-auto rounded-3xl shadow-2xl object-cover aspect-[4/3] grayscale-[20%]"
                />
                
                <div className="absolute -bottom-8 -left-8 z-20 bg-white text-[#0A1F44] p-6 rounded-2xl shadow-xl flex items-center gap-4">
                  <div className="bg-[#FFD700] p-3 rounded-full">
                    <Star className="w-8 h-8 fill-current" />
                  </div>
                  <div>
                    <div className="text-3xl font-black font-display">4.9/5</div>
                    <div className="font-bold text-gray-500">Customer Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Section */}
        <section id="coverage" className="py-20 bg-white">
          <div className="container px-4 mx-auto text-center max-w-4xl">
            <MapPin className="w-12 h-12 text-[#DC2626] mx-auto mb-6" />
            <h2 className="text-3xl font-black text-[#0A1F44] md:text-5xl font-display mb-6">
              National Coverage, Local Response
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              We have mobile fitting units stationed across major UK transport networks, ensuring rapid response to your location.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {["Sheffield", "Chesterfield", "Rotherham", "Nottingham"].map((city) => (
                <div key={city} className="px-6 py-3 font-bold text-[#0A1F44] bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                  {city}
                </div>
              ))}
              <div className="px-6 py-3 font-bold text-white bg-[#0A1F44] rounded-full">
                + Surrounding Areas
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-[#F5F5F5]">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black text-[#0A1F44] md:text-5xl font-display mb-6">
                Lifesavers on the Road
              </h2>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { name: "Sarah M.", location: "M1 Motorway", quote: "Got a blowout at 2am in the pouring rain. They arrived in 40 minutes, replaced the tyre, and had me back on my way. Absolute lifesavers." },
                { name: "David T.", location: "London", quote: "Woke up to a completely flat tyre on my driveway and needed to get to work. The fitter was polite, fast, and the price was very reasonable." },
                { name: "Emma L.", location: "Birmingham", quote: "Hit a pothole and damaged my alloy and tyre. They came out, assessed the damage, fitted a new tyre and balanced it perfectly." }
              ].map((review, idx) => (
                <div key={idx} className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex text-[#FFD700] mb-4">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="mb-6 text-gray-600 italic">"{review.quote}"</p>
                  <div className="font-bold text-[#0A1F44] font-display">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.location}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content Block */}
        <section className="py-16 bg-white border-t border-gray-200">
          <div className="container px-4 mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-[#0A1F44] mb-4 font-display">Trusted Emergency Mobile Tyre Repair Near You</h2>
            <div className="prose prose-gray max-w-none text-gray-600 text-sm leading-relaxed">
              <p>
                When you're searching for "mobile tyre repair near me" or require immediate emergency puncture repair, Tyre Rescue 24/7 is your premier choice. A flat tyre on the motorway or waking up to a damaged wheel at home can completely derail your day. That's why our mobile tyre replacement units are fully equipped to handle everything from standard roadside tyre assistance to complex mobile tyre fitting at home. 
              </p>
              <p>
                We specialize in 24/7 flat tyre repair, offering a seamless service that eliminates the need for expensive towing or dangerous spare-tyre changes on busy roads. Whether you need a quick puncture patch, locking wheel nut removal, or a full set of new tyres balanced and fitted, our expert technicians bring the garage directly to your vehicle, anywhere in the UK.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0A1F44] text-gray-300 pt-16 pb-32 md:pb-8 border-t-8 border-[#FFD700]">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 md:grid-cols-3 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center justify-center w-8 h-8 bg-[#FFD700] rounded-md">
                  <Wrench className="w-5 h-5 text-[#0A1F44]" />
                </div>
                <div className="text-xl font-black tracking-tight text-white font-display">TYRE RESCUE</div>
              </div>
              <p className="mb-6 text-sm">
                Emergency Tyre Repair 24/7. Fast, reliable, and professional mobile tyre fitting service across the United Kingdom.
              </p>
              <div className="flex items-center gap-3 text-[#FFD700] font-bold text-xl">
                <Phone className="w-5 h-5" />
                <a href={PHONE_HREF} className="hover:underline">{PHONE_DISPLAY}</a>
              </div>
            </div>
            
            <div>
              <h4 className="mb-6 text-lg font-bold text-white font-display">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#services" className="hover:text-[#FFD700] transition-colors">Mobile Tyre Fitting</a></li>
                <li><a href="#services" className="hover:text-[#FFD700] transition-colors">Emergency Puncture Repair</a></li>
                <li><a href="#services" className="hover:text-[#FFD700] transition-colors">Tyre Replacement</a></li>
                <li><a href="#services" className="hover:text-[#FFD700] transition-colors">Locking Wheel Nut Removal</a></li>
                <li><a href="#services" className="hover:text-[#FFD700] transition-colors">Wheel Balancing</a></li>
                <li><a href="#how-it-works" className="hover:text-[#FFD700] transition-colors">How It Works</a></li>
                <li><a href="#coverage" className="hover:text-[#FFD700] transition-colors">Areas Covered</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-6 text-lg font-bold text-white font-display">Emergency Contact</h4>
              <p className="mb-4 text-sm">Do not attempt to change a tyre on the hard shoulder. Call us immediately and stay in a safe place.</p>
              <a 
                href={PHONE_HREF}
                className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 font-bold text-center text-white bg-[#DC2626] rounded-lg hover:bg-red-700 transition-colors"
              >
                REQUEST ASSISTANCE NOW
              </a>
            </div>
          </div>
          
          <div className="pt-8 text-sm text-center border-t border-white/10">
            &copy; {new Date().getFullYear()} Tyre Rescue 24/7. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
