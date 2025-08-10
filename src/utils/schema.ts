export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "rsiRoots",
    "url": "https://rsiRoots.com",
    "logo": "https://rsiRoots.com/images/logo.png",
    "sameAs": [
      "https://facebook.com/rsiRoots",
      "https://twitter.com/rsiRoots",
      "https://instagram.com/rsiRoots",
      "https://linkedin.com/company/rsiRoots"
    ],
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+91-9824104549",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi"],
      "areaServed": "IN"
    }],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India"
    },
    "description": "India's leading organic food trading platform connecting farmers with global buyers."
  };
};

export const generateProductSchema = (product: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": product.price,
      "priceCurrency": "INR"
    }
  };
};

export const generateBreadcrumbSchema = (items: Array<{ name: string, url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://rsiRoots.com${item.url}`
    }))
  };
}; 