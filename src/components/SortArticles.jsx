import React from "react";

const SortArticles = props => {
  const handleChange = event => {
    const sort_by = event.target.value;

    props.getArticles(sort_by);
  };

  return (
    <section>
      <label> Sort Articles By </label>
      <select name="type" onChange={handleChange}>
        <option value="">Select</option>
        <option value="created_at">Date Created</option>
        <option value="comment_count">Comments</option>
        <option value="votes">Votes</option>
      </select>
    </section>
  );
};

export default SortArticles;
