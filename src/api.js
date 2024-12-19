import axios from "axios";

const api = axios.create({
  baseURL: "https://northcoders-news-api-7cgk.onrender.com/api",
});

export const getArticles = () => {
  return api.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getArticle = (article_id) => {
  return api.get(`/article/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getArticleComments = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const updateArticleVotes = (article_id, newVote) => {
  return api
    .patch(`/articles/${article_id}`, { inc_votes: newVote })
    .then(({ data }) => {
      return data;
    });
};

export const postComment = (article_id, author, body) => {
  return api
    .post(
      `articles/${article_id}/comments`,
      { username: author, body: body },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(({ data }) => {
      return data.comment;
    });
};

export const deleteComment = (comment_id) => {
  return api.delete(`/comments/${comment_id}`).then(() => {
    console.log("comment deleted");
  });
};
