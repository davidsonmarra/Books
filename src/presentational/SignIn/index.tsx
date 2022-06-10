import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import LogoSvg from '../../assets/logo.svg';
import TitleSvg from '../../assets/title.svg';
import { Input } from '../../components';
import background from '../../assets/background.png';
import { CHANGE_EMAIL, CHANGE_PASSWORD } from '../../store/slices/loginSlice';
import { IRootState } from '../../store/store';

export interface IFormInput {
  email: string;
  password: string;
}

export const StyledContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 ${RFValue(16)}px;
`;

export const StyledBackground = styled.ImageBackground`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const StyledLogo = styled(LogoSvg)`
  margin-right: ${RFValue(16.6)}px;
`;

export const StyledTitle = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${RFValue(50)}px;
`;

export const StyledForm = styled.View``;

export default function SignIn() {
  const dispatch = useDispatch();
  const { email, password } = useSelector(({ login }: IRootState) => login);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <StyledContainer>
          <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
          <StyledBackground source={background} />
          <StyledTitle>
            <StyledLogo />
            <TitleSvg />
          </StyledTitle>
          <StyledForm>
            <Input
              name='email'
              placeholder='Email'
              autoCorrect={false}
              value={email}
              autoCapitalize='none'
              onChangeText={text => dispatch(CHANGE_EMAIL(text))}
            />
            <Input
              name='password'
              placeholder='Senha'
              secureTextEntry
              autoCorrect={false}
              autoCapitalize='none'
              value={password}
              onChangeText={text => dispatch(CHANGE_PASSWORD(text))}
            />
          </StyledForm>
        </StyledContainer>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
