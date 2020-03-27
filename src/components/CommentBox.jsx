import React, { Component } from "react";
import * as api from "../Utils/api";
import "../App.css";

class CommentBox extends Component {
  state = {
    body: ""
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
        this.props.addComment(comment);
      });
    this.setState({ body: "" });
  };
  render() {
    const { body } = this.state;
    return (
      <section className="commentinput">
        <h2>Comments...</h2>
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
    );
  }
}

export default CommentBox;
