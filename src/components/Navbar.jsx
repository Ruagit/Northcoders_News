import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../Utils/api";
import "../App.css";
import ErrorHandling from "./ErrorHandling";

class Navbar extends Component {
  state = { topics: [] };

  getTopics = () => {
    api
      .fetchTopics()
      .then(topics => {
        this.setState({ topics });
      })
      .catch(error => {
        const status = error.response.status;
        const message = error.response.data.msg;
        this.setState({ error: { status, message }, isLoading: false });
      });
  };

  componentDidMount() {
    this.getTopics();
  }

  render() {
    if (this.state.error) return <ErrorHandling {...this.state.error} />;

    return (
      <nav className={"nav"}>
        <Link to="/">
          <img
            alt="scholarimage"
            src="https://img.icons8.com/nolan/30/google-scholar.png"
          />
        </Link>
        <label>
          {this.props.currentUser
            ? `Logged in as ${this.props.currentUser}`
            : "Not yet logged in..."}
        </label>
        <Link
          disabled={this.props.set === false}
          to={`/${this.props.currentUser}/articles`}
        >
          <button disabled={this.props.set === false}>Home</button>
        </Link>
        {this.state.topics.map(({ slug }) => {
          return (
            <Link
              key={slug}
              to={`${this.props.currentUser}/articles/topic/${slug}`}
            >
              <button disabled={this.props.set === false}>{slug}</button>
            </Link>
          );
        })}
      </nav>
    );
  }
}

export default Navbar;
