import React, { useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import api from '../../services/api';
import { IRootState } from '../../store/store';
import { CHANGE_IS_LOGGED, CHANGE_TOKEN } from '../../store/slices/loginSlice';

const StyledContainer = styled.TouchableOpacity`
  width: ${RFValue(85)}px;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-right: ${RFValue(16)}px;
  padding: ${RFValue(8)}px 0;
  border-radius: ${RFValue(44)}px;
  background-color: ${({ theme }) => theme.colors.shape};
`;

const StyledLoading = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.button,
}))`
  font-size: ${RFValue(16)}px;
`;

const StyledTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.button};
`;

export default function Button() {
  const [loading, setLoading] = useState(false);
  const { email, password } = useSelector(({ login }: IRootState) => login);
  const dispatch = useDispatch();

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
      Alert.alert('Algo não funcionou corretamente!', error.response.data.errors.message);
    }
  }

  return (
    <StyledContainer onPress={() => handleLogin()}>
      {loading ? <StyledLoading /> : <StyledTitle>Entrar</StyledTitle>}
    </StyledContainer>
  );
}
