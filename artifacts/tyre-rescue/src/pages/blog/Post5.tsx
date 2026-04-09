import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Calendar } from "lucide-react";
import { Link } from "wouter";

export default function Post5() {
  return (
    <Layout>
      <SEOHead 
        title="Emergency Tyre Tips for Drivers | Tyre Rescue 247" 
        description="Simple weekly checks and tips that can drastically reduce your chances of a roadside tyre emergency."
      />
      
      <div className="bg-[#0A1F44] pt-12 pb-24 text-white">
        <div className="container px-4 mx-auto">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Emergency Tyre Tips for Drivers" }]} />
        </div>
      </div>

      <div className="py-12 bg-white -mt-16 rounded-t-3xl relative z-10">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="mb-12 border-b border-gray-200 pb-8">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 font-medium">
              <Calendar className="w-4 h-4" /> Aug 22, 2023
            </div>
            <h1 className="text-4xl md:text-5xl font-black font-display text-[#0A1F44] mb-6 leading-tight">Emergency Tyre Tips for Drivers</h1>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p>Nobody wants to make an <Link href="/emergency-tyre-repair" className="text-[#DC2626] font-bold hover:underline">emergency callout</Link> at 2 AM on a cold, rainy motorway. While some punctures from road debris are unavoidable, the vast majority of tyre blowouts are entirely preventable. Here are our top tips to keep you safe.</p>
            
            <h2>1. Check Tyre Pressures Monthly</h2>
            <p>Under-inflated tyres are the leading cause of high-speed blowouts. When a tyre lacks pressure, the sidewall flexes excessively at speed, generating massive heat build-up that eventually destroys the tyre structure. Buy a cheap digital pressure gauge and check your tyres when they are cold.</p>

            <h2>2. Don't Ignore the TPMS Light</h2>
            <p>If your Tyre Pressure Monitoring System (TPMS) warning light illuminates on the dashboard, stop as soon as it is safe to do so. It means you have lost significant pressure. Driving on a deflating tyre ruins the internal casing, turning a £45 <Link href="/puncture-repair" className="text-[#DC2626] font-bold hover:underline">puncture repair</Link> into a £100+ tyre replacement.</p>

            <h2>3. Know Where Your Locking Nut Key Is</h2>
            <p>If you have alloy wheels, you likely have locking wheel nuts. If you break down, the technician will need the key to remove the wheel. Keep it safe in your glovebox or boot, and know exactly where it is. If you've lost it, book a <Link href="/locking-wheel-nut-removal" className="text-[#DC2626] font-bold hover:underline">locking wheel nut removal</Link> before it becomes an emergency.</p>

            <h2>4. Inspect for Damage Regularly</h2>
            <p>Once a month, turn your steering wheel full lock and inspect the tread and inner sidewall of your front tyres. Look for cuts, bulges, or embedded nails. Catching a slow puncture early is much better than suffering a blowout on the motorway.</p>

            <h2>5. Save an Emergency Number</h2>
            <p>When you're stuck on the hard shoulder, the last thing you want to do is frantically Google for a reliable company while lorries thunder past. Save Mobile Tyre Rescue 247 in your phone contacts: <strong>07469 157852</strong>. If you are in Sheffield, Nottingham, Chesterfield or Rotherham, we've got you covered 24/7.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
