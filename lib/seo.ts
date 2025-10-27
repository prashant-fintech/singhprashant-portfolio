import type { Metadata } from "next";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
  tags?: string[];
}

const siteConfig = {
  name: "Prashant Singh",
  description: "Risk Data Engineer & Quantitative Technologist with 10+ years in banking, fintech, and data engineering. Founder of FinPulse Labs, Bankopedia, and qfinbox.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://singhprashant.dev",
  ogImage: "/og-image.png",
  author: {
    name: "Prashant Singh",
    email: "hello@singhprashant.dev",
    twitter: "@singhprashant",
    linkedin: "prashant-singh-dev",
    github: "singhprashant",
  },
};

export function generateMetadata({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  url = siteConfig.url,
  type = "website",
  publishedTime,
  authors,
  tags,
}: SEOProps = {}): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const fullUrl = url.startsWith("http") ? url : `${siteConfig.url}${url}`;
  const fullImage = image.startsWith("http") ? image : `${siteConfig.url}${image}`;

  return {
    title: fullTitle,
    description,
    keywords: tags?.join(", "),
    authors: authors?.map(name => ({ name })) || [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type,
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title || siteConfig.name,
        },
      ],
      ...(type === "article" && {
        publishedTime,
        authors: authors || [siteConfig.author.name],
        tags,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [fullImage],
      creator: siteConfig.author.twitter,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}

export { siteConfig };