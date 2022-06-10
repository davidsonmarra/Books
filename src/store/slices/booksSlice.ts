import { createSlice } from '@reduxjs/toolkit';
import { BookDTO, CategoryProps } from '../../screens/Home';

interface Props {
  isEnd: boolean;
  loadingFetchBooks: boolean;
  error_fetch_books: string;
  booksData: BookDTO[];
  category: CategoryProps;
  search: string;
}

const initialState: Props = {
  isEnd: false,
  loadingFetchBooks: false,
  error_fetch_books: '',
  booksData: [],
  category: { key: '', title: '' },
  search: '',
};

const counterSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    FETCH_BOOKS: (state, { payload }) => ({
      ...state,
      loadingFetchBooks: true,
      error_fetch_books: '',
    }),
    FETCH_BOOKS_SUCCESS: (state, { payload }) => ({
      ...state,
      isEnd: payload?.length < 15,
      loadingFetchBooks: false,
      error_fetch_books: '',
      booksData: state.booksData.concat(payload),
    }),
    FETCH_BOOKS_ERROR: (state, { payload }) => ({
      ...state,
      loadingFetchBooks: false,
      error_fetch_books: payload,
    }),
    SET_CATEGORY: (state, { payload }) => ({
      ...state,
      category: payload,
      booksData: [],
    }),
    SET_SEARCH: (state, { payload }) => ({
      ...state,
      search: payload,
      booksData: [],
    }),
    RESET_BOOKS: (state) => ({
      ...state,
      isEnd: false,
      loadingFetchBooks: false,
      error_fetch_books: '',
      booksData: [],
      category: { key: '', title: '' },
      search: '',
    }),
  },
});

const { actions, reducer } = counterSlice;

export const {
  FETCH_BOOKS,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
  SET_CATEGORY,
  SET_SEARCH,
  RESET_BOOKS,
} = actions;
export default reducer;
