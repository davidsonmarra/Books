import React, { useState } from 'react';
import { Alert, Keyboard, TouchableOpacityProps } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../../services/api';
import { IRootState } from '../../../store';
import { setToken } from '../../../store/actions/loginActions';
import {
  Container,
  Loading,
  Title
} from './styles';

export function Button({}: TouchableOpacityProps) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {
    email,
    password,
  } = useSelector(({ loginReducer }: IRootState) => loginReducer);

  async function login() {
    // 'desafio@ioasys.com.br'
    // '12341234'
    setLoading(true);
    Keyboard.dismiss();
    
    try {
      const { data, headers } = await api.post('/auth/sign-in', {
        email,
        password 
      });
      dispatch(setToken(headers.authorization, data.id, headers['refresh-token']));
      setLoading(false);
      dispatch(setIsLogged(true));
    } catch(error: any) {
      setLoading(false);
      Alert.alert('Algo não funcionou corretamente!', error.response.data.errors.message);
    } finally {
    }
  }

  return (
    <Container onPress={login}>
      {
        loading 
          ? <Loading />
          : <Title>Entrar</Title>
      }
    </Container>
  );
}''