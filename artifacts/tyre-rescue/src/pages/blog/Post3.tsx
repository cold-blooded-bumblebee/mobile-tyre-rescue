import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Calendar } from "lucide-react";
import { Link } from "wouter";

export default function Post3() {
  return (
    <Layout>
      <SEOHead 
        title="Signs You Need New Tyres | Tyre Rescue 247" 
        description="Don't wait for a blowout. Discover the early warning signs that your tyres are worn, damaged, or unsafe."
      />
      
      <div className="bg-[#0A1F44] pt-12 pb-24 text-white">
        <div className="container px-4 mx-auto">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Signs You Need New Tyres" }]} />
        </div>
      </div>

      <div className="py-12 bg-white -mt-16 rounded-t-3xl relative z-10">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="mb-12 border-b border-gray-200 pb-8">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 font-medium">
              <Calendar className="w-4 h-4" /> Sep 20, 2023
            </div>
            <h1 className="text-4xl md:text-5xl font-black font-display text-[#0A1F44] mb-6 leading-tight">Signs You Need New Tyres</h1>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p>Your tyres are the only point of contact between your vehicle and the road. Keeping them in top condition is non-negotiable for your safety. But how do you know when it's time to book a <Link href="/mobile-tyre-fitting" className="text-[#DC2626] font-bold hover:underline">mobile tyre fitting</Link>? Look out for these signs.</p>
            
            <h2>1. Low Tread Depth</h2>
            <p>The legal minimum tread depth in the UK is 1.6mm across the central three-quarters of the tyre. However, braking performance drops significantly once tread falls below 3mm, especially in wet conditions. You can check this easily using the "20p test" — if you place a 20p coin into the main tread grooves and can see the outer band of the coin, your tyres are illegal and unsafe.</p>

            <h2>2. Cracks and Weathering on the Sidewall</h2>
            <p>Over time, the rubber compounds in a tyre degrade due to UV exposure and age. If you notice visible cracks, cuts, or perishing on the sidewall, the tyre's structural integrity is compromised, risking a high-speed blowout.</p>

            <h2>3. Bulges or Blisters</h2>
            <p>If you hit a pothole or a kerb hard, the internal framework of the tyre can break. This causes air pressure to push the outer rubber outward, creating a visible bulge or blister. This is incredibly dangerous — the tyre could fail at any moment. You need an <Link href="/emergency-tyre-repair" className="text-[#DC2626] font-bold hover:underline">emergency tyre replacement</Link> immediately.</p>

            <h2>4. Constant Pressure Loss</h2>
            <p>If you find yourself topping up the air in one specific tyre every week, you likely have a slow puncture. This could be a small nail in the tread or a faulty valve. A technician can often perform a <Link href="/puncture-repair" className="text-[#DC2626] font-bold hover:underline">puncture repair</Link> if caught early, saving you the cost of a new tyre.</p>

            <h2>5. Unusual Vibration in the Steering Wheel</h2>
            <p>While some vibration on poor road surfaces is normal, excessive vibration on smooth roads indicates an issue. It could mean your wheels are unbalanced, your tracking is off, or the tyre itself is wearing unevenly or internally damaged.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
