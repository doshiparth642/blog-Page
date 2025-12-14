"use client";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectArticles } from "./redux/slices/articlesSlice";

export default function HomePage() {
  const articles = useSelector(selectArticles);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Latest Articles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {articles.map(({ id, image, title, author, date, content }) => (
          <Link
            key={id}
            href={`/article/${id}`}
            className="group rounded-xl overflow-hidden shadow hover:shadow-xl transition-all duration-300 bg-white"
          >
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold group-hover:text-blue-600 transition">
                {title}
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                By {author} • {date}
              </p>

              <p className="text-gray-600 mt-3 line-clamp-2">{content[0]}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
