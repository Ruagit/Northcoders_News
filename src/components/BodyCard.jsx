import React, { Component } from "react";
import * as api from "../Utils/api";
import Loader from "./Loader";

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
      title,
      author,
      body,
      created_at,
      comment_count,
      votes
    } = this.state.article;
    const date = new Date(created_at).toDateString();
    return (
      <section className="body">
        <h2>{title}</h2>
        <br />
        <p>{body}</p>
        <br />
        <h5>Written by {author}</h5>
        <h5>{date}</h5>
        <h6>
          comments({comment_count}) votes({votes}){" "}
        </h6>
      </section>
    );
  }
}

export default BodyCard;

// const BodyCard = article_id => {
//   console.log(article_id);

//   return <section>Hello</section>;
// };

// export default BodyCard;
