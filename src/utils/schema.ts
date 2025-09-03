export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "KrsiRoots",
    "url": "https://KrsiRoots.com",
    "logo": "https://KrsiRoots.com/images/logo.png",
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61579862834774",
      "https://twitter.com/KrsiRoots",
      "https://www.instagram.com/krsiroots_organics?igsh=MXQ4aTE4Y3Jzdnk4dg==",
      "https://in.linkedin.com/in/krsi-organics-a8a8a7375"
    ],
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+91-8866034343",
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