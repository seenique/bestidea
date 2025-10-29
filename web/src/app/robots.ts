import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const base = siteUrl.startsWith("http") ? siteUrl : `https://${siteUrl}`;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/_next", "/api"],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}




