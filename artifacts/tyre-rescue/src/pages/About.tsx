import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShieldCheck, Users, Target, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <SEOHead 
        title="About Mobile Tyre Rescue 247" 
        description="Learn about Mobile Tyre Rescue 247. We are a trusted mobile tyre fitting and emergency repair service covering Sheffield, Chesterfield, Rotherham, and Nottingham."
      />
      
      <div className="bg-[#0A1F44] pt-12 pb-24 text-white">
        <div className="container px-4 mx-auto">
          <Breadcrumbs items={[{ label: "About Us" }]} />
          <div className="max-w-3xl mt-8">
            <h1 className="text-4xl md:text-6xl font-black font-display mb-6">Keeping You Safe On The Road</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Mobile Tyre Rescue 247 was founded with a simple mission: to provide the fastest, most reliable mobile tyre fitting and emergency repair service across South Yorkshire and Nottinghamshire.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black font-display text-[#0A1F44] mb-6">Our Story</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  What started as a single van operating in Sheffield has grown into a fleet of fully-equipped mobile tyre fitting units serving four major cities and their surrounding areas. We saw a gap in the market for a truly 24/7 service that prioritises customer safety and transparent pricing over hidden fees.
                </p>
                <p>
                  Today, we help hundreds of drivers every month — from commuters stranded on the M1 with a blowout, to busy professionals who prefer the convenience of having new tyres fitted at their workplace.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#F5F5F5] p-6 rounded-2xl text-center">
                <div className="text-4xl font-black text-[#DC2626] mb-2 font-display">24/7</div>
                <div className="font-bold text-[#0A1F44]">Availability</div>
              </div>
              <div className="bg-[#F5F5F5] p-6 rounded-2xl text-center">
                <div className="text-4xl font-black text-[#DC2626] mb-2 font-display">30m</div>
                <div className="font-bold text-[#0A1F44]">Avg Response</div>
              </div>
              <div className="bg-[#F5F5F5] p-6 rounded-2xl text-center">
                <div className="text-4xl font-black text-[#DC2626] mb-2 font-display">5k+</div>
                <div className="font-bold text-[#0A1F44]">Tyres Fitted</div>
              </div>
              <div className="bg-[#F5F5F5] p-6 rounded-2xl text-center">
                <div className="text-4xl font-black text-[#DC2626] mb-2 font-display">4</div>
                <div className="font-bold text-[#0A1F44]">Cities Covered</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-[#F5F5F5]">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black font-display text-[#0A1F44] mb-6">Why Choose Us?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <Target className="w-12 h-12 text-[#FFD700] mb-6" />
              <h3 className="text-xl font-bold font-display text-[#0A1F44] mb-4">Speed & Efficiency</h3>
              <p className="text-gray-600">Our vans are strategically located to ensure we reach you as quickly as possible, usually within 30-60 minutes.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <Users className="w-12 h-12 text-[#FFD700] mb-6" />
              <h3 className="text-xl font-bold font-display text-[#0A1F44] mb-4">Expert Technicians</h3>
              <p className="text-gray-600">Every fitter is fully trained, certified, and experienced in roadside safety and complex tyre replacements.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <ShieldCheck className="w-12 h-12 text-[#FFD700] mb-6" />
              <h3 className="text-xl font-bold font-display text-[#0A1F44] mb-4">Transparent Pricing</h3>
              <p className="text-gray-600">We tell you the exact cost before we dispatch a van. No hidden callout fees or unexpected charges.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
