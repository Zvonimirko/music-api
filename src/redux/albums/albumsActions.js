import actionTypes from "../actionTypes";
import parse_link from "parse-link-header";
import store from "../store";

const setFavorite = (index) => ({
  type: actionTypes.SET_FAVORITE,
  payload: index,
});

const fetchAlbumsStart = () => ({
  type: actionTypes.FETCH_ALBUMS.START,
});

const fetchAlbumsSuccess = (json, headers) => ({
  type: actionTypes.FETCH_ALBUMS.SUCCESS,
  payload: json,
  headers,
});

const fetchAlbumsFailure = (err) => ({
  type: actionTypes.FETCH_ALBUMS.FAILURE,
  payload: err,
});

const fetchAlbumsAsyncStart = (limit, input) => {
  return async (dispatch) => {
    dispatch(fetchAlbumsStart());
    try {
      const { nextUrl } = store.getState().albums;
      const response = await fetch(`${nextUrl}&_limit=${limit}&q=${input}`);
      const json = await response.json();
      const headers = parse_link(response.headers.get("Link"));
      dispatch(fetchAlbumsSuccess(json, headers));
    } catch (err) {
      dispatch(fetchAlbumsFailure(err));
    }
  };
};

export { fetchAlbumsAsyncStart, setFavorite };
