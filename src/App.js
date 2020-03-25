import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import AllArticles from "./components/AllArticles";
import BodyCard from "./components/BodyCard";
import Users from "./components/Users";
import ErrorHandling from "./components/ErrorHandling";

class App extends Component {
  state = {
    currentUser: ""
  };

  setUser = currentUser => {
    this.setState({ currentUser });
  };

  render() {
    return (
      <div className="App">
        <Title />
        <Navbar currentUser={this.state.currentUser} />

        <Router>
          <Users path="/" setUser={this.setUser} />
          <AllArticles
            path="/:currentUser/articles"
            currentUser={this.state.currentUser}
          />
          <AllArticles
            path="/:currentUser/articles/topic/:slug"
            currentUser={this.state.currentUser}
          />
          <BodyCard
            path="/:currentUser/articles/:article_id/*"
            currentUser={this.state.currentUser}
          />
          <ErrorHandling default />
        </Router>
      </div>
    );
  }
}

export default App;
