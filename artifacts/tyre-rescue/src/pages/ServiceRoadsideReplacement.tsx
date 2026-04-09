import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Phone, CheckCircle2, Car } from "lucide-react";
import { Link } from "wouter";

const PHONE_DISPLAY = "07469 157852";
const PHONE_HREF = "https://wa.me/447469157852";

export default function ServiceRoadsideReplacement() {
  return (
    <Layout>
      <SEOHead 
        title="Roadside Tyre Replacement" 
        description="Fast roadside tyre replacement. We carry all major tyre sizes and brands. Replaced on the spot 24/7."
      />
      
      <div className="bg-[#0A1F44] pt-12 pb-24 text-white">
        <div className="container px-4 mx-auto">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Roadside Tyre Replacement" }]} />
          <div className="max-w-3xl mt-8">
            <h1 className="text-4xl md:text-6xl font-black font-display mb-6">Roadside Tyre Replacement</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Tyre damaged beyond repair? We carry a vast stock of replacement tyres for all vehicle types. Fitted and balanced right where you are.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={PHONE_HREF} className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-[#FFD700] text-[#0A1F44] font-bold rounded-xl hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/20">
                <Phone className="w-5 h-5" /> Call {PHONE_DISPLAY}
              </a>
              <Link href="/book-a-service" className="inline-flex justify-center items-center px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors">
                Book Non-Emergency
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black font-display text-[#0A1F44] mb-6">Extensive Stock Ready to Go</h2>
              <div className="prose prose-lg text-gray-600 mb-8">
                <p>
                  When a blowout shreds your tyre, a simple repair isn't an option. You need a complete replacement to continue your journey safely. We stock hundreds of tyres across all common sizes at our depots, allowing our vans to load up exactly what you need before dispatch.
                </p>
                <p>
                  Whether you drive a small hatchback, a heavy SUV, or a commercial van, we have options to suit your budget and requirements.
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  "Premium brands (Michelin, Goodyear, Pirelli)",
                  "Mid-range reliable options",
                  "Budget-friendly alternatives",
                  "Run-flat tyres available",
                  "Commercial van and SUV tyres"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium text-[#0A1F44]">
                    <div className="bg-[#FFD700] rounded-full p-1"><CheckCircle2 className="w-5 h-5 text-[#0A1F44]" /></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-6">
              <div className="bg-[#F5F5F5] p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
                <Car className="w-16 h-16 text-[#DC2626] mx-auto mb-4" />
                <h3 className="text-2xl font-bold font-display text-[#0A1F44] mb-2">Find Your Tyre Size</h3>
                <p className="text-gray-600 mb-4">
                  Check the sidewall of your tyre for a sequence like <strong>205/55 R16 91V</strong>. Tell us this number when you call so we can bring the exact match.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
