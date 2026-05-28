import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://toopilates.com";

  return [
    {
      url: baseUrl,
      lastModified: "2026-05-28",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/accueil`,
      lastModified: "2026-05-28",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/branches`,
      lastModified: "2026-05-28",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/coachs`,
      lastModified: "2026-05-28",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/certifiedInstructor`,
      lastModified: "2026-05-28",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/livret`,
      lastModified: "2026-05-28",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pedagogicalFramework`,
      lastModified: "2026-05-28",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/planning`,
      lastModified: "2026-05-28",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: "2026-05-28",
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/toopilates`,
      lastModified: "2026-05-28",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mentionsLegales`,
      lastModified: "2026-05-28",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/politiqueDeConfidentialite`,
      lastModified: "2026-05-28",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
