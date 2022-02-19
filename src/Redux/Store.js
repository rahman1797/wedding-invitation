import { createStore } from "redux";
import rootReducer from "./Reducer/Reducer";

const storeRedux = createStore(rootReducer);

export default storeRedux;