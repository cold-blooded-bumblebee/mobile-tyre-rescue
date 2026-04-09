import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Wrench, ChevronDown, MapPin, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE_DISPLAY = "07469 157852";
const PHONE_HREF = "https://wa.me/447469157852";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-[100dvh] flex flex-col font-sans bg-[#F5F5F5]">
      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#0A1F44] shadow-xl py-2" : "bg-[#0A1F44] py-4"}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center w-10 h-10 bg-[#FFD700] rounded-lg group-hover:scale-105 transition-transform">
              <Wrench className="w-6 h-6 text-[#0A1F44]" />
            </div>
            <div>
              <div className="text-xl font-black tracking-tight font-display leading-none text-[#FFD700]">TYRE RESCUE 247</div>
              <div className="text-xs font-bold tracking-widest text-white/80">MOBILE TYRE SERVICE</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="relative group">
              <button className="flex items-center gap-1 text-white/90 hover:text-white font-medium py-2">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-2 group-hover:translate-y-0">
                {[
                  { name: "Mobile Tyre Fitting", path: "/mobile-tyre-fitting" },
                  { name: "Emergency Tyre Repair", path: "/emergency-tyre-repair" },
                  { name: "Tyre Replacement", path: "/roadside-tyre-replacement" },
                  { name: "Puncture Repair", path: "/puncture-repair" },
                  { name: "Locking Wheel Nut Removal", path: "/locking-wheel-nut-removal" },
                  { name: "24/7 Mobile Service", path: "/247-mobile-tyre-service" },
                ].map((item) => (
                  <Link key={item.path} href={item.path} className="block px-4 py-2 text-[#0A1F44] hover:bg-gray-50 hover:text-primary font-medium">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 text-white/90 hover:text-white font-medium py-2">
                Areas We Cover <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-2 group-hover:translate-y-0">
                {[
                  { name: "Sheffield", path: "/mobile-tyre-fitting-sheffield" },
                  { name: "Chesterfield", path: "/mobile-tyre-fitting-chesterfield" },
                  { name: "Rotherham", path: "/mobile-tyre-fitting-rotherham" },
                  { name: "Nottingham", path: "/mobile-tyre-fitting-nottingham" },
                ].map((item) => (
                  <Link key={item.path} href={item.path} className="block px-4 py-2 text-[#0A1F44] hover:bg-gray-50 hover:text-primary font-medium">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/about" className="text-white/90 hover:text-white font-medium">About</Link>
            <Link href="/pricing" className="text-white/90 hover:text-white font-medium">Pricing</Link>
            <Link href="/contact" className="text-white/90 hover:text-white font-medium">Contact</Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href={PHONE_HREF} className="flex items-center gap-2 px-6 py-3 font-bold text-[#0A1F44] bg-[#FFD700] rounded-full hover:bg-white transition-all shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_20px_rgba(255,215,0,0.5)]">
              <Phone className="w-5 h-5 animate-pulse" />
              {PHONE_DISPLAY}
            </a>
          </div>

          <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A1F44] pt-24 pb-10 px-4 overflow-y-auto lg:hidden flex flex-col">
          <nav className="flex flex-col gap-6 text-xl font-bold text-white mb-10">
            <Link href="/">Home</Link>
            <div>
              <div className="text-white/60 text-sm font-bold tracking-wider mb-2 uppercase">Services</div>
              <div className="flex flex-col gap-3 pl-4 border-l-2 border-white/10">
                <Link href="/services">All Services</Link>
                <Link href="/mobile-tyre-fitting">Mobile Tyre Fitting</Link>
                <Link href="/emergency-tyre-repair">Emergency Repair</Link>
                <Link href="/roadside-tyre-replacement">Tyre Replacement</Link>
                <Link href="/puncture-repair">Puncture Repair</Link>
                <Link href="/locking-wheel-nut-removal">Locking Nut Removal</Link>
              </div>
            </div>
            <div>
              <div className="text-white/60 text-sm font-bold tracking-wider mb-2 uppercase">Locations</div>
              <div className="flex flex-col gap-3 pl-4 border-l-2 border-white/10">
                <Link href="/areas-we-cover">All Areas</Link>
                <Link href="/mobile-tyre-fitting-sheffield">Sheffield</Link>
                <Link href="/mobile-tyre-fitting-chesterfield">Chesterfield</Link>
                <Link href="/mobile-tyre-fitting-rotherham">Rotherham</Link>
                <Link href="/mobile-tyre-fitting-nottingham">Nottingham</Link>
              </div>
            </div>
            <Link href="/about">About Us</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/faqs">FAQs</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          
          <div className="mt-auto">
            <a href={PHONE_HREF} className="flex items-center justify-center gap-2 w-full py-4 text-xl font-bold text-[#0A1F44] bg-[#FFD700] rounded-xl mb-4">
              <Phone className="w-6 h-6" /> Call Now
            </a>
            <Link href="/book-a-service" className="flex items-center justify-center gap-2 w-full py-4 text-xl font-bold text-white bg-white/10 rounded-xl">
              Book Online
            </Link>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0A1F44] text-white pt-20 pb-24 md:pb-10 mt-auto border-t-[6px] border-[#FFD700]">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-16">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-6">
                <div className="flex items-center justify-center w-8 h-8 bg-[#FFD700] rounded-md">
                  <Wrench className="w-5 h-5 text-[#0A1F44]" />
                </div>
                <div className="text-xl font-black tracking-tight text-white font-display">TYRE RESCUE 247</div>
              </Link>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Your trusted 24/7 mobile tyre fitting and emergency repair service. We bring the garage to you, anywhere in our coverage area. Fast, professional, and reliable.
              </p>
              <div className="flex flex-col gap-3">
                <a href={PHONE_HREF} className="flex items-center gap-3 text-[#FFD700] hover:text-white transition-colors font-bold">
                  <Phone className="w-5 h-5" /> {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold font-display mb-6">Services</h4>
              <ul className="flex flex-col gap-3 text-gray-400">
                <li><Link href="/mobile-tyre-fitting" className="hover:text-[#FFD700] transition-colors">Mobile Tyre Fitting</Link></li>
                <li><Link href="/emergency-tyre-repair" className="hover:text-[#FFD700] transition-colors">Emergency Tyre Repair</Link></li>
                <li><Link href="/roadside-tyre-replacement" className="hover:text-[#FFD700] transition-colors">Roadside Replacement</Link></li>
                <li><Link href="/puncture-repair" className="hover:text-[#FFD700] transition-colors">Puncture Repair</Link></li>
                <li><Link href="/locking-wheel-nut-removal" className="hover:text-[#FFD700] transition-colors">Locking Nut Removal</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold font-display mb-6">Areas Covered</h4>
              <ul className="flex flex-col gap-3 text-gray-400">
                <li><Link href="/mobile-tyre-fitting-sheffield" className="hover:text-[#FFD700] transition-colors">Sheffield</Link></li>
                <li><Link href="/mobile-tyre-fitting-chesterfield" className="hover:text-[#FFD700] transition-colors">Chesterfield</Link></li>
                <li><Link href="/mobile-tyre-fitting-rotherham" className="hover:text-[#FFD700] transition-colors">Rotherham</Link></li>
                <li><Link href="/mobile-tyre-fitting-nottingham" className="hover:text-[#FFD700] transition-colors">Nottingham</Link></li>
                <li><Link href="/areas-we-cover" className="text-white hover:text-[#FFD700] transition-colors">View All Areas</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold font-display mb-6">Information</h4>
              <ul className="flex flex-col gap-3 text-gray-400">
                <li><Link href="/about" className="hover:text-[#FFD700] transition-colors">About Us</Link></li>
                <li><Link href="/pricing" className="hover:text-[#FFD700] transition-colors">Pricing</Link></li>
                <li><Link href="/faqs" className="hover:text-[#FFD700] transition-colors">FAQs</Link></li>
                <li><Link href="/contact" className="hover:text-[#FFD700] transition-colors">Contact</Link></li>
                <li><Link href="/blog" className="hover:text-[#FFD700] transition-colors">Blog</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <div>&copy; {new Date().getFullYear()} Mobile Tyre Rescue 247. All rights reserved.</div>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp CTA */}
      <a 
        href={PHONE_HREF} 
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer group"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.405-.881-.733-1.476-1.639-1.649-1.937-.173-.298-.019-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Mobile Fixed Call Button (visible only on mobile) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-white/90 backdrop-blur-md border-t border-gray-200 md:hidden pb-safe">
        <a 
          href={PHONE_HREF}
          className="flex items-center justify-center w-full gap-2 px-6 py-3.5 text-lg font-bold text-[#0A1F44] transition-transform bg-[#FFD700] rounded-xl active:scale-95 shadow-[0_0_15px_rgba(255,215,0,0.3)]"
        >
          <Phone className="w-6 h-6 animate-pulse" />
          Call Now: {PHONE_DISPLAY}
        </a>
      </div>

    </div>
  );
}
