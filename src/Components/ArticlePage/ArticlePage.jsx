import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Article } from "./Article";
import { getArticle } from "../../api";
import { Comments } from "./Comments";

export const ArticlePage = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticle(article_id)
      .then((articleData) => {
        setArticle(articleData);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false)
        setError(true);
      });
  }, [article_id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  else if (error) {
    return (
      <div>
        <p>Oh no - there was an error loading this article.</p>
        <p>Please return to the NC-News homepage...</p>
      </div>
    );
  }

  return (
    <div>
      <Article article={article} />
      <Comments key={article_id} />
    </div>
  );
};
