import { useEffect } from "react";
import { useLocation } from "wouter";

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  type?: string;
  schema?: Record<string, any>;
  schemas?: Record<string, any>[];
  keywords?: string;
}

export function SEOHead({ title, description, canonicalUrl, type = "website", schema, schemas, keywords }: SEOHeadProps) {
  const [location] = useLocation();
  const currentUrl = canonicalUrl || `https://tyrerescue247.co.uk${location}`;

  useEffect(() => {
    document.title = `${title} | Tyre Rescue 247`;

    const setMeta = (selector: string, attr: string, value: string, content: string) => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, value);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMeta('meta[name="description"]', 'name', 'description', description);
    if (keywords) setMeta('meta[name="keywords"]', 'name', 'keywords', keywords);
    setMeta('meta[name="robots"]', 'name', 'robots', 'index, follow, max-image-preview:large');

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

    // Open Graph + Twitter
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: type },
      { property: 'og:url', content: currentUrl },
      { property: 'og:site_name', content: 'Tyre Rescue 247' },
      { property: 'og:locale', content: 'en_GB' },
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);

    // JSON-LD Schemas (supports single schema and array)
    document.querySelectorAll('script[data-seo-schema]').forEach((el) => el.remove());
    const allSchemas = schemas ?? (schema ? [schema] : []);
    allSchemas.forEach((s, i) => {
      const scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      scriptTag.setAttribute('data-seo-schema', String(i));
      scriptTag.textContent = JSON.stringify(s);
      document.head.appendChild(scriptTag);
    });
  }, [title, description, currentUrl, type, schema, schemas, keywords]);

  return null;
}
