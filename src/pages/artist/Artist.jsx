import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Album from "../../components/album/Album.jsx";
import Spinner from "../../components/spinner/Spinner.jsx";

import { fetchArtistAlbumsAsyncStart } from "../../redux/artistAlbums/artistAlbumsAction";

const Artist = ({ artistState, fetchArtistAlbumsAsyncStart, match }) => {
  const {
    artistAlbums: { albums, title },
    isFetching,
  } = artistState;
  const id = match.params.id;
  useEffect(() => {
    fetchArtistAlbumsAsyncStart(id);
  }, []);
  return (
    <div className="albums">
      <div className="albums__container">
        {!isFetching ? (
          albums &&
          albums.map((album) => (
            <Album key={album.id} album={album} artist={title} inArtist />
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  artistState: state.artist,
});

const mapDispatchToProps = (dispatch) => ({
  fetchArtistAlbumsAsyncStart: (id) =>
    dispatch(fetchArtistAlbumsAsyncStart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Artist));
