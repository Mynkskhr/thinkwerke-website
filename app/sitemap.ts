// app/sitemap.ts
import { services } from "@/lib/services";

export default function sitemap() {
  const base = "https://www.thinkwerke.com";

  const serviceUrls = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/services`, lastModified: new Date() },
    ...serviceUrls,
  ];
}

