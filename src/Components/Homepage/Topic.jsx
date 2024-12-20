import { useEffect, useState } from "react";
import { getArticlesByTopic, getArticles } from "../../api";
import { capitaliseFirstLetter } from "../../utils/utils";
import { ArticleCard } from "./ArticleCard";
import { Link, useSearchParams } from "react-router-dom";

export const Topic = () => {
  const [topicArticle, setTopicArticle] = useState([]);
  const [userFeedback, setUserFeedback] = useState("");
  const [searchParams] = useSearchParams();
  const topic = searchParams.get("topic");

  const formattedTopic = capitaliseFirstLetter(topic);
  useEffect(() => {
    if (topic) {
      setUserFeedback(`Articles on ${formattedTopic} loading...`);
      getArticlesByTopic(topic)
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
  }, [topic]);

  return (
    <>
      <h2>Articles on {formattedTopic}</h2>
      {userFeedback ? (
        <h3>{userFeedback}</h3>
      ) : (
        <ul className="article-list">
          {topicArticle.map((article) => {
            return (
              <Link
                to={`/article/${article.article_id}`}
                key={article.article_id}
              >
                <li>
                  <ArticleCard article={article} />
                </li>
              </Link>
            );
          })}
        </ul>
      )}
    </>
  );
};
