import jsonPlaceholder from "../api/jsonPlaceholder";

export const FetchPost = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response });
};
