const axios = require("axios");

const fetchTopics = () => {
  return axios
    .get("https://jlb-news-app.herokuapp.com/api/topics")
    .then(({ data }) => {
      return data.topics;
    });
};

const fetchArticles = (slug, sort_by, order) => {
  console.log(sort_by, " in api");
  return axios
    .get("https://jlb-news-app.herokuapp.com/api/articles", {
      params: {
        topic: slug,
        sort_by: sort_by,
        order: order
      }
    })
    .then(({ data }) => {
      return data.articles;
    });
};

const fetchArticleByID = article_id => {
  return axios
    .get(`https://jlb-news-app.herokuapp.com/api/articles/${article_id}`)
    .then(({ data }) => {
      return data.article;
    });
};

const fetchComments = article_id => {
  return axios
    .get(
      `https://jlb-news-app.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data }) => {
      return data.comments;
    });
};

const postComment = (article_id, username, body) => {
  return axios
    .post(
      `https://jlb-news-app.herokuapp.com/api/articles/${article_id}/comments`,
      { username, body }
    )
    .then(({ data }) => {
      return data.comment;
    });
};
const deleteComment = comment_id => {
  console.log(comment_id, "api id");
  return axios.delete(
    `https://jlb-news-app.herokuapp.com/api/comments/${comment_id}`
  );
};

const patchCommentVotes = (votes, comment_id) => {
  return axios.patch(
    `https://jlb-news-app.herokuapp.com/api/comments/${comment_id}`,
    {
      votes
    }
  );
};

const patchArticlesVotes = (votes, article_id) => {
  return axios.patch(
    `https://jlb-news-app.herokuapp.com/api/articles/${article_id}`,
    { votes }
  );
};

module.exports = {
  fetchTopics,
  fetchArticles,
  fetchArticleByID,
  fetchComments,
  postComment,
  deleteComment,
  patchCommentVotes,
  patchArticlesVotes
};
