import logger from "./logger";
import thunk from "redux-thunk";
import { applyMiddleware, compose } from "redux";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default composeEnhancers(applyMiddleware(thunk, logger));
