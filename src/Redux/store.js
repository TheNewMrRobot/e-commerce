import { applyMiddleware, createStore} from "redux";
import rootReducer from "./rootReducer";
import { logger } from "redux-logger";
//import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-saga"


//this can take object with certain configuration on it
const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}
export const store = createStore(rootReducer,applyMiddleware(...middlewares));


// run individuals sagas here once sagas written
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);