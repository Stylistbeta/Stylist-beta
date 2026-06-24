import type { MetadataRoute } from "next";
import { professionalsRepository } from "@/lib/data";
import { siteUrl } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const professionals = await professionalsRepository.list();
  const staticRoutes = ["", "/search", "/join", "/pricing", "/privacy", "/terms"];

  return [
    ...staticRoutes.map((route) => ({url: `${siteUrl}${route}`, changeFrequency: "weekly" as const, priority: route === "" ? 1 : 0.7})),
    ...professionals.map((professional) => ({url: `${siteUrl}/professional/${professional.id}`, changeFrequency: "weekly" as const, priority: 0.8})),
  ];
}
