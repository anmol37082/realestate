import { absoluteUrl } from "../lib/site";

const routes = [
  {
    path: "/",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/contact",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/gallery",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/mission",
    changeFrequency: "monthly",
    priority: 0.7,
  },
];

export default function sitemap() {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
