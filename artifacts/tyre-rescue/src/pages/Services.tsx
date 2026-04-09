import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Zap, AlertTriangle, Car, Wrench, ShieldCheck, Clock, ChevronRight } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const services = [
    { title: "Mobile Tyre Fitting", desc: "New tyres supplied and fitted at your home, work, or roadside.", icon: Zap, link: "/mobile-tyre-fitting" },
    { title: "Emergency Repair", desc: "Stuck on the side of the road? We'll dispatch a van immediately.", icon: AlertTriangle, link: "/emergency-tyre-repair" },
    { title: "Tyre Replacement", desc: "Wide range of premium, mid-range and budget tyres available.", icon: Car, link: "/roadside-tyre-replacement" },
    { title: "Puncture Repair", desc: "BSAU159 standard repairs to get you moving safely again.", icon: Wrench, link: "/puncture-repair" },
    { title: "Locking Nut Removal", desc: "Lost your key? Safe removal without damaging your alloys.", icon: ShieldCheck, link: "/locking-wheel-nut-removal" },
    { title: "24/7 Availability", desc: "Day or night, rain or shine. We are always ready to help.", icon: Clock, link: "/247-mobile-tyre-service" }
  ];

  return (
    <Layout>
      <SEOHead 
        title="Our Mobile Tyre Services" 
        description="Comprehensive mobile tyre fitting, emergency tyre repair, puncture repair, and locking wheel nut removal services across Sheffield and Nottingham."
      />
      
      <div className="bg-[#0A1F44] pt-12 pb-24 text-white">
        <div className="container px-4 mx-auto">
          <Breadcrumbs items={[{ label: "Services" }]} />
          <div className="max-w-3xl mt-8">
            <h1 className="text-4xl md:text-6xl font-black font-display mb-6">Mobile Tyre Services</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From emergency roadside rescues to convenient at-home tyre fitting. We bring the tyre shop to you, fully equipped to handle any situation 24/7.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-[#F5F5F5]">
        <div className="container px-4 mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <Link key={idx} href={service.link}>
                <div className="group p-8 bg-white rounded-2xl transition-all hover:bg-[#0A1F44] hover:text-white hover:-translate-y-2 cursor-pointer h-full border border-gray-100 hover:border-[#FFD700]/30 shadow-sm hover:shadow-xl flex flex-col">
                  <service.icon className="w-12 h-12 text-[#0A1F44] group-hover:text-[#FFD700] mb-6 transition-colors" />
                  <h3 className="text-xl font-bold font-display mb-3 text-[#0A1F44] group-hover:text-white">{service.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-300 mb-6 flex-grow">{service.desc}</p>
                  <div className="flex items-center text-sm font-bold text-[#DC2626] group-hover:text-[#FFD700] mt-auto">
                    Learn more <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
