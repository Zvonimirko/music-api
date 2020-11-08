import actionTypes from "../actionTypes";

const initialState = {
  albums: [],
  errorMessage: "",
  isFetching: false,
};

const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALBUMS.START:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.FETCH_ALBUMS.SUCCESS:
      return {
        ...state,
        albums: action.payload,
        isFetching: false,
      };
    case actionTypes.FETCH_ALBUMS.FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isFetching: false,
      };
    case actionTypes.SET_FAVORITE:
      const albums = state.albums.map((album) => {
        if (album.id === action.payload) {
          album.favorite = !album.favorite;
        }
        return album;
      });
      return {
        ...state,
        albums,
      };
    default:
      return state;
  }
};

export default albumsReducer;
