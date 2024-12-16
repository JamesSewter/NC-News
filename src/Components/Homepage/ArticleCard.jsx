export const ArticleCard = ({ article }) => {
  const topic = article.topic;
  const topicName = topic.split("");
  topicName[0] = topicName[0].toUpperCase();
  topicName.join("");

  return (
    <div className="article-card">
      <h2>{article.title}</h2>
      <h3>Topic: <b>{topicName}</b></h3>
      <img
        className="article-img"
        src={article.article_img_url}
        alt="figure out how to make accessible"
      />
      <h3>
        {" "}
        Written by <em>{article.author}</em> | {article.created_at.slice(0, 10)}
      </h3>
      <p>Votes: {article.votes} </p>
      <p>Comments: {article.comment_count}</p>
    </div>
  );
};

/* article_id": 34,
"title": "The Notorious MSG’s Unlikely Formula For Success",
"author": "grumpy19",
"topic": "cooking",
"created_at": "2020-11-22T11:13:00.000Z",
"votes": 0,
"article_img_url": "https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700",
"comment_count": "11" */
