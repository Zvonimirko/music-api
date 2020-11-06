import React from "react";
import { Link } from "react-router-dom";

const Album = ({ album }) => {
  return (
    <div className="album">
      <div>
        <p>{album.title}</p>
        <Link to={`artist/${album.id}`}>
          <h3>{album.title}</h3>
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default Album;
