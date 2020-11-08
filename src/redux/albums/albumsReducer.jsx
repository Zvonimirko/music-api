import actionTypes from "../actionTypes";

const initialState = {
  albums: [],
  errorMessage: "",
  isFetching: false,
  nextUrl: "http://localhost:3004/albums/?_expand=artist&_page=1",
};

const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALBUMS.START:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.FETCH_ALBUMS.SUCCESS:
      const nextUrl =
        action.headers && action.headers.next && action.headers.next.url;
      return {
        ...state,
        albums: [...state.albums, ...action.payload],
        isFetching: false,
        nextUrl,
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
          return {
            ...album,
            favorite: !album.favorite,
          };
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
