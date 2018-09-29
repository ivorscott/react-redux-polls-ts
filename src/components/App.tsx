import * as React from "react";
import { connect } from "react-redux";
import { handleInitalData } from "../actions/shared";
// import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";

import LoadingBar from "react-redux-loading";

class App extends React.Component<{ dispatch: any; loading: any }, {}> {
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch(handleInitalData());
  }
  render() {
    return (
      <div className="App">
        <LoadingBar />
        {this.props.loading === true ? null : <Leaderboard />}
      </div>
    );
  }
}

function mapStateToProps({ authedUser }: { authedUser: any }) {
  return {
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(App);
