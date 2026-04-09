import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MapPin, ChevronRight, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Areas() {
  const areas = [
    { name: "Sheffield", path: "/mobile-tyre-fitting-sheffield", desc: "Covering all S postcodes, city centre, suburbs, and M1 corridor." },
    { name: "Chesterfield", path: "/mobile-tyre-fitting-chesterfield", desc: "Serving Chesterfield town, surrounding villages, and the A61." },
    { name: "Rotherham", path: "/mobile-tyre-fitting-rotherham", desc: "Fast response for Rotherham, Wickersley, and M18 links." },
    { name: "Nottingham", path: "/mobile-tyre-fitting-nottingham", desc: "Covering Nottingham city, Beeston, West Bridgford, and M1 South." },
  ];

  return (
    <Layout>
      <SEOHead 
        title="Areas We Cover | Mobile Tyre Fitting" 
        description="Mobile Tyre Rescue 247 covers Sheffield, Chesterfield, Rotherham, and Nottingham. Fast 30-60 minute response times for emergency tyre repair."
      />
      
      <div className="bg-[#0A1F44] pt-12 pb-24 text-white">
        <div className="container px-4 mx-auto">
          <Breadcrumbs items={[{ label: "Areas We Cover" }]} />
          <div className="max-w-3xl mt-8">
            <h1 className="text-4xl md:text-6xl font-black font-display mb-6">Areas We Cover</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              We have fully equipped mobile fitting units stationed across South Yorkshire and Nottinghamshire, guaranteeing a fast response when you need us most.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-[#F5F5F5]">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {areas.map((area, idx) => (
              <Link key={idx} href={area.path}>
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 group cursor-pointer h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#FFD700]/20 rounded-full flex items-center justify-center group-hover:bg-[#FFD700] transition-colors">
                      <MapPin className="w-6 h-6 text-[#0A1F44]" />
                    </div>
                    <h2 className="text-2xl font-bold font-display text-[#0A1F44]">{area.name}</h2>
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">{area.desc}</p>
                  <div className="flex items-center text-[#DC2626] font-bold group-hover:text-[#0A1F44] mt-auto">
                    View Location Details <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-[#0A1F44] text-white p-12 rounded-3xl text-center">
            <Zap className="w-12 h-12 text-[#FFD700] mx-auto mb-6" />
            <h3 className="text-3xl font-black font-display mb-4">Are you just outside these areas?</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              We often travel further for emergencies on major motorways (M1, M18, A1). Give us a call and we'll let you know immediately if we can reach you.
            </p>
            <a href="https://wa.me/447469157852" className="inline-block px-8 py-4 bg-[#FFD700] text-[#0A1F44] font-bold rounded-xl hover:bg-white transition-colors">
              Call 07469 157852
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
