import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleComments, postComment } from "../../api";
import { CommentCard } from "./CommentCard";

export const Comments = () => {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState("");
  const [userCommentFeedback, setUserCommentFeedback] = useState("");

  useEffect(() => {
    getArticleComments(article_id)
      .then((commentData) => {
        setComments(commentData);
        setLoading(false);
      })
      .catch(() => {
        setUserCommentFeedback("Error loading comments.");
        setLoading(false);
      });
  }, [article_id]);

  if (loading) {
    return <p>Loading comments...</p>;
  }

  const handleAddComment = (e) => {
    e.preventDefault();
    const hardcodedUser = "jessjelly";

    const tempComment = {
      comment_id: Date.now(),
      body: newComment,
      article_id,
      author: hardcodedUser,
      votes: 0,
      created_at: new Date().toISOString(),
    };

    setComments((currComments) => [tempComment, ...currComments]);
    setUserCommentFeedback("Posting your comment...");
    setNewComment("");

    postComment(article_id, hardcodedUser, newComment)
      .then((postedComment) => {
        setComments((currComments) => {
          return currComments.map((comment) =>
            comment.comment_id === tempComment.comment_id
          ? { ...postedComment, comment_id: postedComment.comment_id }
          : comment
          );
        });
        setUserCommentFeedback("Comment posted successfully!");
      })
      .catch((err) => {
        console.log(err)
        setComments((currComments) =>
          currComments.filter(
            (comment) => comment.comment_id !== tempComment.comment_id
          )
        );
        setUserCommentFeedback("Error posting your comment. Please try again.");
      });
  };

  return (
    <article className="comments">
      <h2>Comments</h2>
      <p>{comments.length} readers have commented about this article</p>
      <form className="comment-form"onSubmit={handleAddComment}>
        <label id="comment-prompt" htmlFor="comment-input">
          Comment:
          <textarea
            id="comment-input"
            required
            placeholder="Type here"
            value={newComment}
            onChange={(e) => {
              return setNewComment(e.target.value);
            }}
          ></textarea>
        </label>
        <button type="submit" id="comment-button">
          Add your comment
        </button>
      </form>
      {userCommentFeedback && <p>{userCommentFeedback}</p>}
      {comments.map((comment) => {
        return <CommentCard comment={comment} key={comment.comment_id} />;
      })}
    </article>
  );
};

