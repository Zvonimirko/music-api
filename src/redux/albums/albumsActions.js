import actionTypes from "../actionTypes";

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

const fetchAlbumsAsyncStart = (limit) => {
  return async (dispatch) => {
    dispatch(fetchAlbumsStart());
    try {
      let response = await fetch(
        `http://localhost:3004/albums/?_expand=artist&_limit=${limit}`
      );
      let json = await response.json();
      dispatch(fetchAlbumsSuccess(json));
    } catch (err) {
      dispatch(fetchAlbumsFailure(err));
    }
  };
};

export default fetchAlbumsAsyncStart;