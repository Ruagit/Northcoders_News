import React, { Component } from "react";
import * as api from "../Utils/api";
import Loader from "./Loader";
import "../App.css";
import Votes from "./Votes"

class Comments extends Component {
  state = {
    comments: [],
    isLoading: true,
    author: "",
    body: ""
  };

  getComments = () => {
    api.fetchComments(this.props.article_id).then(comments => {
      this.setState({ comments, isLoading: false });
    });
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

    this.setState({ username: "grumpy19", body: value });
  };
  handleClick = () => {
    api
      .postComment(this.props.article_id, this.state.username, this.state.body)
      .then(comment => {
        this.addComment(comment);
        this.setState({ username: "", body: "" });
      });
  };

  delComment = id => {
    api.deleteComment(id).then(() => {
      this.getComments();
    });

    // .then(() => {
    //   this.setState(currentState => {
    //     return { comments: [...currentState.comments] };
    //   });
    // });
  };

  updateVotes = (votes) => {
    api.patchCommentVotes(votes, this.props.)
  }

  render() {
    if (this.state.isLoading) return <Loader />;
    return (
      <>
        <section className="commentinput">
          <input
            className="cominput"
            placeholder="Your thoughts...."
            type="text"
            id="postComBody"
            required
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>Add Comment</button>
        </section>

        <article className="commentsarticle" key={this.props.id}>
          {this.state.comments.map((comment, i) => {
            const date = new Date(comment.created_at).toDateString();
            return (
              <section className="commentsbody" key={i}>
                <h6 key={comment.id}>
                  {comment.author}, {date}, Votes {comment.votes}
                </h6>
                <Votes {...comment}/>
                <button>Agree</button>
                <button>Disagree</button>
                <p key={comment.comment_id}>{comment.body}</p>

                <button
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
