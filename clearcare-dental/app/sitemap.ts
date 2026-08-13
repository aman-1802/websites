import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://clearcare-dental-ahmedabad.vercel.app",
      lastModified: new Date(),
    },
  ];
}
