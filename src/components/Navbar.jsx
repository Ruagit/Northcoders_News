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
        <label>
          {this.props.currentUser
            ? `${this.props.currentUser}`
            : "Not yet logged in.."}
        </label>
        <Link to="/">Login</Link>
        <Link to={`/${this.props.currentUser}/articles`}>Home</Link>
        {this.state.topics.map(({ slug }) => {
          return (
            <Link
              key={slug}
              to={`${this.props.currentUser}/articles/topic/${slug}`}
            >
              {slug}
            </Link>
          );
        })}
      </nav>
    );
  }
}

export default Navbar;
