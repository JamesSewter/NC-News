import { convertDate, addEmoji } from "../../utils/utils";

export const CommentCard = ({comment}) => {
 
  const {comment_id, body, article_id, author, votes, created_at} = comment
const date = convertDate(created_at)
const emoji = addEmoji(votes)

  return (
    <article className="comment-card">
      <ul>
        <li><h3>{comment.author}</h3>
        <p className="comment-body">{body}</p></li>
        <p>{emoji}</p>
        <p>Posted: {date}</p>
      </ul>
    </article>
  );
};

