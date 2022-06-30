import { call, put, takeLatest } from 'redux-saga/effects';
import { CategoryProps } from '../../@types/CategoryProps';
import api from '../../services/api';
import { FETCH_BOOKS, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_ERROR } from '../slices/booksSlice';

interface Props {
  payload: {
    offset: number;
    category: CategoryProps;
    search: string;
  };
}

function* fetchBooks({ payload: { offset, category, search } }: Props) {
  const searchQuery = `/books?page=${offset}&amount=15&category=${category.key}&title=${search}`;
  try {
    const { data } = yield call(api.get, searchQuery);
    yield put(FETCH_BOOKS_SUCCESS(data?.data));
  } catch (err: any) {
    /* eslint no-console: [0] */
    console.log(err.response.data.errors.message);
    yield put(FETCH_BOOKS_ERROR(err.response.data.errors.message));
  }
}

export default function* watcher() {
  yield takeLatest(FETCH_BOOKS, fetchBooks);
}
