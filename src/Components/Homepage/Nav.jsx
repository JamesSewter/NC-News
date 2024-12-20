import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import { Routes, Route, Link, useSearchParams } from "react-router-dom";

import { ArticleList } from "./ArticleList";
import { Topics } from "./Topics";
import { Topic } from "./Topic";
import { Sort } from "./Sort";

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
      <Topics />
      <Routes>
        <Route path="/articles" element={<Topic />} key={topic} />
      </Routes>
      <Sort/>
      <h2>All Articles</h2>
      <ArticleList articles={articles} />
    </>
  );
};


