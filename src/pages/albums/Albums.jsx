import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import queryString from "query-string";

import "./albums.scss";

import Album from "../../components/album/Album";
import { fetchAlbumsAsyncStart } from "../../redux/albums/albumsActions";
import Spinner from "../../components/spinner/Spinner";

const Albums = ({ albumsStore, fetchAlbumsAsyncStart, location, search }) => {
  const { albums, isFetching } = albumsStore;
  useEffect(() => {
    const limit = queryString.parse(location.search).limit || 10;
    console.log(limit);
    const input = search || "";
    fetchAlbumsAsyncStart(limit, input);
  }, [search]);
  return (
    <div className="albums">
      <div className="albums__container">
        {!isFetching ? (
          albums &&
          albums.map((album) => (
            <Album key={album.id} album={album} artist={album.artist.title} />
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  albumsStore: state.albums,
  search: state.searchText.input,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAlbumsAsyncStart: (limit, input) =>
    dispatch(fetchAlbumsAsyncStart(limit, input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Albums));
