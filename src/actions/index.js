import jsonPlaceholder from "../api/jsonPlaceholder";

export const FetchPost = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const FetchUser = (userId) => async (dispatch) => {
  const user = await jsonPlaceholder.get(`/users/${userId}`);
  dispatch({ type: "FETCH_USER", payload: user });
};
