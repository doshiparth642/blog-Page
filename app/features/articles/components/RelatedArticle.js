import Image from "next/image";
import Link from "next/link";
import { article as allArticles } from "../../../constants/index";

export default function RelatedArticles({ currentArticleId, category }) {
  // Filter for articles that are in the same category but are not the current article.
  const related = allArticles.filter((article) => {
    return (
      article.id !== currentArticleId && 
      article.category === category 
    );
  });

  // Filter for articles that are in a different category and are not the current article.
  const otherArticles = allArticles.filter(
    (article) =>
      article.id !== currentArticleId && 
      article.category !== category 
  );

  const articles = [...related, ...otherArticles].slice(0, 4);

  return (
    <div className="sm:mt-12 lg:mt-25 sm:bg-gray-100 p-5">
      <h2 className="text-center text-xl sm:text-4xl font-semibold mt-8 text-gray-700">
        Related articles
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:px-5 xl:px-30 mt-15">
        {articles.map(({ id, slug, image, title, excerpt, author }) => (
          <Link
            key={id}
            href={`/article/${id}`}
            className="grid gap-3 cursor-pointer transition-all duration-300"
          >
            {/* Responsive fixed image size */}
            <div className="w-full h-60 xl:h-80 overflow-hidden">
              <Image
                src={image}
                alt={title}
                width={300}
                height={320}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            <h4 className="font-semibold mt-2 transition-colors duration-300 text-gray-800">
              {title}
            </h4>

            <p className="text-md text-gray-500 font-body line-clamp-3">
              {excerpt}
            </p>

            <p className="text-md text-gray-700 font-semibold">{author}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
