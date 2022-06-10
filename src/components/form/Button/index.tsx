import React, { useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../../services/api';
import { IRootState } from '../../../store/store';
import {
  CHANGE_IS_LOGGED,
  CHANGE_TOKEN,
} from '../../../store/slices/loginSlice';
import { Container, Loading, Title } from './styles';

export function Button() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { email, password } = useSelector(({ login }: IRootState) => login);

  async function handleLogin() {
    // 'desafio@ioasys.com.br'
    // '12341234'
    setLoading(true);
    Keyboard.dismiss();

    try {
      const { data, headers } = await api.post('/auth/sign-in', {
        email,
        password,
      });
      dispatch(
        CHANGE_TOKEN({
          token: headers.authorization,
          id: data.id,
          refresh: headers['refresh-token'],
        })
      );
      setLoading(false);
      dispatch(CHANGE_IS_LOGGED(true));
    } catch (error: any) {
      setLoading(false);
      Alert.alert(
        'Algo não funcionou corretamente!',
        error.response.data.errors.message
      );
    }
  }

  return (
    <Container onPress={() => handleLogin()}>
      {loading ? <Loading /> : <Title>Entrar</Title>}
    </Container>
  );
}
