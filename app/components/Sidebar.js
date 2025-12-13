import Link from "next/link";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";
import { FaLocationDot } from "react-icons/fa6";

export default function Sidebar({
  tourGuides,
  articles,
  currentId,
  currentAuthor,
}) {
  const filteredArticles = articles.filter((item) => item.id !== currentId);
  const filteredGuides = tourGuides.filter(
    (guide) => guide.name !== currentAuthor
  );

  return (
    <div className="w-full lg:w-[300px] mt-2">
      {/* Explore More */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-gray-600">
          Explore more
        </h3>
        <div className="flex flex-col gap-2 mt-10">
          {filteredArticles
            .slice(0, 3)
            .map(({ id, image, title, author, date, content }) => (
              <Link
                key={id}
                href={`/article/${id}`}
                className="group overflow-hidden transition-all duration-300 bg-white"
              >
                {/* Image */}
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mt-1 w-full">
                    <span className="text-sm font-bold">{author}</span>
                    <div className="w-px h-4 bg-gray-400"></div>
                    <span className="text-gray-400 text-xs lg:text-md">
                      {date}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-3 line-clamp-2 text-sm lg:text-md">
                    {content[0]}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>

      {/* Tour Guides */}
      <div className="mt-15">
        <h3 className="font-semibold text-lg mb-4 text-gray-800">
          Tour Guides
        </h3>
        <div className="space-y-4 mt-5">
          {filteredGuides.map(({ name, image, address, rating }, i) => (
            <div key={i}>
              <div className="flex flex-col justify-between">
                {/* Guide Info */}
                <div className="flex items-center gap-3">
                  <Image
                    src={image}
                    alt={name}
                    width={60}
                    height={60}
                    className="object-cover rounded-full"
                  />
                  <div>
                    <p className="font-medium">{name}</p>
                    <div className="flex items-start gap-1">
                      <FaLocationDot />
                      <p className="text-sm text-gray-500">{address}</p>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-2">
                  <div className="shrink-0 rating-inline">
                    <Rating initialValue={rating} size={20} readonly />
                  </div>
                  <span className="mt-1 font-semibold text-gray-800">
                    ({parseFloat(rating).toFixed(1)})
                  </span>
                </div>
              </div>

              {/* Border only if NOT last item */}
              {i !== tourGuides.length - 1 && (
                <div className="mt-5 border-t border-gray-100"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
