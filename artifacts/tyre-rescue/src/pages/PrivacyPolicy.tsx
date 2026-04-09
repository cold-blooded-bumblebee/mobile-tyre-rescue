import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <SEOHead title="Privacy Policy | Tyre Rescue 247" description="Privacy policy for Mobile Tyre Rescue 247. Learn how we handle and protect your personal data." />
      
      <div className="bg-[#0A1F44] pt-12 pb-24 text-white">
        <div className="container px-4 mx-auto">
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
          <div className="max-w-3xl mt-8">
            <h1 className="text-4xl md:text-6xl font-black font-display mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              How we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container px-4 mx-auto max-w-4xl prose prose-lg text-gray-600">
          <h2>1. Introduction</h2>
          <p>At Mobile Tyre Rescue 247, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>

          <h2>2. Data We Collect</h2>
          <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul>
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes billing address, location, email address and telephone numbers.</li>
            <li><strong>Vehicle Data</strong> includes your vehicle make, model, registration number, and tyre size.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul>
            <li>To perform the service contract we are about to enter into or have entered into with you (e.g. dispatching a tyre technician to your location).</li>
            <li>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal or regulatory obligation.</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>

          <h2>5. Your Legal Rights</h2>
          <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
          <ul>
            <li>Request access to your personal data.</li>
            <li>Request correction of your personal data.</li>
            <li>Request erasure of your personal data.</li>
            <li>Object to processing of your personal data.</li>
          </ul>

          <h2>6. Contact Details</h2>
          <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
          <p>
            Mobile Tyre Rescue 247<br/>
            Email: info@tyrerescue247.co.uk<br/>
            Phone: 07469 157852
          </p>
        </div>
      </div>
    </Layout>
  );
}
