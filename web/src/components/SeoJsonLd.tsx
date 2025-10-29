"use client";
export default function SeoJsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const site = siteUrl.startsWith("http") ? siteUrl : `https://${siteUrl}`;
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "bestidea",
    url: site,
    logo: `${site}/logo.svg`,
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "bestidea",
    url: site,
    potentialAction: {
      "@type": "SearchAction",
      target: `${site}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  );
}



