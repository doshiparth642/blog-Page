"use client";
import { use } from "react";
import { useSelector } from "react-redux";
import { article, sideBar } from "../../constants/index";
import HeroBanner from "@/app/components/Herobanner";
import ArticleContent from "@/app/components/ArticleContent";
import AuthorCard from "@/app/components/Authcard";
import Sidebar from "@/app/components/Sidebar";
import AddComment from "@/app/features/comments/components/AddComment";
import CommentsList from "@/app/features/comments/components/CommentsList";
import RelatedArticles from "@/app/features/articles/components/RelatedArticle";
import { selectCommentsByArticleId } from "@/app/redux/slices/commentsSlice";
import { notFound } from "next/navigation";

export default function ArticlePage({ params }) {
  const { id } = use(params);
  const articleId = Number(id);
  if (!/^[0-9]+$/.test(id)) {
    notFound();
  }
  const item = article.find((a) => a.id === articleId);

  const comments = useSelector((state) =>
    selectCommentsByArticleId(state, articleId)
  );

  if (!item) {
    return <div>Article not found</div>;
  }

  return (
    <>
      <HeroBanner article={item} />
      <div className="flex flex-col md:flex-row gap-8 items-start mx-auto py-5 px-5 lg:px-30">
        <div className="lg:flex-1">
          <ArticleContent article={item} />
          <AuthorCard author={item.author} />
          <CommentsList comments={comments} />
        </div>

        <Sidebar
          tourGuides={sideBar.tourGuides}
          articles={article}
          currentId={articleId}
          currentAuthor={item.author}
        />
      </div>
      <AddComment articleId={articleId} />
      <RelatedArticles currentArticleId={item.id} category={item.category} />
    </>
  );
}
