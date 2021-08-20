import React from "react";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import rootReducers from "../reducers";
import RouteItem from "./route";

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

function RenderRouter() {
  return (
    <Provider store={store}>
      <RouteItem />
    </Provider>
  );
}

export default RenderRouter;
