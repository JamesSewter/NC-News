import {
  capitaliseFirstLetter,
  convertDate,
  addVoteAdjective,
} from "../../utils/utils";
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
  const [feedback, setFeedback] = useState(null);
  const [upvoteClicked, setUpvoteClicked] = useState(false);
  const [downvoteClicked, setDownvoteClicked] = useState(false);

  const handleUpvote = () => {
    if (!upvoteClicked) {
      setVotesAdded((currVotes) => {
        return currVotes + 1;
      });
      setUpvoteClicked(true);
      setFeedback(null);
      updateArticleVotes(article_id, 1).catch((err) => {
        setFeedback("Your upvote was not successful. Please try again!");
      });
    } else {
      setFeedback("You can't upvote twice here buddy!");
    }
  };

  const handleDownvote = () => {
    if (!downvoteClicked) {
      setVotesAdded((currVotes) => {
        return currVotes - 1;
      });
      setDownvoteClicked(true);
      setFeedback(null);
      updateArticleVotes(article_id, -1).catch((err) => {
        setFeedback("Your downvote was not successful. Please try again!");
      });
    } else {
      setFeedback("You can't downvote twice here buddy!");
    }
  };

  const totalVotes = votes + votesAdded;
  const readerInfo = addVoteAdjective(totalVotes);

  return (
    <>
      <article className="article">
        <h2 className="article-title">{title}</h2>
        <h3 className="topic-name">Topic: {topicName}</h3>
        <img className="article-img" src={article_img_url} alt="article img" />
        <h3 className="article-author-date">
          By <em>{author}</em> | Published: {date}
        </h3>
        <h2 className="repeated-article-title">{title}:</h2>
        <p className="article-body">{body}</p>
      </article>

      <article className="votes">
        <>
          <h3>Votes:</h3>
          {feedback ? (
            <>
              <p>{feedback}</p>
              <p>
                This article has <b>{Math.abs(totalVotes)}</b> {readerInfo}
              </p>
            </>
          ) : (
            <>
              <p>Did you enjoy reading?</p>
              <button onClick={handleUpvote}>Yes</button>
              <button onClick={handleDownvote}>No</button>
              <p>
                This article has <b>{Math.abs(totalVotes)}</b> {readerInfo}
              </p>
            </>
          )}
        </>
      </article>
    </>
  );
};
