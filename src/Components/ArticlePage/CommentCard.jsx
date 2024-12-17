import { convertDate, addEmoji } from "../../utils/utils";

export const CommentCard = ({comment}) => {
 
  const {comment_id, body, article_id, author, votes, created_at} = comment
const date = convertDate(created_at)
const emoji = addEmoji(votes)

  return (
    <div className="comment-card">
      <ul>
        <li><h3>{comment.author}</h3>
        <p className="comment-body">{body}</p></li>
        <p>{emoji}</p>
        <p>Posted: {date}</p>
      </ul>
      

    </div>
  );
};

/* [
{
"comment_id": 89,
"body": "Esse et expedita harum non. Voluptatibus commodi voluptatem. Minima velit suscipit numquam ea. Id vitae debitis aut incidunt odio quo quam possimus ipsum.",
"article_id": 1,
"author": "cooljmessy",
"votes": 2,
"created_at": "2020-10-24T07:08:00.000Z"
},
{
"comment_id": 86,
"body": "Et explicabo dignissimos officia dolore rerum aliquam corrupti. Culpa corporis earum et earum officia a est atque at. Quidem quo recusandae delectus autem possimus blanditiis optio. Sed culpa culpa. Exercitationem nemo aspernatur alias ut qui.",
"article_id": 1,
"author": "tickle122",
"votes": 14,
"created_at": "2020-10-04T02:03:00.000Z"
} */