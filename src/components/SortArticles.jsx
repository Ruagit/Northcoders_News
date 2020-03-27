import React from "react";

const SortArticles = props => {
  const handleChange = event => {
    const sort_by = event.target.value;

    props.getArticles(sort_by);
  };

  return (
    <section className={"sortmain"}>
      <label> Sort Articles By </label>
      <select name="type" onChange={handleChange}>
        <option value="">Select</option>
        <option value="created_at">Date Created</option>
        <option value="comment_count">Comments</option>
        <option value="votes">Votes</option>
      </select>

      <p>
        Hope you enjoy the selection of articles on Read It., just click on the
        article name to read it and leave it with a comment, and an agree or
        disagree! Have a look at at the links below
      </p>
      <ul>
        <li>
          <a href="https://devchat.tv/js-jabber/">
            Cools podcasts from JS-Jabber to go along with your coding articles
          </a>
        </li>

        <li>
          <a href="https://talksport.com/football/">
            Some football tips to go down with the latest articles, thanks
            talkSport
          </a>
        </li>
        <li>
          <a href="https://thefoodmedic.co.uk/">Help from the food medic!</a>
        </li>
      </ul>
    </section>
  );
};

export default SortArticles;
