import { capitaliseFirstLetter, convertDate, addAdjective } from "../../utils/utils";
import { useState } from "react";
import { updateArticleVotes } from "../../api";

export const Article = ({ article }) => {
  const {
    article_id,
    title,
    topic,
    author,
    body,
    created_at,
    votes,
    article_img_url,
  } = article;

  const topicName = capitaliseFirstLetter(topic);
  const date = convertDate(created_at);
  const [votesAdded, setVotesAdded] = useState(0);
  const [error, setError] = useState(null);

  const handleUpvote = () => {
    setVotesAdded((currVotes) => {
      return currVotes + 1;
    });
    setError(null);
    updateArticleVotes(article_id, 1).catch((err) => {
      setLikesCount((currentLikesCount) => currentLikesCount - 1);
      setError("Your upvote was not successful. Please try again!");
    });
  };
  const handleDownvote = () => {
    setVotesAdded((currVotes) => {
      return currVotes - 1;
    });
    setError(null);
    updateArticleVotes(article_id, -1).catch((err) => {
      setLikesCount((currentLikesCount) => currentLikesCount - 1);
      setError("Your downvote was not successful. Please try again!");
    });
  };

  const totalVotes = votes + votesAdded;
  const readerInfo = addAdjective(totalVotes);

  return (
    <>
      <article className="article">
        <h2 className="article-title">{title}</h2>
        {/* make topic a link when topics done*/}
        <h3 className="topic-name">Topic: {topicName}</h3>
        <img className="article-img" src={article_img_url} alt="article img" />
        <h3 className="article-author-date">
          By <em>{author}</em> | Published: {date}
        </h3>
        <h2 className="repeated-article-title">{title}:</h2>
        <p className="article-body">{body}</p>
      </article>
      <article className="votes">
        <h3>Votes:</h3>
        <p>Did you enjoy reading?</p>
        <button onClick={handleUpvote}>Yes</button>
        <button onClick={handleDownvote}>No</button>
        {error ? <p>{error}</p> : null}
        <p>
          This article has <b>{Math.abs(totalVotes)} </b>
          {readerInfo}
        </p>
      </article>
    </>
  );
};
