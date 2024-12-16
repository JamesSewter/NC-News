import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import { ArticleList } from "./ArticleList";

export const Nav = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articlesData) => {
      setArticles(articlesData);
    });
  }, []);
/* 
  const [topics, setTopics] = useState([]); */
  /* useEffect to getTopics and set
  default to all topics */

  return (
    <>
      <ArticleList articles={articles} /* topic={topic} */ />
    </>
  );
};
