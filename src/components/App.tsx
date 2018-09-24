import * as React from "react";
import { connect } from "react-redux";
import { handleInitalData } from "../actions/shared";
import Dashboard from "./Dashboard";
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
        {this.props.loading === true ? null : <Dashboard />}
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
