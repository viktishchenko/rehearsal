import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";

const reducer = (state, action) => {
  /*   if (action.type === SET_LOADING) {
    return { ...state, isLoading: true };
  }
  throw new Error(`no matching "${action.type}" action type`); */

  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    default:
      throw new Error(`no matching "${action.type}" action type`);
  }
};

export default reducer;
