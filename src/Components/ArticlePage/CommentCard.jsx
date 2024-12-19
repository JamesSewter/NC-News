import { convertDate, addEmoji } from "../../utils/utils";
import { deleteComment } from "../../api";
import { useState } from "react";

export const CommentCard = ({ comment }) => {
  const { comment_id, body, article_id, author, votes, created_at } = comment;
  const date = convertDate(created_at);
  const emoji = addEmoji(votes);
  const [deleteCommentFeedback, setDeleteCommentFeedback] = useState("");

  const handleDeleteComment = (e) => {
    e.preventDefault();

    setDeleteCommentFeedback("Comment deleting taking place!");
    deleteComment(comment_id)
      .then(() => {
        //let user know comment deleted
        setDeleteCommentFeedback("Your comment was succesfully deleted");
      })
      .catch((err) => {
        console.log(err);
        setDeleteCommentFeedback(
          "Oh no - there was an error deleting your comment"
        );
      });
  };

  return (
    <article className="comment-card">
      {deleteCommentFeedback ? (
        <p>{deleteCommentFeedback}</p>
      ) : (
        <ul>
          <li>
            <h3>{comment.author}</h3>
            <p className="comment-body">{body}</p>
          </li>
          <p>{emoji}</p>
          <p>Posted: {date}</p>
          {author === "jessjelly" ? (
            <button onClick={handleDeleteComment}>Delete comment</button>
          ) : null}
        </ul>
      )}
    </article>
  );
};
