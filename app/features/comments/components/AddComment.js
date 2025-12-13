import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addComment } from "@/app/redux/slices/commentsSlice";
import SendIcon from "../../../../public/assets/sendIcon.svg";
const AddComment = ({ articleId }) => {
  const dispatch = useDispatch();

  // Define rating options for user selection
  const ratingOptions = [
    { value: 1, icon: "😡", title: "Very Bad" },
    { value: 2, icon: "😕", title: "Bad" },
    { value: 3, icon: "😐", title: "Average" },
    { value: 4, icon: "😊", title: "Good" },
    { value: 5, icon: "👍", title: "Excellent" },
  ];

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      comment: "",
      rating: 0,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Must be 2 characters or more")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      comment: Yup.string()
        .min(10, "Must be 10 characters or more")
        .required("Comment is required"),
      rating: Yup.number()
        .min(1, "Please select a rating")
        .required("Rating is required"),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      const newComment = {
        id: Date.now(),
        name: values.name,
        rating: values.rating,
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        comment: values.comment,
        image: "/assets/user1.jpg",
      };

      dispatch(addComment({ articleId, newComment }));
      toast.success("Comment added successfully!");
      resetForm();
      setSubmitting(false);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className=" bg-white px-6 rounded-lg  lg:px-30"
    >
      <h3 className="relative pl-4 font-semibold text-lg mb-6 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-3  before:rounded-full before:w-1 before:bg-gray-900">
        Add A Comment
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-bold text-gray-500"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="mt-1 p-2 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 h-12"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            ) : null}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-bold text-gray-500"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="mt-1 p-2 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 h-12"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>
        </div>
        <div>
          <label
            htmlFor="comment"
            className="block text-sm font-bold text-gray-500"
          >
            Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.comment}
            className="mt-1 block w-full rounded-md bg-gray-100 border-transparent p-5 focus:border-gray-500 focus:bg-white focus:ring-0 h-full"
            placeholder="Enter your comment..."
          ></textarea>
          {formik.touched.comment && formik.errors.comment ? (
            <div className="text-red-500 text-sm">{formik.errors.comment}</div>
          ) : null}
        </div>
      </div>
      <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex flex-col sm:flex-row items-center gap-2 p-2 justify-center sm:justify-between bg-gray-100 w-full rounded-md">
          <span className="text-sm font-bold text-gray-500 p-2">
            Rate The Usefulness Of The Article
          </span>
          <div className="relative flex gap-3">
            {ratingOptions.map(({ value, icon, title }) => (
              <button
                key={value}
                type="button"
                onClick={() => formik.setFieldValue("rating", value)}
                onBlur={() => formik.setFieldTouched("rating", true)}
                className={`group relative text-2xl cursor-pointer transition-all duration-200
        ${
          formik.values.rating === value
            ? "scale-125"
            : "opacity-70 hover:opacity-100 hover:scale-110"
        }`}
              >
                {/* Emoji */}
                <span>{icon}</span>

                {/* Tooltip */}
                <span
                  className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2
        rounded-md bg-black px-3 py-1 text-xs text-white opacity-0
        transition-all duration-200 group-hover:opacity-100 group-hover:-top-12
        whitespace-nowrap z-10"
                >
                  {title}

                  {/* Arrow */}
                  <span
                    className="absolute left-1/2 top-full -translate-x-1/2
          border-4 border-transparent border-t-black"
                  />
                </span>
              </button>
            ))}
          </div>
        </div>
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="bg-black text-white sm:px-5 py-3 justify-center rounded-2xl flex items-center gap-2 mt-4 md:mt-0 cursor-pointer w-full sm:w-auto text-center disabled:opacity-50"
        >
          <Image src={SendIcon} width={18} height={18} alt="Send" />
          {formik.isSubmitting ? "Sending..." : "Send"}
        </button>
      </div>
      {formik.touched.rating && formik.errors.rating ? (
        <div className="text-red-500 text-sm mt-2 text-right">
          {formik.errors.rating}
        </div>
      ) : null}
    </form>
  );
};

export default AddComment;
