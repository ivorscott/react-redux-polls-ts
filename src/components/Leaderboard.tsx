import * as React from "react";
import { connect } from "react-redux";
import { IUsers, IUser } from "./_types";

class Leaderboard extends React.Component<{ users: any }> {
  constructor(props: { users: any }) {
    super(props);
  }
  render() {
    return (
      <ul>
        {this.props.users.map((user: IUser) => (
          <li className="user" key={user.id}>
            <img src={user.avatarURL} alt={`Avatar for ${user.name}`} />

            <div>
              <h1>{user.name}</h1>
              <p>{user.polls} Polls</p>
              <p>{user.answers} Answers</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

interface ILeaderboardUser {
  id: string;
  name: string;
  avatarURL: string;
  answers: number;
  polls: number;
}

function sortUsers(a: ILeaderboardUser, b: ILeaderboardUser): number {
  return b.polls + b.answers > a.polls + a.answers ? 1 : 0;
}

function mapStateProps(state: { users: IUsers }) {
  const { users } = state;

  const sortedUsers = Object.keys(users)
    .map((id: any) => {
      const { name, avatarURL, polls, answers } = users[id];

      return {
        id,
        name,
        avatarURL,
        polls: polls.length,
        answers: answers.length
      };
    })
    .sort(sortUsers);

  return {
    users: sortedUsers
  };
}

export default connect(mapStateProps)(Leaderboard);
