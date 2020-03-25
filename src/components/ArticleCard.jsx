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
      <article>
        <Link to={`/${currentUser}/articles/${article_id}`}>
          <h2>{title}</h2>
        </Link>
        <ul>
          Topic category: {topic}
          <br />
          Author: {author}
          <br />
          {comment_count} Comments
          <br />
          {votes} Votes
          <br />
          Written on {date}
        </ul>
      </article>
    </>
  );
};

export default ArticleCard;
