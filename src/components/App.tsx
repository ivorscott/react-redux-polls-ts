import * as React from "react";
import { connect } from "react-redux";
import { handleInitalData } from "../actions/shared";

class App extends React.Component<{ dispatch: any }, {}> {
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch(handleInitalData());
  }
  public render() {
    return (
      <div className="App">
        <h1 className="App-title">Welcome to React</h1>
      </div>
    );
  }
}

export default connect()(App);
