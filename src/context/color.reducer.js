import { SET_COLOR } from "./color.actions";

export const colorReducer = (state, action) => {
  const { type, data } = action;
  switch (type) {
    case SET_COLOR:
      return { ...state, color: data };
    default:
      return state;
  }
};
