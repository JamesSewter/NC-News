import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import { ArticleList } from "./ArticleList";

import { Routes, Route, Link, useSearchParams } from "react-router-dom";
import { Topics } from "./Topics";
import { Topic } from "./Topic";

export const Nav = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const topic = searchParams.get("topic");

  useEffect(() => {
    getArticles().then((articlesData) => {
      setArticles(articlesData);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Topics />
      <Routes>
        <Route path="/articles" element={<Topic />} key={topic} />
      </Routes>
      <h2>Articles</h2>
      <ArticleList articles={articles} />
    </>
  );
};

//Make into links
//Format flex-wrap???
