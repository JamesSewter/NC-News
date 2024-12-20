import { getTopics } from "../../api";
import { useState, useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import { Topic } from "./Topic";
import { ArticleCard } from "./ArticleCard";
import { capitaliseFirstLetter } from "../../utils/utils";

export const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [userFeedback, setUserFeedback] = useState("");

  useEffect(() => {
    setUserFeedback("Topics loading...");
    getTopics()
      .then((topicsData) => {
        setUserFeedback("");
        setTopics(topicsData);
      })
      .catch(() => {
        setUserFeedback("Oh no - there was an error loading Topics");
      });
  }, []);

  return (
    <nav>
      {userFeedback ? (
        <h3>{userFeedback}</h3>
      ) : (
        <ul>
          {topics.map((topic) => {
            return (
              <li key={topic.slug}>
                <Link to={`/articles?topic=${topic.slug}`}>
                  {capitaliseFirstLetter(topic.slug)}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};
