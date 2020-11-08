import { combineReducers } from "redux";

import albumsReducer from "./albums/albumsReducer";
import artistAlbumsReducer from "./artistAlbums/artistAlbumsReducer";
import searchReducer from "./search/searchReducer";

export default combineReducers({
  albums: albumsReducer,
  artist: artistAlbumsReducer,
  searchText: searchReducer,
});
