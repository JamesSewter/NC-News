import { useEffect, useState } from "react";
import { getArticles } from "../../api";

export const useArticles = (initialTopic = null, initialSortBy = "created_at", initialOrder = "desc") => {
  const [articles, setArticles] = useState([]);
  const [userFeedback, setUserFeedback] = useState("");
  const [sortBy, setSortBy] = useState(initialSortBy);
  const [order, setOrder] = useState(initialOrder);
  const [topic, setTopic] = useState(initialTopic);

  useEffect(() => {
    setUserFeedback(`Articles ${topic ? `on ${topic}` : ""} loading...`);
    getArticles(topic, sortBy, order)
      .then((articleData) => {
        setArticles(articleData);
        setUserFeedback("");
      })
      .catch(() => {
        setUserFeedback(
          `Oh no - articles ${topic ? `on ${topic}` : ""} failed to load - please try again`
        );
      });
  }, [topic, sortBy, order]);

  return { articles, userFeedback, setSortBy, setOrder, setTopic, sortBy, order };
};
