import { combineReducers } from "redux";
import bannerInfo from "./font";

// reducer를 하나로 묶어주는 메소드
const rootReducer = combineReducers({
  bannerInfo,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
