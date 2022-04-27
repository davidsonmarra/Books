import { BookDTO } from "../../screens/Home";
import { booksActionTypes } from "../actions/booksActions";

interface Props {
  is_end: boolean;
  loading_fetch_books: boolean;
  error_fetch_books: string;
  books: BookDTO[];
}

interface ActionProps extends Props {
  type: string;
  payload: any;
}

const INITIAL_STATE: Props = {
  is_end: false,
  loading_fetch_books: false,
  error_fetch_books: '',
  books: []
}

export default (state = INITIAL_STATE, action: ActionProps) => {
  switch (action.type) {
    case booksActionTypes.FETCH_BOOKS:
      return {
        ...state,
        loading_fetch_books: true,
        error_fetch_books: '',
      };
    case booksActionTypes.FETCH_BOOKS_SUCCESS:
      console.log('action.payload', action.payload);
      return {
        ...state,
        is_end: action.payload?.length < 15 ? true : false,
        loading_fetch_books: false,
        error_fetch_books: '',
        books: state.books.concat(action.payload)
      };
    case booksActionTypes.FETCH_BOOKS_ERROR:
      return {
        ...state,
        loading_fetch_books: false,
        error_fetch_books: action.payload,
      };
    default:
      return state;
  }
};