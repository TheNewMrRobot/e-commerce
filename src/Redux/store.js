import { applyMiddleware, createStore} from "redux";
import rootReducer from "./rootReducer";
import { logger } from "redux-logger";
//import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";

const middlewares = [logger]
export const store = createStore(rootReducer,applyMiddleware(...middlewares));

export const persistor = persistStore(store);