import { SET_AUTHED_USER } from "../actions/authedUser";

export default function authedUser(state: any = null, action: any) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.id;
    default:
      return state;
  }
}
