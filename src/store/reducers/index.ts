import { combineReducers } from "redux";
import tasks from "./tasks";
import screenTheme from "./screenTheme";
const rootReducer = combineReducers({ tasks, screenTheme });

export default rootReducer;
