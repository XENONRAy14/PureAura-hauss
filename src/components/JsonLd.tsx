export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "PureAura Haus",
    description:
      "Construction neuve, rénovation de A à Z, nettoyage professionnel et dépannage BTP à Marseille. Gros œuvre, second œuvre, finitions. Intervention rapide et qualité premium.",
    url: "https://pureaurahaus.fr",
    telephone: "+33768208987",
    email: "contact.pureaurahaus@yahoo.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Marseille",
      addressRegion: "Provence-Alpes-Côte d'Azur",
      addressCountry: "FR",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 43.2965,
        longitude: 5.3698,
      },
      geoRadius: "50000",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "07:00",
      closes: "20:00",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services PureAura Haus",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Construction & Rénovation",
            description:
              "Construction neuve, rénovation complète de maisons et appartements de A à Z. Gros œuvre et second œuvre.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Nettoyage professionnel",
            description:
              "Nettoyage fin de chantier, remise en état, préparation avant réception et urgences terrain.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dépannage BTP",
            description:
              "Dépannage BTP, levée de réserves, reprises techniques et corrections avant livraison.",
          },
        },
      ],
    },
    priceRange: "$$",
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
