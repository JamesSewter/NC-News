import { convertTopic, convertDate } from "../../utils/utils";

export const ArticleCard = ({ article }) => {
  const {
    article_id,
    title,
    topic,
    article_img_url,
    author,
    created_at,
    votes,
    comment_count,
  } = article;
  const topicName = convertTopic(topic);
  const date = convertDate(created_at);

  return (
    <div className="article-card">
      <h2>{title}</h2>
      <h3>
        Topic: <b>{topicName}</b>
      </h3>
      <img
        className="article-card-img"
        src={article_img_url}
        alt="figure out how to make accessible"
      />
      <h3>
        {" "}
        Written by <em>{author}</em> | {date}
      </h3>
      <p>Votes: {votes} </p>
      <p>Comments: {comment_count}</p>
    </div>
  );
};


