import { getInitialData } from "../utils/api";
import { receiveUsers } from "../actions/users";
import { receivePolls } from "../actions/polls";
import { setAuthedUser } from "../actions/authedUser";

const AUTHED_ID = "tylermcginnis";

// ajax request / thunk middleware
export function handleInitalData() {
  return (dispatch: any) => {
    return getInitialData().then(({ users, polls }) => {
      dispatch(receiveUsers(users));
      dispatch(receivePolls(polls));
      dispatch(setAuthedUser(AUTHED_ID)); // dispatch all actions to get the data
    });
  };
}
