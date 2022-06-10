import { combineReducers } from '@reduxjs/toolkit';

import login from './loginSlice';
import books from './booksSlice';

export default combineReducers({ login, books });
