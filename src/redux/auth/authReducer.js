import { SEND_AUTH_STATE, SEND_AUTH_UID } from "./authConstants";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_AUTH_STATE:
      return {
        ...state,
        authState: action.payload
      };
    case SEND_AUTH_UID:
      return {
        ...state,
        authUID: action.payload
      };

    default:
      return state;
  }
};
