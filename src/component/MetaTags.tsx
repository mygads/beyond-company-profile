import { useEffect } from 'react';

interface MetaTagsProps {
  title: string;
  description?: string;
  canonical?: string;
  image?: string;
}

const MetaTags = ({ title, description, canonical, image }: MetaTagsProps) => {
  const site = "TRD Elite Services";
  const fullTitle = title === site ? title : `${title} | ${site}`;
  const defaultDescription = "Professional services offered by TRD Elite Services";
  const metaDescription = description || defaultDescription;
  const url = canonical || window.location.href;
  const imageUrl = image || "https://trdeliteservices.com.au/images/logo.png"; // Replace with your default image

  useEffect(() => {
    // Update title
    document.title = fullTitle;
    
    // Update or create meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', metaDescription);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', metaDescription);
      document.head.appendChild(metaDesc);
    }
    
    // Update or create canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', url);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', url);
      document.head.appendChild(canonicalLink);
    }
    
    // Handle Open Graph tags
    updateOrCreateMeta('og:title', fullTitle);
    updateOrCreateMeta('og:description', metaDescription);
    updateOrCreateMeta('og:url', url);
    updateOrCreateMeta('og:image', imageUrl);
    updateOrCreateMeta('og:type', 'website');
    
    // Handle Twitter tags
    updateOrCreateMeta('twitter:card', 'summary_large_image');
    updateOrCreateMeta('twitter:title', fullTitle);
    updateOrCreateMeta('twitter:description', metaDescription);
    updateOrCreateMeta('twitter:image', imageUrl);
  }, [fullTitle, metaDescription, url, imageUrl]);
  
  const updateOrCreateMeta = (property: string, content: string) => {
    const propertyAttr = property.startsWith('og:') || property.startsWith('twitter:') ? 'property' : 'name';
    let meta = document.querySelector(`meta[${propertyAttr}="${property}"]`);
    if (meta) {
      meta.setAttribute('content', content);
    } else {
      meta = document.createElement('meta');
      meta.setAttribute(propertyAttr, property);
      meta.setAttribute('content', content);
      document.head.appendChild(meta);
    }
  };

  // This component doesn't render anything visible
  return null;
};

export default MetaTags;