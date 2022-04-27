import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dispatch } from "redux";
import constants from "../../constants";
import api from "../../services/api";

export const booksActionTypes = {
  FETCH_BOOKS: 'FETCH_BOOKS',
  FETCH_BOOKS_SUCCESS: 'FETCH_BOOKS_SUCCESS',
  FETCH_BOOKS_ERROR: 'FETCH_BOOKS_ERROR'
}

export const fetchBooks = (offset: number) => async (dispatch: Dispatch) => {
  dispatch({ type: booksActionTypes.FETCH_BOOKS });
  const searchQuery = `?page=${offset}&amount=15`;
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
