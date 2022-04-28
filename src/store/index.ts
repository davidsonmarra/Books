import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './reducers/loginReducer';
import booksReducer from './reducers/booksReducer';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { useDispatch } from 'react-redux';

const rootReducer = combineReducers({ loginReducer, booksReducer });

export type IRootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk]
});

export default store;

type AppAction = ReturnType<typeof store.dispatch>;
export type AppDispatch = ThunkDispatch<IRootState, any, AppAction>;
export const useAppDispatch = () => useDispatch<AppDispatch>();