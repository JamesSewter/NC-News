import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import { capitaliseFirstLetter } from "../../utils/utils";
import { ArticleCard } from "./ArticleCard";
import { Link, useSearchParams } from "react-router-dom";

export const Topic = () => {
  const [topicArticle, setTopicArticle] = useState([]);
  const [userFeedback, setUserFeedback] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const topic = searchParams.get("topic");
  const sortBy = searchParams.get("sort_by") || "created_at";
  const order = searchParams.get("order") || "desc";

  const formattedTopic = capitaliseFirstLetter(topic);

  const handleSort = (newSortBy) => {
    setSearchParams({ topic, sort_by: newSortBy, order });
  };

  const handleOrder = (newOrder) => {
    setSearchParams({ topic, sort_by: sortBy, order: newOrder });
  };

  useEffect(() => {
    if (topic) {
      setUserFeedback(`Articles on ${formattedTopic} loading...`);
      getArticles(topic, sortBy, order)
        .then((articleData) => {
          setTopicArticle(articleData);
          setUserFeedback("");
        })
        .catch(() => {
          setUserFeedback(
            `Oh no - articles on ${formattedTopic} failed to load - please try again`
          );
        });
    }
  }, [topic, sortBy, order]);

  return (
    <>
      <h2>Articles on {formattedTopic}</h2>
      {userFeedback ? (
        <h3>{userFeedback}</h3>
      ) : (
        <>
          <div className="sorting-controls">
            <button onClick={() => handleSort("created_at")}>
              Sort by Date
            </button>
            <button onClick={() => handleSort("votes")}>Sort by Votes</button>
            <button
              onClick={() => handleOrder(order === "asc" ? "desc" : "asc")}
            >
              Order: {order === "asc" ? "Ascending" : "Descending"}
            </button>
          </div>

          <ul className="article-list">
            {topicArticle.map((article) => (
              <Link
                to={`/article/${article.article_id}`}
                key={article.article_id}
              >
                <li>
                  <ArticleCard article={article} />
                </li>
              </Link>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

