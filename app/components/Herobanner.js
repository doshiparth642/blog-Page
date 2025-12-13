import Image from "next/image";
import Link from "next/link";

export default function HeroBanner({ article }) {
  const { title, image } = article;

  return (
    <div className="w-full mt-15 px-5 lg:p-0">
      <h5 className="text-gray-500 text-xs sm:text-sm md:text-base text-center sm:text-center tracking-wide">
        <Link
          href="/"
          className="text-black font-semibold hover:underline hover:text-blue-600"
        >
          HOME
        </Link>{" "}
        / ARTICLES / {article.author}
      </h5>

      <h1 className="text-center text-3xl font-semibold mt-2 leading-tight">
        {title}
      </h1>

      <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] mt-15">
        <Image src={image} alt={title} fill priority className="object-cover" />
      </div>
    </div>
  );
}
