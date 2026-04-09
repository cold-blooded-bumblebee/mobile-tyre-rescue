import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Phone, CheckCircle2, ShieldCheck, Clock } from "lucide-react";
import { Link } from "wouter";

const PHONE_DISPLAY = "07469 157852";
const PHONE_HREF = "https://wa.me/447469157852";

export default function ServiceMobileTyreFitting() {
  return (
    <Layout>
      <SEOHead 
        title="Mobile Tyre Fitting Service" 
        description="Professional mobile tyre fitting service. We come to your home, workplace, or roadside. New tyres supplied and fitted 24/7."
      />
      
      <div className="bg-[#0A1F44] pt-12 pb-24 text-white">
        <div className="container px-4 mx-auto">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Mobile Tyre Fitting" }]} />
          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-bold text-[#0A1F44] bg-[#FFD700] rounded-full">
              WE COME TO YOU
            </div>
            <h1 className="text-4xl md:text-6xl font-black font-display mb-6">Mobile Tyre Fitting Service</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Why waste your weekend sitting in a waiting room? Our fully equipped mobile tyre fitting vans bring the garage directly to your home, workplace, or anywhere you need us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={PHONE_HREF} className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-[#DC2626] text-white font-bold rounded-xl hover:bg-red-700 transition-colors">
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
              <h2 className="text-3xl font-black font-display text-[#0A1F44] mb-6">The Smart Way to Change Tyres</h2>
              <div className="prose prose-lg text-gray-600 mb-8">
                <p>
                  Our mobile tyre fitting service is designed for maximum convenience without compromising on quality. We supply and fit a huge range of tyres — from budget options to premium brands like Michelin, Pirelli, and Goodyear.
                </p>
                <p>
                  Every van in our fleet is equipped with state-of-the-art fitting and balancing machines. We handle everything on-site, including safely disposing of your old tyres.
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  "Fitted at your home or workplace",
                  "Electronic wheel balancing included",
                  "New valves supplied and fitted",
                  "Old tyre disposal service",
                  "Available 24 hours a day, 7 days a week"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium text-[#0A1F44]">
                    <div className="bg-[#FFD700] rounded-full p-1"><CheckCircle2 className="w-5 h-5 text-[#0A1F44]" /></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-6">
              <div className="bg-[#F5F5F5] p-8 rounded-2xl border border-gray-100 shadow-sm">
                <Clock className="w-10 h-10 text-[#DC2626] mb-4" />
                <h3 className="text-xl font-bold font-display text-[#0A1F44] mb-2">Save Time</h3>
                <p className="text-gray-600">Don't take time off work or give up your Saturday. We fit your tyres while you carry on with your day.</p>
              </div>
              <div className="bg-[#F5F5F5] p-8 rounded-2xl border border-gray-100 shadow-sm">
                <ShieldCheck className="w-10 h-10 text-[#DC2626] mb-4" />
                <h3 className="text-xl font-bold font-display text-[#0A1F44] mb-2">Professional Standard</h3>
                <p className="text-gray-600">The exact same standard of fitting and balancing you would expect from a premium high-street garage.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
