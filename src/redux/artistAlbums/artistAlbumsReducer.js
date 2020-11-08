import actionTypes from "../actionTypes";

const initialState = {
  artistAlbums: {},
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
        artistAlbums: action.payload,
        isFetching: false,
      };
    case actionTypes.FETCH_ARTIST.FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case actionTypes.SET_FAVORITE_ARTIST:
      const albums = state.artistAlbums.albums.map((album) => {
        if (album.id === action.payload) {
          album.favorite = !album.favorite;
        }
        return album;
      });
      debugger;
      return {
        ...state,
        artistAlbums: {
          ...state.artistAlbums,
          albums,
        },
      };
    default:
      return state;
  }
};

export default artistAlbumsReducer;
