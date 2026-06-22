export const blogPosts = [
  {
    slug: "investing-in-commercial-property-in-mohali",
    title: "Top Benefits of Investing in Commercial Property in Mohali",
    description:
      "Mohali me commercial property me invest karne ke top benefits: connectivity, growing infrastructure, retail & office demand, aur long-term appreciation. Town Square Mohali.",
    category: "Investment",
    date: "June 10, 2026",
    dateTime: "2026-06-10",
    read: "5 min read",
    image: {
      src: "https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Commercial investment opportunity in Mohali",
    },
  },
  {
    slug: "commercial-real-estate-trends-2026",
    title: "Commercial Real Estate Trends to Watch in 2026",
    description:
      "2026 me commercial real estate trends: destinations, lifestyle hubs, growing markets like Mohali, visibility, aur future-ready projects. Town Square Mohali.",
    category: "Market Trends",
    date: "May 28, 2026",
    dateTime: "2026-05-28",
    read: "7 min read",
    image: {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      alt: "Commercial real estate market trends",
    },
  },
  {
    slug: "five-factors-before-buying-a-commercial-shop",
    title: "5 Factors to Check Before Buying a Commercial Shop",
    description:
      "Commercial shop buy karne se pehle 5 factors: location, footfall potential, future growth, amenities ecosystem, aur ROI. Town Square Mohali.",
    category: "Buying Guide",
    date: "May 15, 2026",
    dateTime: "2026-05-15",
    read: "4 min read",
    image: {
      src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      alt: "Commercial shop planning and investment",
    },
  },
];

export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostUrl(slug) {
  return `/blog/${slug}`;
}
