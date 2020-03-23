const axios = require("axios");

const fetchTopics = () => {
  return axios
    .get("https://jlb-news-app.herokuapp.com/api/topics")
    .then(({ data }) => {
      return data.topics;
    });
};

const fetchArticles = slug => {
  return axios
    .get("https://jlb-news-app.herokuapp.com/api/articles", {
      params: { topic: slug }
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
module.exports = {
  fetchTopics,
  fetchArticles,
  fetchArticleByID,
  fetchComments
};
