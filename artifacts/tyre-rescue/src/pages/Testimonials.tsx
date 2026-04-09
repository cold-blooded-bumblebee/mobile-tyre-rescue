import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    { name: "Sarah M.", location: "Sheffield", date: "October 2023", quote: "Got a blowout at 2am in the pouring rain. They arrived in 40 minutes, replaced the tyre, and had me back on my way. Absolute lifesavers." },
    { name: "David T.", location: "Nottingham", date: "September 2023", quote: "Woke up to a completely flat tyre on my driveway and needed to get to work. The fitter was polite, fast, and the price was very reasonable." },
    { name: "Emma L.", location: "Chesterfield", date: "August 2023", quote: "Hit a pothole and damaged my alloy and tyre. They came out, assessed the damage, fitted a new tyre and balanced it perfectly." },
    { name: "James K.", location: "Rotherham", date: "August 2023", quote: "Lost my locking wheel nut key and three other garages said they couldn't help. These guys came out and removed all four in 20 minutes without a scratch on my alloys." },
    { name: "Rachel B.", location: "Sheffield", date: "July 2023", quote: "Excellent service from start to finish. The dispatcher was calming (I was panicking on the M1!) and the fitter arrived exactly when they said they would." },
    { name: "Mark W.", location: "Nottingham", date: "June 2023", quote: "Cheaper than my local garage and they came to my office car park to do it. Will definitely use again for standard replacements, not just emergencies." },
    { name: "Lisa H.", location: "Chesterfield", date: "May 2023", quote: "Had a slow puncture for days. They found a nail, repaired it to standard rather than trying to sell me a new tyre. Very honest company." },
    { name: "Tom P.", location: "Rotherham", date: "May 2023", quote: "Top lads. Quick response, fair price, job done right. What more can you ask for?" }
  ];

  return (
    <Layout>
      <SEOHead 
        title="Customer Reviews & Testimonials | Tyre Rescue 247" 
        description="Read reviews from our satisfied customers in Sheffield, Chesterfield, Rotherham, and Nottingham."
      />
      
      <div className="bg-[#0A1F44] pt-12 pb-24 text-white">
        <div className="container px-4 mx-auto">
          <Breadcrumbs items={[{ label: "Testimonials" }]} />
          <div className="max-w-3xl mt-8">
            <h1 className="text-4xl md:text-6xl font-black font-display mb-6">Customer Reviews</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Don't just take our word for it. See what drivers across South Yorkshire and Nottinghamshire have to say about our mobile tyre fitting service.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-[#F5F5F5]">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                <div className="flex text-[#FFD700] mb-4">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5 fill-current" />)}
                </div>
                <blockquote className="text-gray-600 mb-6 italic flex-grow">"{review.quote}"</blockquote>
                <div className="border-t border-gray-100 pt-4 mt-auto">
                  <div className="font-bold text-[#0A1F44] font-display">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.location} • {review.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
