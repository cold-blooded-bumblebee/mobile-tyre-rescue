import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "wouter";

export default function Sitemap() {
  const sections = [
    {
      title: "Main Pages",
      links: [
        { label: "Home", path: "/" },
        { label: "About Us", path: "/about" },
        { label: "Pricing", path: "/pricing" },
        { label: "Testimonials", path: "/testimonials" },
        { label: "FAQs", path: "/faqs" },
        { label: "Contact Us", path: "/contact" },
        { label: "Book a Service", path: "/book-a-service" },
      ]
    },
    {
      title: "Services",
      links: [
        { label: "All Services", path: "/services" },
        { label: "Mobile Tyre Fitting", path: "/mobile-tyre-fitting" },
        { label: "Emergency Tyre Repair", path: "/emergency-tyre-repair" },
        { label: "Roadside Tyre Replacement", path: "/roadside-tyre-replacement" },
        { label: "Puncture Repair", path: "/puncture-repair" },
        { label: "Locking Wheel Nut Removal", path: "/locking-wheel-nut-removal" },
        { label: "24/7 Mobile Tyre Service", path: "/247-mobile-tyre-service" },
      ]
    },
    {
      title: "Areas We Cover",
      links: [
        { label: "All Areas", path: "/areas-we-cover" },
        { label: "Mobile Tyre Fitting Sheffield", path: "/mobile-tyre-fitting-sheffield" },
        { label: "Mobile Tyre Fitting Chesterfield", path: "/mobile-tyre-fitting-chesterfield" },
        { label: "Mobile Tyre Fitting Rotherham", path: "/mobile-tyre-fitting-rotherham" },
        { label: "Mobile Tyre Fitting Nottingham", path: "/mobile-tyre-fitting-nottingham" },
      ]
    },
    {
      title: "Blog",
      links: [
        { label: "Blog Home", path: "/blog" },
        { label: "What to Do If You Get a Flat Tyre on the Motorway", path: "/blog/flat-tyre-on-motorway" },
        { label: "How Much Does Mobile Tyre Fitting Cost in the UK?", path: "/blog/mobile-tyre-fitting-cost" },
        { label: "Signs You Need New Tyres", path: "/blog/signs-you-need-new-tyres" },
        { label: "Benefits of Mobile Tyre Services", path: "/blog/benefits-mobile-tyre-services" },
        { label: "Emergency Tyre Tips for Drivers", path: "/blog/emergency-tyre-tips" },
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", path: "/privacy-policy" },
        { label: "Terms and Conditions", path: "/terms-and-conditions" },
        { label: "Cookie Policy", path: "/cookie-policy" },
      ]
    }
  ];

  return (
    <Layout>
      <SEOHead title="Sitemap | Tyre Rescue 247" description="Sitemap for Mobile Tyre Rescue 247." />
      
      <div className="bg-[#0A1F44] pt-12 pb-24 text-white">
        <div className="container px-4 mx-auto">
          <Breadcrumbs items={[{ label: "Sitemap" }]} />
          <div className="max-w-3xl mt-8">
            <h1 className="text-4xl md:text-6xl font-black font-display mb-6">Sitemap</h1>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            {sections.map((section, idx) => (
              <div key={idx}>
                <h2 className="text-2xl font-bold font-display text-[#0A1F44] mb-4 border-b pb-2">{section.title}</h2>
                <ul className="space-y-3">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link href={link.path} className="text-gray-600 hover:text-[#DC2626] hover:underline transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
