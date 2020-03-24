import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../Utils/api";
import "../App.css";

class Navbar extends Component {
  state = { topics: [] };

  getTopics = () => {
    api.fetchTopics().then(topics => {
      this.setState({ topics });
    });
  };

  componentDidMount() {
    this.getTopics();
  }

  render() {
    return (
      <nav className={"nav"}>
        <label>User ????</label>
        <Link to="/">Login</Link>
        <Link to="/articles">Home</Link>
        {this.state.topics.map(({ slug }) => {
          return (
            <Link key={slug} to={`/articles/topic/${slug}`}>
              {slug}
            </Link>
          );
        })}
      </nav>
    );
  }
}

export default Navbar;
