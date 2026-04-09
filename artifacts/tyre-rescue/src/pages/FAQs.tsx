import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQs() {
  const faqs = [
    {
      q: "How fast can you reach me?",
      a: "Our average response time is between 30 to 60 minutes, depending on your exact location and current traffic conditions. When you call, our dispatcher will give you an accurate ETA."
    },
    {
      q: "Are there any hidden callout fees?",
      a: "No. We believe in transparent pricing. The quote we provide over the phone includes the callout, the tyre (or repair), new valve, wheel balancing, and disposal of your old tyre. There are no hidden surprises."
    },
    {
      q: "What should I do while waiting on the motorway?",
      a: "Safety first. Pull over to the hard shoulder, put your hazard lights on, exit the vehicle via the left-hand doors (away from traffic), and wait behind the safety barrier or up on the grass verge. Do not attempt to change the tyre yourself on a busy road."
    },
    {
      q: "Do you repair punctures or just replace tyres?",
      a: "We always aim to repair a puncture if it is safe and legal to do so (following British Standard BSAU159). If the puncture is in the sidewall, or the hole is too large, a replacement tyre will be required."
    },
    {
      q: "What areas do you cover?",
      a: "We cover all of Sheffield, Chesterfield, Rotherham, and Nottingham, including the surrounding towns, villages, and all major connecting roads and motorways (M1, M18, A1)."
    },
    {
      q: "Can you remove a locking wheel nut if I've lost the key?",
      a: "Yes. Our vans are equipped with specialist locking wheel nut removal tools that can safely extract the nut without damaging your alloy wheels."
    },
    {
      q: "Do you offer mobile tyre fitting at home?",
      a: "Absolutely. Mobile tyre fitting at home or work is a huge part of our business. You can book an appointment for a time that suits you, saving you a trip to a garage."
    },
    {
      q: "What brands of tyres do you stock?",
      a: "We stock a wide variety of tyres across all price points: budget, mid-range (like Nexen, Hankook), and premium brands (Michelin, Pirelli, Continental, Goodyear)."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <Layout>
      <SEOHead 
        title="Frequently Asked Questions | Tyre Rescue 247" 
        description="Got questions about our mobile tyre fitting service? Read our FAQs on response times, pricing, and puncture repairs."
        schema={faqSchema}
      />
      
      <div className="bg-[#0A1F44] pt-12 pb-24 text-white">
        <div className="container px-4 mx-auto">
          <Breadcrumbs items={[{ label: "FAQs" }]} />
          <div className="max-w-3xl mt-8">
            <h1 className="text-4xl md:text-6xl font-black font-display mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Everything you need to know about our mobile tyre fitting, emergency repairs, and pricing.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container px-4 mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-bold text-[#0A1F44] text-left hover:text-[#DC2626] transition-colors py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-lg leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Layout>
  );
}
