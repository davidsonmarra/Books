import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PublicRoutes } from './public.routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import constants from '../constants';
import api from '../services/api';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLogged, setToken } from '../store/actions/loginActions';
import { IRootState } from '../store';
import { AuthRoutes } from './auth.routes';

export function Routes() {
  const dispatch = useDispatch();
  const {
    isLogged
  } = useSelector(({ loginReducer }: IRootState) => loginReducer);

  async function refreshToken() {
    const token = await AsyncStorage.getItem(constants.asyncStorageUserRefresh);
    if(!!token) {
      try {
        const { headers } = await api.post('/auth/refresh-token', {
          refreshToken: token
        }, {
          headers: {
            Authorization: 'Bearer ' + token
          }
        });
        const id = await AsyncStorage.getItem(constants.asyncStorageUserId);
        dispatch(setToken(headers.authorization, id, headers['refresh-token']));
        dispatch(setIsLogged(true));
      } catch (error) {
        console.log(error.response);
      }
    }
  }

  useEffect(() => {
    refreshToken();
  }, [])

  return (
    <NavigationContainer>
      {
        isLogged ? <AuthRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
}