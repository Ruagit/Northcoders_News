import React, { Component } from "react";
import * as api from "../Utils/api";
import Loader from "./Loader";
import { Link, Router } from "@reach/router";
import Comments from "./Comments";

import "../App.css";

class BodyCard extends Component {
  state = {
    article: {},

    isLoading: true
  };

  getArticleByID = () => {
    api.fetchArticleByID(this.props.article_id).then(article => {
      this.setState({ article, isLoading: false });
    });
  };
  componentDidMount() {
    this.getArticleByID();
  }
  render() {
    if (this.state.isLoading) return <Loader />;
    const {
      article_id,
      title,
      author,
      body,
      created_at,
      comment_count,
      votes
    } = this.state.article;
    const date = new Date(created_at).toDateString();

    return (
      <>
        <article className="bodycard" key={article_id}>
          <h2>{title}</h2>
          <br />
          <p>{body}</p>
          <br />
          <h5>Written by {author}</h5>
          <h5>{date}</h5>
          <h6>
            <Link to={`/articles/${article_id}/comments`}>
              comments({comment_count})
            </Link>
            votes({votes})
          </h6>
        </article>
        <section>
          <Router>
            <Comments path="/comments" />
          </Router>
        </section>
      </>
    );
  }
}

export default BodyCard;
