"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "When You’re Functioning on the Outside but Struggling on the Inside",
      date: "3/11/19",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=600&fit=crop",
      slug: "blog-post-one"
    },
    {
      id: 2,
      title: "Burnout Isn’t Just Being Tired",
      date: "1/4/20",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop",
      slug: "blog-post-two"
    },
    {
      id: 3,
      title: "Why Past Experiences Still Affect You Today",
      date: "30/11/20",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
      slug: "blog-post-three"
    },
    {
      id: 4,
      title: "Letting Go of Perfectionism Without Losing Motivation",
      date: "19/10/21",
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=600&fit=crop",
      slug: "blog-post-four"
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--background)]">

      {/* Blog Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <Link href={`/Blog/${post.slug}`}>
                <div className="overflow-hidden rounded-none mb-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={600}
                    className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-[var(--text-color)] opacity-60">
                    {post.date}
                  </p>
                  <h2 className="text-2xl lg:text-3xl font-[var(--font-accent)] font-normal text-[var(--text-color)] tracking-tight">
                    {post.title}
                  </h2>
                  <button className="text-[var(--text-color)] underline hover:opacity-60 transition-opacity">
                    Read More
                  </button>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
