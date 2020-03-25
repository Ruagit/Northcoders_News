import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import AllArticles from "./components/AllArticles";
import BodyCard from "./components/BodyCard";
import Users from "./components/Users";
import ErrorHandling from "./components/ErrorHandling";
function App() {
  // state:{
  //   user: ''
  // }

  return (
    <div className="App">
      <Title />
      <Navbar />

      <Router>
        <Users path="/" />
        <AllArticles path="/:currentUser/articles" />
        <AllArticles path="/articles/topic/:slug" />
        <BodyCard path="/articles/:article_id/*" />
        <ErrorHandling default />
      </Router>
    </div>
  );
}

export default App;
