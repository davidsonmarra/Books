import React, { useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import { useSelector } from 'react-redux';
import api from '../../../services/api';
import { IRootState, useAppDispatch } from '../../../store';
import { setIsLogged, setToken } from '../../../store/actions/loginActions';
import { Container, Loading, Title } from './styles';

export function Button() {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const { email, password } = useSelector(
    ({ loginReducer }: IRootState) => loginReducer
  );

  async function login() {
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
        setToken(headers.authorization, data.id, headers['refresh-token'])
      );
      setLoading(false);
      dispatch(setIsLogged(true));
    } catch (error: any) {
      setLoading(false);
      Alert.alert(
        'Algo não funcionou corretamente!',
        error.response.data.errors.message
      );
    }
  }

  return (
    <Container onPress={() => login()}>
      {loading ? <Loading /> : <Title>Entrar</Title>}
    </Container>
  );
}
