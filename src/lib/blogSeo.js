import { absoluteUrl, siteName } from "./site";

const defaultImage = {
  url: absoluteUrl("/logo.png"),
  width: 1600,
  height: 900,
  alt: siteName,
};

export function buildBlogMetadata({
  title,
  description,
  path,
  keywords = [],
  image = defaultImage,
  publishedTime,
  modifiedTime,
}) {
  const imageUrl = typeof image === "string" ? absoluteUrl(image) : image.url;
  const imageAlt = typeof image === "string" ? title : image.alt ?? title;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "article",
      locale: "en_IN",
      url: absoluteUrl(path),
      siteName,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1600,
          height: 900,
          alt: imageAlt,
        },
      ],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function buildBlogPostingSchema({
  title,
  description,
  path,
  keywords = [],
  image = defaultImage,
  publishedTime,
  modifiedTime,
  articleSection,
  wordCount,
}) {
  const imageUrl = typeof image === "string" ? absoluteUrl(image) : image.url;
  const imageWidth = typeof image === "string" ? 1600 : image.width ?? 1600;
  const imageHeight = typeof image === "string" ? 900 : image.height ?? 900;
  const imageAlt = typeof image === "string" ? title : image.alt ?? title;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    keywords: keywords.join(", "),
    articleSection,
    inLanguage: "en-IN",
    url: absoluteUrl(path),
    image: {
      "@type": "ImageObject",
      url: imageUrl,
      width: imageWidth,
      height: imageHeight,
      caption: imageAlt,
    },
    author: {
      "@type": "Organization",
      name: siteName,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: absoluteUrl("/"),
      logo: {
        "@type": "ImageObject",
        url: defaultImage.url,
        width: defaultImage.width,
        height: defaultImage.height,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(path),
    },
    isAccessibleForFree: true,
    ...(publishedTime ? { datePublished: publishedTime } : {}),
    ...(modifiedTime ? { dateModified: modifiedTime } : {}),
    ...(wordCount ? { wordCount } : {}),
  };
}

export function buildBlogBreadcrumbSchema({ title, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: title,
        item: absoluteUrl(path),
      },
    ],
  };
}
