"use client";
import BlogPostPage from "@/components/Blog/BlogPostPage";
import { use } from "react";

export default function BlogPost({ params }) {
  const resolvedParams = use(params);
  return <BlogPostPage slug={resolvedParams.slug} />;
}
