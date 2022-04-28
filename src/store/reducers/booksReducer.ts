import { BookDTO, CategoryProps } from '../../screens/Home';
import { booksActionTypes } from '../actions/booksActions';

interface Props {
  isEnd: boolean;
  loadingFetchBooks: boolean;
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
  isEnd: false,
  loadingFetchBooks: false,
  error_fetch_books: '',
  books: [],
  category: { key: '', title: '' },
  search: '',
};

/* eslint default-param-last: [0] */
export default (state = INITIAL_STATE, action: ActionProps) => {
  switch (action.type) {
    case booksActionTypes.FETCH_BOOKS:
      return {
        ...state,
        loadingFetchBooks: true,
        error_fetch_books: '',
      };
    case booksActionTypes.FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        isEnd: action.payload?.length < 15,
        loadingFetchBooks: false,
        error_fetch_books: '',
        books: state.books.concat(action.payload),
      };
    case booksActionTypes.FETCH_BOOKS_ERROR:
      return {
        ...state,
        loadingFetchBooks: false,
        error_fetch_books: action.payload,
      };
    case booksActionTypes.SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
        books: [],
      };
    case booksActionTypes.SET_SEARCH:
      return {
        ...state,
        search: action.payload,
        books: [],
      };
    case booksActionTypes.RESET:
      return {
        ...state,
        isEnd: false,
        loadingFetchBooks: false,
        error_fetch_books: '',
        books: [],
        category: { key: '', title: '' },
        search: '',
      };
    default:
      return state;
  }
};
