import React from "react";
import { BlogCard } from "../components/BlogCard";
import { useState } from "react";
import { useEffect } from "react";

export const Blogs = () => {
  const [isLoading, setLoading] = useState(true);
  const serverLink = "http://localhost:3000/hopeland-systems/articles";
  const [articles, setArticles] = useState([]);
  const [imageCount, setImageCount] = useState(0);
  // when the second component is an empty that means that the fetch happens when you click the blog button
  // if you want to refetch with a button you should create a function that you can use onclick and useEffect

  useEffect(() => {
    if (imageCount == articles.length) {
      setLoading(false);
    }
  }, [imageCount]);

  useEffect(() => {
    fetch(serverLink)
      .then((res) => res.json())
      .then((json) => {
        setArticles(json);
      });
  }, []);
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  // If the admin is not logged in, the url path is different
  let startPath = "/blogs/";
  // const admin = ReactSession.get("admin");

  // if (admin == "LoggedIn") {
  //   startPath = "/admin/blogs/";
  // }

  return (
    <div className="bg-gray-800 flex h-fit">
      <div className="bg-gray-800 max-w-screen-xl px-4 py-16 mx-auto lg:items-center">
        <div class="mx-auto text-center">
          <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-10">
            {articles.map((article) => (
              <BlogCard
                title={article.title}
                description={article.description}
                image={article.imageUrl}
                date={article.createdAt}
                href={startPath + article.slug}
                setImageCount={setImageCount}
                imageCount={imageCount}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};