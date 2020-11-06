import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import queryString from "query-string";

import Album from "../../components/album/Album";
import fetchAlbumsAsyncStart from "../../redux/albums/albumsActions";

const Albums = ({ albums, fetchAlbumsAsyncStart, location }) => {
  useEffect(() => {
    const limit = queryString.parse(location.search).limit || 10;
    fetchAlbumsAsyncStart(limit);
  }, []);
  return (
    <div className="albums">
      {albums
        ? albums.map((album) => <Album key={album.id} album={album.artist} />)
        : ""}
    </div>
  );
};

const mapStateToProps = (state) => ({
  albums: state.albums.albums,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAlbumsAsyncStart: (limit) => dispatch(fetchAlbumsAsyncStart(limit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Albums));
