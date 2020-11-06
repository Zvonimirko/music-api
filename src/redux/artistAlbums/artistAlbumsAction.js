import actionTypes from "../actionTypes";

const fetchArtistAlbumsStart = () => ({
  type: actionTypes.FETCH_ARTIST.START,
});

const fetchArtistAlbumsSuccess = (json) => ({
  type: actionTypes.FETCH_ARTIST.SUCCESS,
  payload: json,
});

const fetchArtistAlbumsFailure = (err) => ({
  type: actionTypes.FETCH_ARTIST.FAILURE,
  payload: err,
});

const fetchArtistAlbumsAsyncStart = (id) => {
  return async (dispatch) => {
    dispatch(fetchArtistAlbumsStart());
    try {
      let response = await fetch(
        `http://localhost:3004/artists/${id}?_embed=albums`
      );
      let json = await response.json();
      dispatch(fetchArtistAlbumsSuccess(json));
    } catch (err) {
      dispatch(fetchArtistAlbumsFailure(err));
    }
  };
};

export default fetchArtistAlbumsAsyncStart;
