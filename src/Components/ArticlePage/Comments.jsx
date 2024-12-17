import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleComments } from "../../api";
import { CommentCard } from "./CommentCard";

export const Comments = () => {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticleComments(article_id).then((commentData) => {
      setComments(commentData);
      setLoading(false);
    });
  }, [article_id]);

  if (loading) {
    return <p>Loading comments...</p>;
  }

  return (
    <article className="comments">
      <h2>Comments</h2>
      <p>{comments.length} readers have commented about this article</p>
      <button id="comment-button">Add your comment</button>
      {comments.map((comment) => {
        return <CommentCard comment={comment} />;
      })}
    </article>
  );
};



