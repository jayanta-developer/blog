import { combineReducers } from "redux";
import PostReducers from "./PostReducers";
import UserReducers from "./UserReducers";

export default combineReducers({
  Posts: PostReducers,
  User: UserReducers,
});
