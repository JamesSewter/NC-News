import { convertTopic, convertDate } from "../../utils/utils";

export const Article = ({ article }) => {
  const { title, topic, author, body, created_at, votes, article_img_url } =
    article;

  const topicName = convertTopic(topic);
  const date = convertDate(created_at);

  return (
    <>
      <div className="article">
        <h2 className="article-title">{title}</h2>
        {/* make topic a link when topics done*/}
        <h3 className="topic-name">Topic: {topicName}</h3>
        <img className="article-img" src={article_img_url} alt="article img" />
        <h3 className="article-author-date">
          By <em>{author}</em> | Published: {date}
        </h3>
        <h2 className="repeated-article-title">{title}:</h2>
        <p className="article-body">{body}</p>
      </div>
      <div className="votes">
        <h3>Votes:</h3>
        <p>{votes} happy readers</p>
        <button>Upvote article</button>
      </div>
    </>
  );
};
