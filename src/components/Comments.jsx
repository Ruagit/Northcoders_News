import React, { Component } from "react";
import * as api from "../Utils/api";
import Loader from "./Loader";
import "../App.css";

class Comments extends Component {
  state = {
    comments: [],
    isLoading: true
  };

  getComments = () => {
    api.fetchComments(this.props.article_id).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  };

  componentDidMount() {
    this.getComments();
  }

  render() {
    if (this.state.isLoading) return <Loader />;
    return (
      <>
        <article className="commentsarticle">
          {this.state.comments.map((comment, i) => {
            const date = new Date(comment.created_at).toDateString();
            return (
              <>
                <section className="commentsbody" key={i}>
                  <h6>
                    {comment.author}, {date}, Votes {comment.votes}
                  </h6>
                  <p>{comment.body}</p>
                </section>
              </>
            );
          })}
        </article>
      </>
    );
  }
}

export default Comments;

/*{this.state.comments.map(({author,body, created_at, votes}) =>
            {const date = new Date(created_at).toDateString()}
            
            )}*/
