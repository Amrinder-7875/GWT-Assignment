"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "When You’re Functioning on the Outside but Struggling on the Inside",
    date: "MAR 11",
    slug: "blog-post-one",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1200&h=800&fit=crop",
    content: `Many people I work with appear capable, productive, and put-together on the outside. They meet deadlines, show up for others, and keep things moving forward. Yet internally, they feel exhausted, anxious, or constantly on edge.

This kind of experience is common among high-achieving, thoughtful adults. You may find yourself overthinking conversations, carrying tension in your body, or feeling unable to fully relax—even during moments that are supposed to be restful.

Therapy can offer a space to slow down and explore what’s happening beneath the surface. Together, we can work toward understanding the patterns that keep you feeling stuck and develop ways to feel more grounded, regulated, and connected to yourself.`
  },
  {
    id: 2,
    title: "Burnout Isn’t Just Being Tired",
    date: "APRIL 1",
    slug: "blog-post-two",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=800&fit=crop",
    content: `Burnout is often misunderstood as simple exhaustion. In reality, it’s a deeper state of chronic stress that affects both the mind and body. Many people notice irritability, difficulty sleeping, a sense of detachment, or feeling emotionally flat.

Rest alone doesn’t always resolve burnout, especially when the nervous system has been under pressure for a long time. For professionals and creatives who are used to pushing through, slowing down can feel uncomfortable or even unsafe.

Therapy can help you recognize how stress is showing up in your body, explore the beliefs that keep you overextended, and begin developing more sustainable ways of living and working—without losing what matters to you.`

  },
  {
    id: 3,
    title: "Why Past Experiences Still Affect You Today",
    date: "NOV 30",
    slug: "blog-post-three",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop",
    content: `Many people minimize their past by telling themselves it “wasn’t that bad” or that they should be over it by now. But experiences don’t need to be extreme to leave a lasting impact.

Earlier life experiences can shape how safe you feel in your body, how you relate to others, and how you respond to stress. These patterns often operate quietly, showing up as anxiety, emotional reactivity, or difficulty trusting yourself.

Trauma-informed therapy focuses on safety, pacing, and understanding both emotional and physical responses. The goal is not to relive the past, but to help your nervous system feel more settled in the present so you can move through life with greater ease and confidence.`

  },
  {
    id: 4,
    title: "Letting Go of Perfectionism Without Losing Motivation",
    date: "OCT 19",
    slug: "blog-post-four",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200&h=800&fit=crop",
    content: `Perfectionism often looks like dedication or high standards, but internally it can feel relentless. Many people describe a constant sense of pressure, fear of making mistakes, or difficulty feeling satisfied with their efforts.

For high achievers, the idea of easing up can feel risky—as if motivation or success might disappear. In reality, perfectionism often leads to burnout, anxiety, and disconnection from yourself.

Therapy can help you explore where these patterns began, develop a more compassionate inner dialogue, and find ways to stay engaged and capable without the constant self-criticism. Sustainable motivation comes from feeling supported, not pushed.`

  }
];


export default function BlogPostPage({ slug }) {
  const router = useRouter();
  // Find current post
  const currentIndex = blogPosts.findIndex(post => post.slug === slug);
  const currentPost = blogPosts[currentIndex];
  // Get previous and next posts
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  if (!currentPost) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-[var(--background)]">
     

      {/* Blog Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
        {/* Date */}
        <p className="text-xs tracking-widest text-[var(--text-color)] opacity-60 mb-8 text-center">
          {currentPost.date}
        </p>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[var(--font-accent)] font-normal text-[var(--text-color)] tracking-tight text-center mb-16">
          {currentPost.title}
        </h1>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          {currentPost.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-[var(--text-color)] leading-relaxed mb-6 text-lg">
              {paragraph}
            </p>
          ))}
        </article>
      </main>

      {/* Navigation Footer */}
      <footer className="border-t border-[var(--text-color)] border-opacity-10 pt-12 mt-20">
        <div className="max-w-full mx-auto px-4 sm:px-6 space-x-20 lg:px-12 flex items-center justify-between">
          {/* Previous Post */}
          {prevPost ? (
            <Link 
              href={`/Blog/${prevPost.slug}`}
              className="group flex items-center gap-3  hover:opacity-60 transition-opacity"
            >
              <svg 
                className="w-6 h-6 text-[var(--text-color)]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-xl lg:text-xl font-[var(--font-accent)] font-normal text-[var(--text-color)] tracking-tight">
                {prevPost.title}
              </span>
            </Link>
          ) : (
            <div></div>
          )}

          {/* Next Post */}
          {nextPost ? (
            <Link 
              href={`/Blog/${nextPost.slug}`}
              className="group flex items-center gap-3 hover:opacity-60 transition-opacity"
            >
              <span className="text-xl lg:text-xl font-[var(--font-accent)] font-normal text-[var(--text-color)] tracking-tight">
                {nextPost.title}
              </span>
              <svg 
                className="w-6 h-6 text-[var(--text-color)]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </footer>
    </div>
  );
}
