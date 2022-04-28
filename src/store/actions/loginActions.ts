import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dispatch } from 'redux';
import constants from '../../constants';

export const loginActionTypes = {
  CHANGE_EMAIL: 'CHANGE_EMAIL',
  CHANGE_PASSWORD: 'CHANGE_PASSWORD',
  CHANGE_TOKEN: 'CHANGE_TOKEN',
  CHANGE_IS_LOGGED: 'CHANGE_IS_LOGGED',
  RESET: 'RESET',
};

export const setEmail = (email: string) => async (dispatch: Dispatch) => {
  dispatch({ type: loginActionTypes.CHANGE_EMAIL, payload: email });
};

export const setPassword = (password: string) => async (dispatch: Dispatch) => {
  dispatch({ type: loginActionTypes.CHANGE_PASSWORD, payload: password });
};

export const setToken =
  (token: string, id: string, refresh: string) =>
  async (dispatch: Dispatch) => {
    await AsyncStorage.setItem(constants.asyncStorageUserKey, token);
    await AsyncStorage.setItem(constants.asyncStorageUserId, id);
    await AsyncStorage.setItem(constants.asyncStorageUserRefresh, refresh);
    dispatch({ type: loginActionTypes.CHANGE_TOKEN, payload: token });
  };

export const setIsLogged =
  (isLogged: boolean) => async (dispatch: Dispatch) => {
    dispatch({ type: loginActionTypes.CHANGE_IS_LOGGED, payload: isLogged });
  };

export const logout = () => async (dispatch: Dispatch) => {
  dispatch({ type: loginActionTypes.RESET });
  await AsyncStorage.removeItem(constants.asyncStorageUserKey);
  await AsyncStorage.removeItem(constants.asyncStorageUserId);
  await AsyncStorage.removeItem(constants.asyncStorageUserRefresh);
};
