import { combineReducers, applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import loginReducer from './reducers/loginReducer';
import booksReducer from './reducers/booksReducer';


const rootReducer = combineReducers({ loginReducer, booksReducer });

export type IRootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));

export default store;