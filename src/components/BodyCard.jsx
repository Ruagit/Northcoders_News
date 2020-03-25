import React, { Component } from "react";
import * as api from "../Utils/api";
import Loader from "./Loader";
import { Link, Router } from "@reach/router";
import Comments from "./Comments";
import ArticleVotes from "./ArticleVotes";
import ErrorHandling from "./ErrorHandling";

import "../App.css";

class BodyCard extends Component {
  state = {
    article: {},

    isLoading: true
  };

  getArticleByID = () => {
    api
      .fetchArticleByID(this.props.article_id)
      .then(article => {
        this.setState({ article, isLoading: false });
      })
      .catch(error => {
        const status = error.response.status;
        const message = error.response.data.msg;
        this.setState({ error: { status, message }, isLoading: false });
      });
  };
  componentDidMount() {
    this.getArticleByID();
  }
  render() {
    if (this.state.isLoading) return <Loader />;
    if (this.state.error) return <ErrorHandling {...this.state.error} />;
    const {
      article_id,
      title,
      author,
      body,
      created_at,
      comment_count
    } = this.state.article;
    const date = new Date(created_at).toDateString();

    return (
      <>
        <article className="bodycard" key={article_id}>
          <h2>{title}</h2>
          <p>{body}</p>
          <h5>
            Written by {author}
            <br />
            {date}
            <br />
            <br />
            <Link
              to={`/${this.props.currentUser}/articles/${article_id}/comments`}
            >
              comments({comment_count})
            </Link>
            <br />
            <ArticleVotes {...this.state.article} />
          </h5>
        </article>
        <section>
          <Router>
            <Comments
              path="/comments"
              comment_count={this.state.article.comment_count}
              currentUser={this.props.currentUser}
            />
          </Router>
        </section>
      </>
    );
  }
}

export default BodyCard;
