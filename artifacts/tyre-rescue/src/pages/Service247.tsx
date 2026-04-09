import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Phone, CheckCircle2, Clock } from "lucide-react";
import { Link } from "wouter";

const PHONE_DISPLAY = "07469 157852";
const PHONE_HREF = "https://wa.me/447469157852";

export default function Service247() {
  return (
    <Layout>
      <SEOHead 
        title="24/7 Mobile Tyre Service" 
        description="Round-the-clock mobile tyre fitting and repair. We operate 24 hours a day, 365 days a year across South Yorkshire and Nottinghamshire."
      />
      
      <div className="bg-[#0A1F44] pt-12 pb-24 text-white">
        <div className="container px-4 mx-auto">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "24/7 Service" }]} />
          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-bold text-white bg-[#DC2626] rounded-full">
              <Clock className="w-4 h-4" /> ALWAYS OPEN
            </div>
            <h1 className="text-4xl md:text-6xl font-black font-display mb-6">24/7 Mobile Tyre Service</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Punctures don't stick to business hours. Neither do we. Day, night, weekends, or bank holidays — we are always ready to dispatch a van to your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={PHONE_HREF} className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-[#FFD700] text-[#0A1F44] font-bold rounded-xl hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/20">
                <Phone className="w-5 h-5" /> Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black font-display text-[#0A1F44] mb-6">Around The Clock Reliability</h2>
              <div className="prose prose-lg text-gray-600 mb-8">
                <p>
                  Most traditional garages close at 5 PM. But a significant number of tyre emergencies happen during evening commutes, night shifts, or early morning runs. Our 24/7 operation ensures you're never left stranded.
                </p>
                <p>
                  Our night technicians are specially trained for low-light roadside conditions and carry powerful floodlights to ensure the work area is safe and clearly visible.
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  "Operating 24 hours a day, 365 days a year",
                  "No 'closed' periods or unreachable call centres",
                  "Night-shift specialists equipped with safety lighting",
                  "Fast dispatch regardless of the hour",
                  "Bank holidays fully covered"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium text-[#0A1F44]">
                    <div className="bg-[#FFD700] rounded-full p-1"><CheckCircle2 className="w-5 h-5 text-[#0A1F44]" /></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-6">
              <div className="bg-[#0A1F44] text-white p-8 rounded-2xl shadow-sm text-center">
                <h3 className="text-2xl font-bold font-display text-[#FFD700] mb-4">Night-Time Callout Procedure</h3>
                <p className="text-gray-300 mb-6 text-sm">
                  If you break down at night, your safety is paramount. Keep your hazard lights on and wait in a safe place. Our dispatcher will stay on the phone with you if needed, and our van will arrive with high-visibility markings and flashing beacons to secure the area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
