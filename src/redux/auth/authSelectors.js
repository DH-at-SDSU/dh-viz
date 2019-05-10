import { createSelector } from "reselect";

const selectAuth = state => state.auth;

export const getAuthState = createSelector(
  [selectAuth],
  auth => {
    return auth.authState;
  }
);

export const getAuthUID = createSelector(
  [selectAuth],
  auth => {
    return auth.authUID;
  }
);
