import React from "react";
import "../App.css";

const ErrorHandling = ({ message = "URL not found", status = "404" }) => {
  return (
    <main className={"errorhandlemain"}>
      <h2>Error Status: {status}</h2>
      <p>{`Error processing your request - ${message}`}</p>
    </main>
  );
};

export default ErrorHandling;
