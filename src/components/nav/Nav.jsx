import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./nav.scss";

import searchAction from "../../redux/search/searchAction";

const Nav = ({ searchAction, history, artistName }) => {
  const pathname = history.location.pathname;
  const handleChange = (e) => {
    searchAction(e.target.value);
  };

  return (
    <div className="nav">
      <div className="nav__container">
        <h2 className="nav__container__title">
          {pathname !== "/" ? artistName : "Album List"}
        </h2>
        <div>
          {pathname === "/" ? (
            <input
              className="nav__container__search"
              type="text"
              name="search"
              placeholder="Search"
              onChange={handleChange}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  artistName: state.artist.artistAlbums.title,
});

export default connect(mapStateToProps, { searchAction })(withRouter(Nav));
