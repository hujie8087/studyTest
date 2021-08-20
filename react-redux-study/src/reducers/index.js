import { combineReducers } from "redux"; //合并reducer
import auth from "./auth";

const rootReducers = combineReducers({
  auth,
});

export default rootReducers;
