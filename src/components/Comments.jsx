import React, { Component } from "react";
import * as api from "../Utils/api";
import Loader from "./Loader";
import ErrorHandling from "./ErrorHandling";
import "../App.css";
import CommentVotes from "./CommentVotes";

class Comments extends Component {
  state = {
    comments: [],
    isLoading: true,
    error: null,
    body: ""
  };

  getComments = () => {
    if (this.props.comment_count > 0) {
      api
        .fetchComments(this.props.article_id)
        .then(comments => {
          this.setState({ comments, isLoading: false });
        })
        .catch(error => {
          const status = error.response.status;
          const message = error.response.data.msg;
          this.setState({ error: { status, message }, isLoading: false });
        });
    } else {
      this.setState({ isLoading: false, error: null });
    }
  };
  componentDidMount() {
    this.getComments();
  }
  addComment = comment => {
    this.setState(currentState => {
      return { comments: [comment, ...currentState.comments] };
    });
  };
  handleChange = event => {
    const { value } = event.target;

    this.setState({ body: value });
  };
  handleClick = () => {
    api
      .postComment(
        this.props.article_id,
        this.props.currentUser,
        this.state.body
      )
      .then(comment => {
        this.addComment(comment);
      });
    this.setState({ body: "" });
  };

  delComment = id => {
    api.deleteComment(id).then(() => {
      this.getComments();
    });
  };

  render() {
    if (this.state.isLoading) return <Loader />;
    if (this.state.error) return <ErrorHandling {...this.state.error} />;
    const { body } = this.state;
    return (
      <>
        <section className="commentinput">
          <input
            className="cominput"
            placeholder="Your thoughts...."
            type="text"
            id="postComBody"
            value={body}
            required
            onChange={this.handleChange}
          />
          <button disabled={body.length <= 0} onClick={this.handleClick}>
            Add Comment
          </button>
        </section>

        <article className="commentsarticle" key={this.props.id}>
          {this.state.comments.map((comment, i) => {
            const date = new Date(comment.created_at).toDateString();
            console.log(comment, " comment");
            return (
              <section className="commentsbody" key={i}>
                <h6 key={comment.id}>
                  {comment.author}, {date}, Votes {comment.votes}
                </h6>
                <CommentVotes {...comment} />

                <p key={comment.comment_id}>{comment.body}</p>

                <button
                  className={"delbtn"}
                  disabled={this.props.currentUser !== comment.author}
                  onClick={event => {
                    this.delComment(comment.comment_id);
                  }}
                >
                  Delete
                </button>
              </section>
            );
          })}
        </article>
      </>
    );
  }
}

export default Comments;
