import type { MetadataRoute } from "next";
import { SITE_URL } from "./seoConfig";

export const dynamic = "force-static";

const lastModified = new Date("2026-05-28");

const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/toopilates/", priority: 0.95, changeFrequency: "monthly" },
  { path: "/branches/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/branches/bands/", priority: 0.75, changeFrequency: "monthly" },
  { path: "/branches/masterclass/", priority: 0.75, changeFrequency: "monthly" },
  { path: "/branches/reformer/", priority: 0.75, changeFrequency: "monthly" },
  { path: "/branches/stick/", priority: 0.75, changeFrequency: "monthly" },
  { path: "/branches/suspension/", priority: 0.75, changeFrequency: "monthly" },
  { path: "/coachs/", priority: 0.85, changeFrequency: "monthly" },
  { path: "/certifiedInstructor/", priority: 0.85, changeFrequency: "monthly" },
  { path: "/pedagogicalFramework/", priority: 0.85, changeFrequency: "monthly" },
  { path: "/livret/", priority: 0.75, changeFrequency: "monthly" },
  { path: "/planning/", priority: 0.8, changeFrequency: "weekly" },
  { path: "/accueil/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact/", priority: 0.6, changeFrequency: "yearly" },
  { path: "/mentionsLegales/", priority: 0.3, changeFrequency: "yearly" },
  {
    path: "/politiqueDeConfidentialite/",
    priority: 0.3,
    changeFrequency: "yearly",
  },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}