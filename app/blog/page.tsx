import React from "react";
import Card from "@/components/blogpagecomponents/Card";
import blogdata from "@/components/blogpagecomponents/blogdata.json";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UOD Blogs",
  description:
    "Explore our insightful blog for expert perspectives, actionable tips, and engaging content on University of Debrecen",
  keywords: "University of Debrecen, Blogs, Blog description",
  robots: "index, follow",
  formatDetection: { telephone: false },
  viewport:
    "initial-scale=1.0, maximum-scale=1.0, user-scalable=0, width=device-width",
  authors: [
    {
      name: "University of Debrecen Southasia Regional Office",
      url: "https://www.facebook.com/UODHROSA/",
    },
  ],
  publisher: "https://www.facebook.com/UODHROSA/",
};

// CommonTypes.ts (or any other name you like)
export interface ArticleContent {
  heading: string;
  text: string;
  bullets?: string[];
}

interface Article {
  id: number;
  title: string;
  blogTitle: string;
  slug: string;
  author: string;
  authorpic: string;
  date: string;
  readTime: string;
  content: ArticleContent[];
  image: string;
  innerimage: string;
  comments: number;
  SEOdesc: string;
  SEOkeywords: string;
}

interface Article {
  id: number;
  title: string;
  blogTitle: string;
  slug: string;
  author: string;
  authorpic: string;
  date: string;
  readTime: string;
  content: ArticleContent[];
  image: string;
  innerimage: string;
  comments: number;
  SEOdesc: string;
  SEOkeywords: string;
}

const Page: React.FC = () => {
  const articles: Article[] = blogdata.articles;

  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="text-4xl my-10 text-[#f5b418] pb-4 font-bold">Blogs</h1>
      </div>
      <div className="flex item-center justify-center">
        <div className="grid font-nunito grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 md:px-8">
          {articles.map((article) => (
            <Link key={article.id} href={`/blog/blog-details/${article.slug}`}>
              <Card card={article} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
