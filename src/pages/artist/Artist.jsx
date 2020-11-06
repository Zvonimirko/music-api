import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Album from "../../components/album/Album.jsx";
import fetchArtistAlbumsAsyncStart from "../../redux/artistAlbums/artistAlbumsAction.js";

const Artist = ({ artistAlbums, fetchArtistAlbumsAsyncStart, match }) => {
  const { albums } = artistAlbums;
  const id = match.params.id;
  console.log(id);
  useEffect(() => {
    fetchArtistAlbumsAsyncStart(id);
  }, []);
  return (
    <div>
      <div className="albums">
        {albums
          ? albums.map((album) => <Album key={album.id} album={album} />)
          : ""}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  artistAlbums: state.artist.artistAlbums,
});

const mapDispatchToProps = (dispatch) => ({
  fetchArtistAlbumsAsyncStart: (id) =>
    dispatch(fetchArtistAlbumsAsyncStart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Artist));
