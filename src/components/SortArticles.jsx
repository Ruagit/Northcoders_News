import React from "react";

const SortArticles = props => {
  handleChange = event => {
    const input = event.target.value;
    console.log(input);
  };

  return (
    <section onChange={this.handleChange}>
      <label> Sort Articles By </label>
      <select name="type" id="type" onChange={this.handleChange}>
        <option value="created_at">Date Created</option>
        <option value="comment_count">Comments</option>
        <option value="votes">Votes</option>
      </select>
    </section>
  );
};

export default SortArticles;
