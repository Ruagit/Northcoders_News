import React from "react";
import "../App.css";
import { Link } from "@reach/router";

const ArticleCard = ({
  article_id,
  title,
  topic,
  author,
  comment_count,
  votes,
  created_at,
  currentUser
}) => {
  const date = new Date(created_at).toDateString();
  return (
    <>
      <article className={"artCard"}>
        <Link to={`/${currentUser}/articles/${article_id}`}>
          <h2 className={"arth2"}>{title}</h2>
        </Link>
        <p>Article Info...</p>
        <ul>
          The Topic Category is {topic}
          <br />
          The author for this is {author}
          <br />
          {comment_count} Comments on this article
          <br />
          {votes} Votes for this one
          <br />
          Written on {date}
        </ul>
      </article>
    </>
  );
};

export default ArticleCard;
