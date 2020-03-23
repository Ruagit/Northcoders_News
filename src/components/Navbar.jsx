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
        <Link to="/">Home</Link>
        {this.state.topics.map(({ slug }) => {
          return (
            <Link key={slug} to={`/topic/${slug}`}>
              {slug}
            </Link>
          );
        })}
      </nav>
    );
  }
}

export default Navbar;
