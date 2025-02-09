import { MetadataRoute } from "next";
import { metaData } from "config";
import { getBlogPosts } from "@lib/posts";

const BaseUrl = metaData.baseUrl.endsWith("/")
  ? metaData.baseUrl
  : `${metaData.baseUrl}/`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getBlogPosts();

  let data = blogs.map((post) => ({
    url: `${BaseUrl}blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ["", "blog", "projects", "photos"].map((route) => ({
    url: `${BaseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...data];
}
