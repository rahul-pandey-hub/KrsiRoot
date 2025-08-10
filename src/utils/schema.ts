export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "KrsiRoots",
    "url": "https://KrsiRoots.com",
    "logo": "https://KrsiRoots.com/images/logo.png",
    "sameAs": [
      "https://facebook.com/KrsiRoots",
      "https://twitter.com/KrsiRoots",
      "https://instagram.com/KrsiRoots",
      "https://linkedin.com/company/KrsiRoots"
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
      "item": `https://KrsiRoots.com${item.url}`
    }))
  };
}; 