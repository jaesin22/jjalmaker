import { combineReducers } from "redux";
import fontInfo from "./font";

// reducer를 하나로 묶어주는 메소드
const rootReducer = combineReducers({
  fontInfo,
});

export default rootReducer;
