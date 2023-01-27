import _ from "lodash";
import jsonPlaceholder from "../api/jsonPlaceholder";

export const FetchPostAndUser = () => async (dispatch, getState) => {
  await dispatch(FetchPost());
  const userIds = _.uniq(_.map(getState().Posts, "userId"));
  userIds.forEach((userId) => dispatch(FetchUser(userId)));
};

export const FetchPost = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const FetchUser = (userId) => async (dispatch) => {
  const user = await jsonPlaceholder.get(`/users/${userId}`);
  dispatch({ type: "FETCH_USER", payload: user });
};
