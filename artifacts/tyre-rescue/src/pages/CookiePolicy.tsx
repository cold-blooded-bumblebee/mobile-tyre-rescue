import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function CookiePolicy() {
  return (
    <Layout>
      <SEOHead title="Cookie Policy | Tyre Rescue 247" description="Information about how we use cookies on our website." />
      
      <div className="bg-[#0A1F44] pt-12 pb-24 text-white">
        <div className="container px-4 mx-auto">
          <Breadcrumbs items={[{ label: "Cookie Policy" }]} />
          <div className="max-w-3xl mt-8">
            <h1 className="text-4xl md:text-6xl font-black font-display mb-6">Cookie Policy</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              How we use cookies to improve your experience.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container px-4 mx-auto max-w-4xl prose prose-lg text-gray-600">
          <h2>1. What are cookies?</h2>
          <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>

          <h2>2. How we use cookies</h2>
          <p>We use cookies to:</p>
          <ul>
            <li>Understand how you use our site and to improve your experience.</li>
            <li>Remember your preferences, such as your preferred location for tyre fitting.</li>
            <li>Analyze website traffic and performance to optimize our services.</li>
          </ul>

          <h2>3. Types of cookies we use</h2>
          <p><strong>Strictly Necessary Cookies:</strong> These are essential for the website to function properly and cannot be switched off in our systems. They are usually only set in response to actions made by you, such as setting your privacy preferences or filling in forms.</p>
          <p><strong>Performance Cookies:</strong> These allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular.</p>
          
          <h2>4. Managing cookies</h2>
          <p>You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.</p>
        </div>
      </div>
    </Layout>
  );
}
