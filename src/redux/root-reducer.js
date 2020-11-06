import { combineReducers } from "redux";

import albumsReducer from "./albums/albumsReducer";
import artistAlbumsReducer from "./artistAlbums/artistAlbumsReducer";

export default combineReducers({
  albums: albumsReducer,
  artist: artistAlbumsReducer,
});
