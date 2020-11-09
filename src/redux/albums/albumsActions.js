import actionTypes from "../actionTypes";
import fetchUrls from "../../assets/urls";

const setFavorite = (index) => ({
  type: actionTypes.SET_FAVORITE,
  payload: index,
});

const fetchAlbumsStart = () => ({
  type: actionTypes.FETCH_ALBUMS.START,
});

const fetchAlbumsSuccess = (json) => ({
  type: actionTypes.FETCH_ALBUMS.SUCCESS,
  payload: json,
});

const fetchAlbumsFailure = (err) => ({
  type: actionTypes.FETCH_ALBUMS.FAILURE,
  payload: err,
});

const fetchAlbumsAsyncStart = (limit, input) => {
  return async (dispatch) => {
    dispatch(fetchAlbumsStart());
    try {
      let response = await fetch(
        `${fetchUrls.albumsUrl}?_expand=artist&_limit=${limit}&q=${input}`
      );
      let json = await response.json();
      dispatch(fetchAlbumsSuccess(json));
    } catch (err) {
      dispatch(fetchAlbumsFailure(err));
    }
  };
};

export { fetchAlbumsAsyncStart, setFavorite };
