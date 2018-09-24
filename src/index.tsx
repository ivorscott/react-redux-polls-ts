import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import App from "./components/App";
import "./css/index.css";
import registerServiceWorker from "./registerServiceWorker";
import middleware from './middleware'

const store = createStore(reducer, middleware)
// tslint:disable-next-line:no-console
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
