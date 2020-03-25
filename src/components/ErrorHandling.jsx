import React from "react";

const ErrorHandling = ({ message = "URL not found", status = "404" }) => {
  return (
    <main>
      <h2>Error Status: {status}</h2>
      <p>{`Error processing your request - ${message}`}</p>
    </main>
  );
};

export default ErrorHandling;
