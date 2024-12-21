import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import { Routes, Route, useSearchParams } from "react-router-dom";

import { ArticleList } from "./ArticleList";
import { Topics } from "./Topics";
import { Topic } from "./Topic";

export const Nav = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] =useState(null)
  const [searchParams] = useSearchParams();
  const topic = searchParams.get("topic");

  useEffect(() => {
    getArticles().then((articlesData) => {
      setArticles(articlesData);
      setLoading(false);
    }).catch(() => {
setError(true)
    });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Oh no - there was an error...</p>
  }

  return (
    <>
    <h2>Topics</h2>
      <Topics />
      <Routes>
        <Route path="/articles" element={<Topic />} key={topic} />
      </Routes>
      <h2>All Articles</h2>
      <ArticleList articles={articles} />
    </>
  );
};


