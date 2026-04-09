import { useState } from "react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email required"),
  location: z.string().min(1, "Please select an area"),
  postcode: z.string().min(3, "Postcode required"),
  vehicleMake: z.string().min(2, "Make required"),
  vehicleModel: z.string().min(2, "Model required"),
  registration: z.string().optional(),
  tyreSize: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Date required"),
  time: z.string().min(1, "Time preference required"),
  notes: z.string().optional()
});

export default function BookService() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "", phone: "", email: "", location: "", postcode: "",
      vehicleMake: "", vehicleModel: "", registration: "", tyreSize: "",
      service: "", date: "", time: "", notes: ""
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would send data to an API
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (isSubmitted) {
    return (
      <Layout>
        <SEOHead title="Booking Confirmed | Tyre Rescue 247" description="Your booking has been received." />
        <div className="min-h-[60vh] flex items-center justify-center bg-[#F5F5F5] py-20">
          <div className="bg-white p-12 rounded-3xl shadow-lg max-w-lg text-center mx-4">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-black font-display text-[#0A1F44] mb-4">Request Received</h1>
            <p className="text-gray-600 text-lg mb-8">
              Thank you for booking with Mobile Tyre Rescue 247. One of our team members will call you shortly to confirm the appointment and provide a final quote.
            </p>
            <Button onClick={() => setIsSubmitted(false)} className="bg-[#0A1F44] hover:bg-[#0A1F44]/90 text-white px-8 py-6 rounded-xl font-bold">
              Make Another Booking
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEOHead 
        title="Book a Mobile Tyre Service | Tyre Rescue 247" 
        description="Book mobile tyre fitting, puncture repair, or emergency tyre replacement online. We cover Sheffield, Chesterfield, Rotherham, and Nottingham."
      />
      
      <div className="bg-[#0A1F44] pt-12 pb-24 text-white">
        <div className="container px-4 mx-auto">
          <Breadcrumbs items={[{ label: "Book a Service" }]} />
          <div className="max-w-3xl mt-8">
            <h1 className="text-4xl md:text-6xl font-black font-display mb-6">Book a Service</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Fill out the form below to book a mobile tyre fitting or repair. For emergencies, please call us directly for an immediate response.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-[#F5F5F5]">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100 -mt-24 relative z-10">
            <div className="bg-red-50 border border-red-100 text-red-800 p-4 rounded-xl mb-8 flex items-start gap-3">
              <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold mt-0.5">URGENT?</div>
              <p className="text-sm font-medium">If you are stuck on the side of the road or have an immediate emergency, do not use this form. Please call us directly on <strong>07469 157852</strong>.</p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                
                {/* Personal Details */}
                <div>
                  <h2 className="text-xl font-bold font-display text-[#0A1F44] mb-4 border-b pb-2">1. Your Details</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem><FormLabel>Full Name *</FormLabel><FormControl><Input {...field} className="bg-[#F5F5F5] border-0" /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem><FormLabel>Phone Number *</FormLabel><FormControl><Input type="tel" {...field} className="bg-[#F5F5F5] border-0" /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem className="md:col-span-2"><FormLabel>Email Address *</FormLabel><FormControl><Input type="email" {...field} className="bg-[#F5F5F5] border-0" /></FormControl><FormMessage /></FormItem>
                    )} />
                  </div>
                </div>

                {/* Location Details */}
                <div>
                  <h2 className="text-xl font-bold font-display text-[#0A1F44] mb-4 border-b pb-2">2. Location</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="location" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Area *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl><SelectTrigger className="bg-[#F5F5F5] border-0"><SelectValue placeholder="Select Area" /></SelectTrigger></FormControl>
                          <SelectContent>
                            <SelectItem value="sheffield">Sheffield</SelectItem>
                            <SelectItem value="chesterfield">Chesterfield</SelectItem>
                            <SelectItem value="rotherham">Rotherham</SelectItem>
                            <SelectItem value="nottingham">Nottingham</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="postcode" render={({ field }) => (
                      <FormItem><FormLabel>Postcode *</FormLabel><FormControl><Input {...field} className="bg-[#F5F5F5] border-0" /></FormControl><FormMessage /></FormItem>
                    )} />
                  </div>
                </div>

                {/* Vehicle Details */}
                <div>
                  <h2 className="text-xl font-bold font-display text-[#0A1F44] mb-4 border-b pb-2">3. Vehicle & Service</h2>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <FormField control={form.control} name="vehicleMake" render={({ field }) => (
                      <FormItem><FormLabel>Vehicle Make *</FormLabel><FormControl><Input placeholder="e.g. Ford" {...field} className="bg-[#F5F5F5] border-0" /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="vehicleModel" render={({ field }) => (
                      <FormItem><FormLabel>Vehicle Model *</FormLabel><FormControl><Input placeholder="e.g. Focus" {...field} className="bg-[#F5F5F5] border-0" /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="registration" render={({ field }) => (
                      <FormItem><FormLabel>Registration Number</FormLabel><FormControl><Input {...field} className="bg-[#F5F5F5] border-0" /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="tyreSize" render={({ field }) => (
                      <FormItem><FormLabel>Tyre Size (if known)</FormLabel><FormControl><Input placeholder="e.g. 205/55 R16" {...field} className="bg-[#F5F5F5] border-0" /></FormControl><FormMessage /></FormItem>
                    )} />
                  </div>
                  <FormField control={form.control} name="service" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Required *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl><SelectTrigger className="bg-[#F5F5F5] border-0"><SelectValue placeholder="Select Service" /></SelectTrigger></FormControl>
                        <SelectContent>
                          <SelectItem value="fitting">Mobile Tyre Fitting (New Tyres)</SelectItem>
                          <SelectItem value="repair">Puncture Repair</SelectItem>
                          <SelectItem value="locking_nut">Locking Wheel Nut Removal</SelectItem>
                          <SelectItem value="other">Other / Unsure</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                {/* Date & Time */}
                <div>
                  <h2 className="text-xl font-bold font-display text-[#0A1F44] mb-4 border-b pb-2">4. Date & Time</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="date" render={({ field }) => (
                      <FormItem><FormLabel>Preferred Date *</FormLabel><FormControl><Input type="date" {...field} className="bg-[#F5F5F5] border-0" /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="time" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Time *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl><SelectTrigger className="bg-[#F5F5F5] border-0"><SelectValue placeholder="Select Time" /></SelectTrigger></FormControl>
                          <SelectContent>
                            <SelectItem value="morning">Morning (8am - 12pm)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (12pm - 4pm)</SelectItem>
                            <SelectItem value="evening">Evening (4pm - 8pm)</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                </div>

                {/* Notes */}
                <FormField control={form.control} name="notes" render={({ field }) => (
                  <FormItem><FormLabel>Additional Notes</FormLabel><FormControl><Textarea placeholder="Any other details we should know?" className="bg-[#F5F5F5] border-0" {...field} /></FormControl><FormMessage /></FormItem>
                )} />

                <Button type="submit" className="w-full bg-[#FFD700] hover:bg-yellow-400 text-[#0A1F44] font-bold py-6 text-lg rounded-xl shadow-lg">
                  Submit Booking Request
                </Button>
              </form>
            </Form>

          </div>
        </div>
      </div>
    </Layout>
  );
}
