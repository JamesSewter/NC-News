import { ArticleCard } from "./ArticleCard";
import { Link } from "react-router-dom";

export const ArticleList = ({ articles, topic }) => {
  return (
    <>
      <ul className="article-list">
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <Link to={`/article/${article.article_id}`}>
                <ArticleCard article={article} />
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
