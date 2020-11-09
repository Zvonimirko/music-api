import React from "react";

import "./notFound.scss";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__message">page not found 404</h1>
      <img
        className="not-found__image"
        src="http://i.stack.imgur.com/SBv4T.gif"
        alt="slowpoke moves"
        width="400px"
      />
    </div>
  );
};

export default NotFound;
