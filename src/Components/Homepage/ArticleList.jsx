import { ArticleCard } from "./ArticleCard";

export const ArticleList = ({ articles, topic }) => {
  return (
    <>
      <ul className="article-list">
        {articles.map((article, index) => {
          return (
            <li key={index}>
              <ArticleCard article={article} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
