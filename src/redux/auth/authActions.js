import { SEND_AUTH_STATE, SEND_AUTH_UID } from "./authConstants";

export const sendAuthState = data => ({ type: SEND_AUTH_STATE, payload: data });
export const sendAuthUID = data => ({ type: SEND_AUTH_UID, payload: data });
