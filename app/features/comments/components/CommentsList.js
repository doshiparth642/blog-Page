import Image from "next/image";
import { Rating } from "react-simple-star-rating";

export default function CommentsList({ comments }) {
  return (
    <>
      <div className="mt-10 bg-white  rounded-lg">
        <h3 className="relative pl-4 font-semibold text-lg mb-6 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-3 before:w-1 before:rounded-full before:bg-gray-900">
          Comments
        </h3>

        {comments.length > 0 ? (
          comments.map(({ image, name, rating, date, comment }, i) => (
            <div key={i} className="w-full">
              <div className="flex items-start gap-5">
                <Image
                  src={image}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                  alt={name}
                />

                <div className="flex-1">
                  {/* Top row */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    {/* Name + Rating */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:gap-2">
                      <p className="font-medium">{name}</p>

                      <div className="flex items-center gap-1 mb-1">
                        <div className="shrink-0 rating-inline">
                          <Rating initialValue={rating} size={20} readonly />
                        </div>
                        <p className="font-light text-sm mt-2">
                          ({parseFloat(rating).toFixed(1)})
                        </p>
                      </div>
                    </div>

                    {/* Date – desktop right aligned */}
                    <p className="text-gray-500 text-sm mt-1 lg:mt-0">{date}</p>
                  </div>

                  {/* Comment */}
                  <p className="text-gray-700 mt-2">{comment}</p>
                </div>
              </div>

              {i !== comments.length - 1 && (
                <div className="border-t border-gray-200 my-5 w-full"></div>
              )}
            </div>
          ))
        ) : (
          <p className="mt-4 text-gray-600 text-center">No comments yet.</p>
        )}
      </div>
    </>
  );
}
