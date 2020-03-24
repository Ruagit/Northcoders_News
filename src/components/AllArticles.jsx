import React, { Component } from "react";
import Loader from "./Loader";
import ArticleCard from "./ArticleCard.jsx";
import * as api from "../Utils/api";
import "../App.css";
import SortArticles from "./SortArticles";

class AllArticles extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  getArticles = (sort_by, order) => {
    api.fetchArticles(this.props.slug, sort_by, order).then(articles => {
      this.setState({ articles, isLoading: false });
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
    return (
      <>
        <SortArticles getArticles={this.getArticles} />
        <main className={"main"}>
          {this.state.articles.map(article => {
            return <ArticleCard key={article.article_id} {...article} />;
          })}
        </main>
      </>
    );
  }
}

export default AllArticles;
