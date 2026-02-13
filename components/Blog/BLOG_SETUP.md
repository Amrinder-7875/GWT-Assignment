# Blog Page Setup Instructions

## File Structure

Create the following folder structure in your Next.js app:

```
app/
├── Blog/
│   ├── page.jsx                    (BlogPage.jsx - the listing page)
│   └── [slug]/
│       └── page.jsx                (BlogPostPage.jsx - individual post page)
```

## Setup Steps

### 1. Create Blog Listing Page
**Location:** `app/Blog/page.jsx`
- Copy the contents from `BlogPage.jsx`
- This shows the grid of all blog posts

### 2. Create Individual Blog Post Page
**Location:** `app/Blog/[slug]/page.jsx`
- Copy the contents from `BlogPostPage.jsx`
- This shows individual blog posts with prev/next navigation

### 3. Update Your Navbar
Make sure your Blog link points to `/Blog`:

```jsx
{ name: "Blog", link: "/Blog" }
```

## Features

✅ **Blog Listing Page** (`/Blog`)
- Responsive 2-column grid layout
- Image hover effects
- Click on any post to view details
- "Read More" button

✅ **Individual Blog Post Page** (`/Blog/blog-post-one`)
- Clean, centered layout matching your design
- Date displayed at top
- Large title
- Content paragraphs
- Previous/Next navigation at bottom
- Working navigation between posts

✅ **Navigation**
- Previous post button (left)
- Next post button (right)
- First post: no previous button
- Last post: no next button

## Customization

### To add your own blog posts:

Edit the `blogPosts` array in both files:

```jsx
const blogPosts = [
  {
    id: 1,
    title: "Your Blog Title",
    date: "MAR 11",
    slug: "your-blog-slug",  // Used in URL
    image: "/path/to/image.jpg",
    content: `Your blog content here...
    
    Multiple paragraphs separated by blank lines...`
  },
  // Add more posts...
];
```

### To use your own images:
1. Place images in `public/images/blog/`
2. Update image paths: `image: "/images/blog/your-image.jpg"`

## Routing

- `/Blog` - Shows all blog posts
- `/Blog/blog-post-one` - Shows "Blog Post One"
- `/Blog/blog-post-two` - Shows "Blog Post Two"
- etc.

The navigation automatically works between posts!
