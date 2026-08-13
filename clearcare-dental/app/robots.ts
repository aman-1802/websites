import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://clearcare-dental-ahmedabad.vercel.app/sitemap.xml",
  };
}
