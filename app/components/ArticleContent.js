import Image from "next/image";

export default function ArticleContent({ article: currentArticle }) {
  return (
    <div className="bg-white rounded-lg w-auto">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between justify-center mb-4 gap-4">
        <div className="flex gap-4 items-center justify-center">
          <div className="w-12">
            <Image
              src={currentArticle.authorImage}
              alt={currentArticle.author}
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl sm:text-2xl text-gray-500 font-semibold leading-snug">
              {currentArticle.author}
            </h3>
          </div>
        </div>
        <div>
          <span className="text-sm sm:text-md text-gray-500 font-semibold">
            {currentArticle.date}
          </span>
        </div>
      </div>
      <div className="border border-b border-gray-100 mb-10 mt-5"></div>
      {currentArticle.content.map((p, i) => (
        <div className="flex lg:flex-row sm:flex-col gap-5" key={i}>
          <p className="text-black leading-relaxed mb-5 text-wrap">{p}</p>
        </div>
      ))}
      <div className="border border-t border-gray-100"></div>
      <div className="p-5 lg:p-8 text-wrap font-semibold italic leading-snug">
        <p>{currentArticle.experience}</p>
      </div>
      <div className="border border-b border-gray-100 mb-5 "></div>
      {currentArticle.content.map((it, index) => (
        <div className="flex flex-col sm:flex-row gap-5 mb-2" key={index}>
          <div className="leading-relaxed text-black ">
            <p>{it}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
