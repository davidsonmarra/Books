import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { PublicRoutes } from './stacks/public.routes';
import { AuthRoutes } from './stacks/auth.routes';
import constants from '../constants';
import api from '../services/api';
import { IRootState } from '../store/store';
import { CHANGE_IS_LOGGED, CHANGE_TOKEN } from '../store/slices/loginSlice';

export function Routes() {
  const dispatch = useDispatch();
  const { isLogged } = useSelector(({ login }: IRootState) => login);

  async function refreshToken() {
    const token = await AsyncStorage.getItem(constants.asyncStorageUserRefresh);
    if (token) {
      try {
        const { headers } = await api.post(
          '/auth/refresh-token',
          {
            refreshToken: token,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const id = await AsyncStorage.getItem(constants.asyncStorageUserId);
        dispatch(
          CHANGE_TOKEN({
            token: headers.authorization,
            id: id!,
            refresh: headers['refresh-token'],
          })
        );
        dispatch(CHANGE_IS_LOGGED(true));
      } catch (error: any) {
        /* eslint no-console: [0] */
        console.log(error.response);
      }
    }
  }

  useEffect(() => {
    refreshToken();
  }, []);

  return <NavigationContainer>{isLogged ? <AuthRoutes /> : <PublicRoutes />}</NavigationContainer>;
}
