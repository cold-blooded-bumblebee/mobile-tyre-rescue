import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import ServiceMobileTyreFitting from "@/pages/ServiceMobileTyreFitting";
import ServiceEmergencyRepair from "@/pages/ServiceEmergencyRepair";
import ServiceRoadsideReplacement from "@/pages/ServiceRoadsideReplacement";
import Service247 from "@/pages/Service247";
import ServiceLockingNut from "@/pages/ServiceLockingNut";
import ServicePunctureRepair from "@/pages/ServicePunctureRepair";
import LocationSheffield from "@/pages/LocationSheffield";
import LocationChesterfield from "@/pages/LocationChesterfield";
import LocationRotherham from "@/pages/LocationRotherham";
import LocationNottingham from "@/pages/LocationNottingham";
import Areas from "@/pages/Areas";
import Pricing from "@/pages/Pricing";
import Testimonials from "@/pages/Testimonials";
import FAQs from "@/pages/FAQs";
import Blog from "@/pages/Blog";
import Post1 from "@/pages/blog/Post1";
import Post2 from "@/pages/blog/Post2";
import Post3 from "@/pages/blog/Post3";
import Post4 from "@/pages/blog/Post4";
import Post5 from "@/pages/blog/Post5";
import Contact from "@/pages/Contact";
import BookService from "@/pages/BookService";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsConditions from "@/pages/TermsConditions";
import CookiePolicy from "@/pages/CookiePolicy";
import Sitemap from "@/pages/Sitemap";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/mobile-tyre-fitting" component={ServiceMobileTyreFitting} />
            <Route path="/emergency-tyre-repair" component={ServiceEmergencyRepair} />
            <Route path="/roadside-tyre-replacement" component={ServiceRoadsideReplacement} />
            <Route path="/247-mobile-tyre-service" component={Service247} />
            <Route path="/locking-wheel-nut-removal" component={ServiceLockingNut} />
            <Route path="/puncture-repair" component={ServicePunctureRepair} />
            <Route path="/mobile-tyre-fitting-sheffield" component={LocationSheffield} />
            <Route path="/mobile-tyre-fitting-chesterfield" component={LocationChesterfield} />
            <Route path="/mobile-tyre-fitting-rotherham" component={LocationRotherham} />
            <Route path="/mobile-tyre-fitting-nottingham" component={LocationNottingham} />
            <Route path="/areas-we-cover" component={Areas} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/testimonials" component={Testimonials} />
            <Route path="/faqs" component={FAQs} />
            <Route path="/blog" component={Blog} />
            <Route path="/blog/flat-tyre-on-motorway" component={Post1} />
            <Route path="/blog/mobile-tyre-fitting-cost" component={Post2} />
            <Route path="/blog/signs-you-need-new-tyres" component={Post3} />
            <Route path="/blog/benefits-mobile-tyre-services" component={Post4} />
            <Route path="/blog/emergency-tyre-tips" component={Post5} />
            <Route path="/contact" component={Contact} />
            <Route path="/book-a-service" component={BookService} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/terms-and-conditions" component={TermsConditions} />
            <Route path="/cookie-policy" component={CookiePolicy} />
            <Route path="/sitemap" component={Sitemap} />
            <Route component={NotFound} />
          </Switch>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
