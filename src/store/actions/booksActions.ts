import { Dispatch } from "redux";
import { CategoryProps } from "../../screens/Home";
import api from "../../services/api";

export const booksActionTypes = {
  FETCH_BOOKS: 'FETCH_BOOKS',
  FETCH_BOOKS_SUCCESS: 'FETCH_BOOKS_SUCCESS',
  FETCH_BOOKS_ERROR: 'FETCH_BOOKS_ERROR',
  SET_CATEGORY: 'SET_CATEGORY',
  SET_SEARCH: 'SET_SEARCH'
}

export const fetchBooks = (offset: number, category: CategoryProps, search: string) => async (dispatch: Dispatch) => {
  dispatch({ type: booksActionTypes.FETCH_BOOKS });
  const searchQuery = `?page=${offset}&amount=15&category=${category.key}&title=${search}`;
  try {
    let { data } = await api.get(`/books${searchQuery}`);
    dispatch({ 
      type: booksActionTypes.FETCH_BOOKS_SUCCESS,
      payload: data?.data
    });
  } catch (err: any) {
    console.log(err.response.data.errors.message);
    dispatch({ type: booksActionTypes.FETCH_BOOKS_ERROR, payload: err.response.data.errors.message })
  }
};

export const selectCategory = (category: CategoryProps) => async (dispatch: Dispatch) => {
  dispatch({ type: booksActionTypes.SET_CATEGORY, payload: category })
}

export const handleSearchTitle = (search: string) => async (dispatch: Dispatch) => {
  dispatch({ type: booksActionTypes.SET_SEARCH, payload: search })
}
