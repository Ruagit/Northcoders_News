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
  console.log(article_id, "api");
  return axios
    .get(`https://jlb-news-app.herokuapp.com/api/articles/${article_id}`)
    .then(({ data }) => {
      console.log(data.article, "data");
      return data.article;
    });
};
module.exports = { fetchTopics, fetchArticles, fetchArticleByID };
