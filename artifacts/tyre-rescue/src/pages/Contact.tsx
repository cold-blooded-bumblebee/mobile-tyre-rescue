import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email required"),
  location: z.string().min(1, "Please select an area"),
  vehicle: z.string().min(1, "Vehicle details required"),
  message: z.string().min(10, "Please provide some details about your enquiry")
});

const PHONE_DISPLAY = "07469 157852";
const PHONE_HREF = "https://wa.me/447469157852";

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      location: "",
      vehicle: "",
      message: ""
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    form.reset();
  }

  return (
    <Layout>
      <SEOHead 
        title="Contact Us | Mobile Tyre Rescue 247" 
        description="Get in touch with Mobile Tyre Rescue 247 for enquiries, quotes, or emergency tyre assistance in South Yorkshire and Nottinghamshire."
      />
      
      <div className="bg-[#0A1F44] pt-12 pb-24 text-white">
        <div className="container px-4 mx-auto">
          <Breadcrumbs items={[{ label: "Contact Us" }]} />
          <div className="max-w-3xl mt-8">
            <h1 className="text-4xl md:text-6xl font-black font-display mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Need a quote? Have a question about our services? Or need emergency assistance right now? We're here 24/7.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-[#F5F5F5]">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            
            <div>
              <h2 className="text-3xl font-black font-display text-[#0A1F44] mb-8">Get In Touch</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFD700] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#0A1F44]" />
                  </div>
                  <div>
                    <h3 className="font-bold font-display text-[#0A1F44] text-xl mb-1">Emergency 24/7 Line</h3>
                    <a href={PHONE_HREF} className="text-xl font-medium text-gray-600 hover:text-[#DC2626] transition-colors">{PHONE_DISPLAY}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFD700] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#0A1F44]" />
                  </div>
                  <div>
                    <h3 className="font-bold font-display text-[#0A1F44] text-xl mb-1">Areas Covered</h3>
                    <p className="text-lg text-gray-600">Sheffield, Chesterfield, Rotherham, Nottingham</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFD700] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#0A1F44]" />
                  </div>
                  <div>
                    <h3 className="font-bold font-display text-[#0A1F44] text-xl mb-1">Operating Hours</h3>
                    <p className="text-lg text-gray-600">24 Hours a Day, 7 Days a Week, 365 Days a Year</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                <h3 className="font-bold font-display text-[#0A1F44] text-xl mb-4">Prefer WhatsApp?</h3>
                <p className="text-gray-600 mb-6">Send us a photo of your damaged tyre or your exact location directly on WhatsApp for faster service.</p>
                <a href={PHONE_HREF} className="inline-flex justify-center items-center gap-2 w-full py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20bd5a] transition-colors">
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-black font-display text-[#0A1F44] mb-6">Send an Enquiry</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="bg-[#F5F5F5] border-0 focus-visible:ring-[#FFD700]" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="07123 456789" {...field} className="bg-[#F5F5F5] border-0 focus-visible:ring-[#FFD700]" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} className="bg-[#F5F5F5] border-0 focus-visible:ring-[#FFD700]" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Area</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-[#F5F5F5] border-0 focus:ring-[#FFD700]">
                                <SelectValue placeholder="Select Area" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="sheffield">Sheffield</SelectItem>
                              <SelectItem value="chesterfield">Chesterfield</SelectItem>
                              <SelectItem value="rotherham">Rotherham</SelectItem>
                              <SelectItem value="nottingham">Nottingham</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="vehicle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Vehicle / Tyre Size</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. Ford Focus 205/55 R16" {...field} className="bg-[#F5F5F5] border-0 focus-visible:ring-[#FFD700]" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="How can we help?" className="min-h-[120px] bg-[#F5F5F5] border-0 focus-visible:ring-[#FFD700]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-[#0A1F44] hover:bg-[#0A1F44]/90 text-white font-bold py-6 text-lg rounded-xl">
                    Send Enquiry
                  </Button>
                </form>
              </Form>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}
