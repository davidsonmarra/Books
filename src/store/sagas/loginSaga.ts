import AsyncStorage from '@react-native-async-storage/async-storage';
import { call, takeLatest } from 'redux-saga/effects';
import constants from '../../constants';
import { RESET, CHANGE_TOKEN } from '../slices/loginSlice';

interface Props {
  payload: {
    token: string;
    id: string;
    refresh: string;
  };
}

async function store(key: string, value: string) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log('Erro durante o armazenamento do token:', error);
  }
}

export function* setToken({ payload }: Props) {
  yield call(store, constants.asyncStorageUserKey, payload.token);
  yield call(store, constants.asyncStorageUserId, payload.id);
  yield call(store, constants.asyncStorageUserRefresh, payload.refresh);
}

async function clearUserData() {
  await AsyncStorage.removeItem(constants.asyncStorageUserKey);
  await AsyncStorage.removeItem(constants.asyncStorageUserId);
  await AsyncStorage.removeItem(constants.asyncStorageUserRefresh);
}

export default function* watcher() {
  yield takeLatest(CHANGE_TOKEN, setToken);
}

export function* logout() {
  yield takeLatest(RESET, clearUserData);
}
