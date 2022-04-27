import { BookDTO, CategoryProps } from "../../screens/Home";
import { booksActionTypes } from "../actions/booksActions";

interface Props {
  is_end: boolean;
  loading_fetch_books: boolean;
  error_fetch_books: string;
  books: BookDTO[];
  category: CategoryProps;
  search: string;
}

interface ActionProps extends Props {
  type: string;
  payload: any;
}

const INITIAL_STATE: Props = {
  is_end: false,
  loading_fetch_books: false,
  error_fetch_books: '',
  books: [],
  category: {key: '', title: ''},
  search: ''
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
    case booksActionTypes.SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
        books: []
      };
    case booksActionTypes.SET_SEARCH:
      return {
        ...state,
        search: action.payload,
        books: []
      };
    case booksActionTypes.RESET:
      return {
        ...state,
        is_end: false,
        loading_fetch_books: false,
        error_fetch_books: '',
        books: [],
        category: {key: '', title: ''},
        search: ''
      };
    default:
      return state;
  }
};