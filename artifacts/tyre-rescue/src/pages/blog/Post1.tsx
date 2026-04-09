import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Calendar } from "lucide-react";
import { Link } from "wouter";

export default function Post1() {
  return (
    <Layout>
      <SEOHead 
        title="What to Do If You Get a Flat Tyre on the Motorway | Tyre Rescue 247" 
        description="A motorway blowout is frightening. Learn the crucial steps to keep yourself safe while waiting for emergency mobile tyre repair."
      />
      
      <div className="bg-[#0A1F44] pt-12 pb-24 text-white">
        <div className="container px-4 mx-auto">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Flat Tyre on the Motorway" }]} />
        </div>
      </div>

      <div className="py-12 bg-white -mt-16 rounded-t-3xl relative z-10">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="mb-12 border-b border-gray-200 pb-8">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 font-medium">
              <Calendar className="w-4 h-4" /> Oct 15, 2023
            </div>
            <h1 className="text-4xl md:text-5xl font-black font-display text-[#0A1F44] mb-6 leading-tight">What to Do If You Get a Flat Tyre on the Motorway</h1>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p>Experiencing a flat tyre or blowout while traveling at 70mph on a busy motorway is a terrifying experience for any driver. Your immediate actions in the seconds and minutes that follow are critical for your safety and the safety of other road users.</p>
            
            <h2>1. Do Not Brake Suddenly</h2>
            <p>Your instinct might be to slam on the brakes, but doing so with a flat tyre can cause you to lose control of the vehicle. Instead, grip the steering wheel firmly, take your foot off the accelerator, and allow the car to slow down naturally while maintaining a straight line.</p>

            <h2>2. Pull Over to the Hard Shoulder</h2>
            <p>Indicate left and carefully manoeuvre your vehicle onto the hard shoulder. Try to stop as far to the left as possible, ideally turning your steering wheel to the left once stopped (so if your car is hit, it gets pushed away from the carriageway).</p>

            <h2>3. Make Your Vehicle Visible</h2>
            <p>Turn on your hazard warning lights immediately. If it is dark or visibility is poor, turn on your sidelights as well. Do not put a warning triangle on the hard shoulder, as it is extremely dangerous to walk along a motorway.</p>

            <h2>4. Exit the Vehicle Safely</h2>
            <p>Everyone should exit the vehicle via the left-hand doors (the passenger side) to avoid stepping into live traffic lanes. Never attempt to exit on the driver's side if it opens onto the carriageway.</p>

            <h2>5. Get Behind the Safety Barrier</h2>
            <p>Move yourself and your passengers up the grass verge or behind the safety barrier, well away from the vehicle and the road. Leave any pets inside the vehicle.</p>

            <h2>6. Call for Emergency Assistance</h2>
            <p>Never attempt to change a tyre yourself on the hard shoulder. It is exceptionally dangerous. Call a professional <Link href="/emergency-tyre-repair" className="text-[#DC2626] font-bold hover:underline">emergency tyre repair service</Link> like Tyre Rescue 247. Our technicians have the high-visibility vehicles and training required to operate safely in high-risk environments.</p>

            <p className="mt-8 p-6 bg-[#F5F5F5] rounded-xl border-l-4 border-[#DC2626] text-gray-800 font-medium">
              If you are stranded right now, call Mobile Tyre Rescue 247 on <a href="https://wa.me/447469157852" className="text-[#0A1F44] font-bold hover:underline">07469 157852</a>. We provide 24/7 rapid response across Sheffield, Nottingham, Chesterfield, and Rotherham.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
