import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Calendar, ChevronRight } from "lucide-react";
import { Link } from "wouter";

export default function Blog() {
  const posts = [
    {
      title: "What to Do If You Get a Flat Tyre on the Motorway",
      excerpt: "A motorway blowout is a frightening experience. Learn the crucial steps to keep yourself and your family safe while waiting for emergency mobile tyre repair.",
      date: "Oct 15, 2023",
      path: "/blog/flat-tyre-on-motorway"
    },
    {
      title: "How Much Does Mobile Tyre Fitting Cost in the UK?",
      excerpt: "Is mobile tyre fitting more expensive than a traditional garage? We break down the costs, callout fees, and why convenience doesn't have to break the bank.",
      date: "Oct 02, 2023",
      path: "/blog/mobile-tyre-fitting-cost"
    },
    {
      title: "Signs You Need New Tyres",
      excerpt: "Don't wait for a blowout. Discover the 5 early warning signs that your tyres are worn, damaged, or unsafe, and when it's time to call a mobile fitter.",
      date: "Sep 20, 2023",
      path: "/blog/signs-you-need-new-tyres"
    },
    {
      title: "Benefits of Mobile Tyre Services",
      excerpt: "Why waste your Saturday morning sitting in a dingy garage waiting room? Explore the massive benefits of having your tyres fitted at home or work.",
      date: "Sep 05, 2023",
      path: "/blog/benefits-mobile-tyre-services"
    },
    {
      title: "Emergency Tyre Tips for Drivers",
      excerpt: "From checking tread depth to understanding tyre pressure, these simple weekly checks can drastically reduce your chances of a roadside emergency.",
      date: "Aug 22, 2023",
      path: "/blog/emergency-tyre-tips"
    }
  ];

  return (
    <Layout>
      <SEOHead 
        title="Tyre Advice & News Blog | Tyre Rescue 247" 
        description="Expert advice on tyre maintenance, roadside safety, and mobile tyre fitting from the team at Mobile Tyre Rescue 247."
      />
      
      <div className="bg-[#0A1F44] pt-12 pb-24 text-white">
        <div className="container px-4 mx-auto">
          <Breadcrumbs items={[{ label: "Blog" }]} />
          <div className="max-w-3xl mt-8">
            <h1 className="text-4xl md:text-6xl font-black font-display mb-6">Tyre Advice & News</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Helpful tips, safety advice, and industry news from our expert tyre technicians.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-[#F5F5F5]">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="grid gap-8">
            {posts.map((post, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 font-medium">
                  <Calendar className="w-4 h-4" /> {post.date}
                </div>
                <h2 className="text-2xl font-bold font-display text-[#0A1F44] mb-3">
                  <Link href={post.path} className="hover:text-[#DC2626] transition-colors">{post.title}</Link>
                </h2>
                <p className="text-gray-600 mb-6 text-lg">{post.excerpt}</p>
                <Link href={post.path} className="inline-flex items-center font-bold text-[#0A1F44] hover:text-[#DC2626] transition-colors">
                  Read Article <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
