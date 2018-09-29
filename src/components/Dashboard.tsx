import * as React from "react";
import { connect } from "react-redux";
import { IUsers, IPolls } from "./_types";

export interface IDashboardProps {
  answered: any;
  unanswered: any;
}

export interface IDashboardState {
  showAnswered: boolean;
}

class Dashboard extends React.Component<IDashboardProps, IDashboardState> {
  constructor(props: any) {
    super(props);
    this.state = {
      showAnswered: false
    };
  }

  showUnanswered = () => {
    this.setState(() => ({
      showAnswered: false
    }));
  };

  showAnswered = () => {
    this.setState(() => ({
      showAnswered: true
    }));
  };

  render() {
    const { showAnswered } = this.state;
    const { answered, unanswered } = this.props;
    // tslint:disable-next-line:no-console
    console.log(this.state, this.props);
    const list: any = showAnswered === true ? answered : unanswered;

    return (
      <div>
        <div className="dashboard-toggle">
          <button
            style={{
              textDecoration: showAnswered === false ? "underline" : "none"
            }}
            onClick={this.showUnanswered}
          >
            Unanswered
          </button>
          <span> | </span>
          <button
            style={{
              textDecoration: showAnswered === true ? "underline" : "none"
            }}
            onClick={this.showAnswered}
          >
            Answered
          </button>
        </div>
        <ul className="dashboard-list">
          {list.map((poll: { id: string; question: string }) => (
            <li key={poll.id}>{poll.question}</li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state: {
  authedUser: string;
  users: IUsers;
  polls: IPolls;
}) {
  const { authedUser, users, polls } = state;
  const answers = users[authedUser].answers as string[];

  const answered = answers
    .map((id: string) => polls[id])
    .sort((a: any, b: any) => b.timestamp - a.timestamp);

  const unanswered = Object.keys(polls)
    .filter(id => !answers.includes(id))
    .map((id: string) => polls[id])
    .sort((a: any, b: any) => b.timestamp - a.timestamp);

  return {
    answered,
    unanswered
  };
}

export default connect(mapStateToProps)(Dashboard);
