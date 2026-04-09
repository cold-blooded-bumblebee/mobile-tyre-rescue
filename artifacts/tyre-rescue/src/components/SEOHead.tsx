import { useEffect } from "react";
import { useLocation } from "wouter";

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  type?: string;
  schema?: Record<string, any>;
}

export function SEOHead({ title, description, canonicalUrl, type = "website", schema }: SEOHeadProps) {
  const [location] = useLocation();
  const currentUrl = canonicalUrl || `https://tyrerescue247.co.uk${location}`;

  useEffect(() => {
    document.title = `${title} | Tyre Rescue 247`;
    
    // Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

    // Open Graph
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: type },
      { property: 'og:url', content: currentUrl },
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

    // JSON-LD Schema
    let scriptTag = document.querySelector('#seo-schema');
    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'seo-schema';
        scriptTag.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    } else if (scriptTag) {
      scriptTag.remove();
    }

    return () => {
      // Cleanup logic if needed, though usually overwriting is fine for SPAs
    };
  }, [title, description, currentUrl, type, schema]);

  return null;
}
