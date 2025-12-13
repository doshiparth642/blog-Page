"use client";
import { useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 px-4">
      <div className="max-w-lg w-full text-center bg-white rounded-2xl shadow-xl p-8">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
          <span className="text-4xl font-bold text-gray-400">404</span>
        </div>

        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Page not found
        </h1>

        <p className="text-gray-500 mb-8">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center justify-center cursor-pointer gap-2 rounded-xl border border-gray-200 px-6 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
          >
            <FaArrowLeftLong className="h-4 w-4" />
            Go Back
          </button>
          <button
            onClick={() => router.push("/")}
            className="inline-flex items-center justify-center rounded-xl cursor-pointer bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
}
