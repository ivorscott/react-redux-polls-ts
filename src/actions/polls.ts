export const RECEIVE_POLLS = "RECEIVE_POLLS";

export function receivePolls(polls: any) {
  return {
    type: RECEIVE_POLLS,
    polls
  };
}
