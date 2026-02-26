import React from "react";

const ErrorMessage = ({ message }) => {
  return <div className="error-message">Error loading posts: {message}</div>;
};

export default ErrorMessage;
