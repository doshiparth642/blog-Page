"use client";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { authors } from "../constants";
import { useState } from "react";

export default function AuthorCard({ initialAuthorId = 1 }) {
  const [currentIndex, setCurrentIndex] = useState(
    authors.findIndex((author) => author.id === initialAuthorId)
  );

  const handleNext = () => {
    if (currentIndex < authors.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const author = authors[currentIndex];

  return (
    <>
      <div className="border border-b mt-5 border-gray-100"></div>
      <div className="bg-white px-5 lg:px-10 rounded-lg mt-8 flex items-center justify-center flex-col text-center gap-5 w-full ">
        <h3 className="font-semibold text-lg">About {author.name}</h3>
        <Image
          src={author.image}
          alt={author.name}
          width={100}
          height={100}
          className="rounded-full"
        />
        <p className="text-gray-500 font-semibold text-lg italic">
          {author.bio}
        </p>
      </div>
      <div className="mt-10 border border-t border-gray-100"></div>
      <div className="flex justify-between items-center w-full mt-10">
        {/* Left Side */}
        <div className="flex flex-col gap-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex items-center gap-3 border px-3 py-1 flex-1 w-fit rounded cursor-pointer hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <FaArrowCircleLeft />
            Previous
          </button>
          {/* {prevAuthor && ( */}
          <p className="text-sm text-gray-600 mt-2 text-wrap">
            {author.prevTitle}
          </p>
          {/* )} */}
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-end gap-2">
          <button
            onClick={handleNext}
            disabled={currentIndex === authors.length - 1}
            className="flex items-center gap-3 border px-3 py-1 rounded flex-1 w-fit cursor-pointer hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
            <FaArrowCircleRight />
          </button>
          {/* {nextAuthor && ( */}
          <p className="text-sm text-gray-600 mt-2 text-wrap text-right">
            {author.nextTitle}
          </p>
          {/* )} */}
        </div>
      </div>
    </>
  );
}
