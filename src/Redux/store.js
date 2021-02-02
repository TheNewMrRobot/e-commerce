import { applyMiddleware, createStore} from "redux";
import rootReducer from "./rootReducer";
import { logger } from "redux-logger";
//import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [logger]
export const store = createStore(rootReducer,applyMiddleware(...middlewares));