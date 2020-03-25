import React, { Component } from "react";
import Loader from "./Loader";
import ArticleCard from "./ArticleCard.jsx";
import * as api from "../Utils/api";
import "../App.css";
import SortArticles from "./SortArticles";
import ErrorHandling from "./ErrorHandling";

class AllArticles extends Component {
  state = {
    articles: [],
    isLoading: true,
    error: null
  };

  getArticles = (sort_by, order) => {
    api
      .fetchArticles(this.props.slug, sort_by, order)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(error => {
        const status = error.response.status;
        const message = error.response.data.msg;
        this.setState({ error: { status, message }, isLoading: false });
      });
  };

  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.slug !== this.props.slug) {
      this.getArticles();
    }
  }

  render() {
    if (this.state.isLoading) return <Loader />;
    if (this.state.error) return <ErrorHandling {...this.state.error} />;
    return (
      <>
        <SortArticles getArticles={this.getArticles} />
        <main className={"main"}>
          {this.state.articles.map(article => {
            return (
              <ArticleCard
                key={article.article_id}
                {...article}
                currentUser={this.props.currentUser}
              />
            );
          })}
        </main>
      </>
    );
  }
}

export default AllArticles;
