import actionTypes from "../actionTypes";

const initialState = {
  artistAlbums: [],
  errorMessage: "",
  isFetching: false,
};

const artistAlbumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ARTIST.START:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.FETCH_ARTIST.SUCCESS:
      return {
        ...state,
        artistAlbums: [...state, action.payload],
        isFetching: false,
      };
    case actionTypes.FETCH_ARTIST.FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default artistAlbumsReducer;
