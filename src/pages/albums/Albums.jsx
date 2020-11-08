import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import InfiniteScroll from "react-infinite-scroller";

import "./albums.scss";

import Album from "../../components/album/Album";
import { fetchAlbumsAsyncStart } from "../../redux/albums/albumsActions";
import Spinner from "../../components/spinner/Spinner";
import { fetchArtistAlbumsAsyncStart } from "../../redux/artistAlbums/artistAlbumsAction";

const Albums = ({
  albumsStore,
  fetchAlbumsAsyncStart,
  location,
  search,
  hasMore,
}) => {
  const { albums, isFetching } = albumsStore;
  const limit = queryString.parse(location.search).limit || 10;
  useEffect(() => {
    const input = search || "";
    fetchAlbumsAsyncStart(limit, input);
  }, [search]);

  const fetchData = () => {
    fetchArtistAlbumsAsyncStart(limit);
  };

  return (
    <div className="albums">
      <div className="albums__container">
        {!isFetching ? (
          <InfiniteScroll
            pageStart={0}
            loadMore={fetchData}
            hasMore={hasMore}
            loader={
              <div className="loader" key={0}>
                Loading ...
              </div>
            }
          >
            {albums &&
              albums.map((album) => (
                <Album
                  key={album.id}
                  album={album}
                  artist={album.artist.title}
                />
              ))}
          </InfiniteScroll>
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
  hasMore: state.nextURl,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAlbumsAsyncStart: (limit, input) =>
    dispatch(fetchAlbumsAsyncStart(limit, input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Albums));
