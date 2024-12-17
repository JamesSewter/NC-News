import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Article } from "./Article";
import { getArticle } from "../../api";
import { Comments } from "./Comments";
import { Suggested } from "./Suggested";

export const ArticlePage = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticle(article_id).then((articleData) => {
      setArticle(articleData);
      setLoading(false);
    });
  }, [article_id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Article article={article} />
      <Suggested />
      <Comments />
    </div>
  );
};
