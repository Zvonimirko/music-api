import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

import "./album.scss";

import { setFavorite } from "../../redux/albums/albumsActions";
import { setFavoriteArtist } from "../../redux/artistAlbums/artistAlbumsAction";
import fetchUrls from "../../assets/urls";

const Album = ({ setFavorite, album, artist, inArtist, setFavoriteArtist }) => {
  const date = new Date(album.releaseDate);
  const year = date.getFullYear();

  let title;
  if (album.title.length > 35) {
    title = `${album.title.substring(0, 35)} ...`;
  } else {
    title = album.title;
  }
  const handleClick = () => {
    axios
      .patch(`${fetchUrls.albumsUrl}${album.id}`, {
        favorite: !album.favorite,
      })
      .then(() => {
        setFavorite(album.id);
        if (inArtist) {
          setFavoriteArtist(album.id);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="album">
      <div className="album__left">
        <img
          className="album__left__image"
          src={album.imageUrl}
          alt="album cover"
        />
        <div className="album__left__info">
          <h3 className="album__left__info__album-name">{title}</h3>
          {inArtist ? (
            <p className="album__left__info__artist-name">{artist}</p>
          ) : (
            <Link
              className="album__left__info__artist-name"
              to={`artist/${album.artistId}`}
            >
              <p>{artist}</p>
            </Link>
          )}
        </div>
      </div>
      <div className="album__right">
        <p>
          <span>Released:</span> {year}
        </p>
        <p>{album.price}</p>
        <button
          className={`${
            album.favorite ? "inverted" : ""
          } album__right__favorite-button`}
          onClick={handleClick}
        >
          {album.favorite ? "Remove favorite" : "MARK AS FAVORITE"}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  albums: state.albums.albums,
});

const mapDispatchToProps = (dispatch) => ({
  setFavorite: (id) => dispatch(setFavorite(id)),
  setFavoriteArtist: (id) => dispatch(setFavoriteArtist(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Album);
