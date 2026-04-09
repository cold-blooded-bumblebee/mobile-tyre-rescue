import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Phone, CheckCircle2, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

const PHONE_DISPLAY = "07469 157852";
const PHONE_HREF = "https://wa.me/447469157852";

export default function ServiceLockingNut() {
  return (
    <Layout>
      <SEOHead 
        title="Locking Wheel Nut Removal Service" 
        description="Lost or broken locking wheel nut key? We safely remove locking wheel nuts without damaging your alloy wheels."
      />
      
      <div className="bg-[#0A1F44] pt-12 pb-24 text-white">
        <div className="container px-4 mx-auto">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Locking Nut Removal" }]} />
          <div className="max-w-3xl mt-8">
            <h1 className="text-4xl md:text-6xl font-black font-display mb-6">Locking Wheel Nut Removal</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Lost your locking wheel nut key? Rounded off the nut? We use specialist tools to safely remove difficult locking nuts without damaging your expensive alloy wheels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={PHONE_HREF} className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-[#FFD700] text-[#0A1F44] font-bold rounded-xl hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/20">
                <Phone className="w-5 h-5" /> Call {PHONE_DISPLAY}
              </a>
              <Link href="/book-a-service" className="inline-flex justify-center items-center px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors">
                Book Online
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black font-display text-[#0A1F44] mb-6">Safe, Damage-Free Removal</h2>
              <div className="prose prose-lg text-gray-600 mb-8">
                <p>
                  Locking wheel nuts are great for preventing theft, but a nightmare when you lose the key or a garage over-tightens them. Many drivers attempt to force them off, resulting in severe damage to the alloy wheel that costs hundreds to repair.
                </p>
                <p>
                  Our mobile technicians carry advanced extraction tools that grip and remove stubborn, damaged, or lost-key locking nuts safely and efficiently.
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  "100% safe for your alloy wheels",
                  "Works on rounded or damaged nuts",
                  "No need for drilling or welding",
                  "We can fit standard replacement nuts immediately",
                  "High success rate on all vehicle makes"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium text-[#0A1F44]">
                    <div className="bg-[#FFD700] rounded-full p-1"><CheckCircle2 className="w-5 h-5 text-[#0A1F44]" /></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F5F5F5] p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
              <ShieldCheck className="w-16 h-16 text-[#0A1F44] mx-auto mb-4" />
              <h3 className="text-2xl font-bold font-display text-[#0A1F44] mb-2">Don't Force It</h3>
              <p className="text-gray-600">
                If the locking nut isn't budging, stop. Applying extreme force usually snaps the locking key or strips the nut entirely, making removal much harder. Call the experts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
