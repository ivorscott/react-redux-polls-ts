import * as React from "react";
import { connect } from "react-redux";
import polls from "../reducers/polls";

class Dashboard extends React.Component<
  { answered: any; unanswered: any },
  { showAnswered: boolean }
> {
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

    const list: any = showAnswered === true ? answered : unanswered;

    // tslint:disable-next-line:no-console
    console.log(this.props);
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

function mapStateToProps({
  authedUser,
  // polls,
  users
}: {
  authedUser: string;
  polls: any;
  users: any;
}) {
  const answers = users[authedUser].answers;

  const answered = answers
    .map((id: any) => polls[id])
    .sort((a: any, b: any) => b.timestamp - a.timestamp);

  const unanswered = Object.keys(polls)
    .filter(id => !answers.includes(id))
    .map((id: any) => polls[id])
    .sort((a: any, b: any) => b.timestamp - a.timestamp);

  return {
    answered,
    unanswered
  };
}

export default connect(mapStateToProps)(Dashboard);
