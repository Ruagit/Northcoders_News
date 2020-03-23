import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import AllArticles from "./components/AllArticles";
import BodyCard from "./components/BodyCard";
function App() {
  return (
    <div className="App">
      <Title />
      <Navbar />
      <Router>
        <AllArticles path="/" />
        <AllArticles path="/topic/:slug" />
        <BodyCard path="/:article_id" />
      </Router>
    </div>
  );
}

export default App;
