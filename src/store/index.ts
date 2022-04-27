import { combineReducers, applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import loginReducer from './reducers/loginReducer';


const rootReducer = combineReducers({ loginReducer });

export type IRootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));

export default store;