import React from 'react';
import TitleSvg from '../../assets/title.svg';
import { Input } from '../../components/form/Input';
import {
  Container,
  Background,
  Title,
  Logo,
  Form
} from './styles';
import { useSelector } from 'react-redux';
import { IRootState, useAppDispatch } from '../../store';
import { setEmail, setPassword } from '../../store/actions/loginActions';
import { Keyboard, KeyboardAvoidingView, Platform, StatusBar, TouchableWithoutFeedback } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PublicRootStackParamList } from '../../routes/public.routes';

export interface IFormInput {
  email: string;
  password: string;
}

type Props = NativeStackScreenProps<PublicRootStackParamList, 'SignIn'>

export function SignIn({}: Props) {
  const dispatch = useAppDispatch();
  const {
    email,
    password,
  } = useSelector(({ loginReducer }: IRootState) => loginReducer);
  const background = '../../assets/background.png';

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView 
        style={{ flex: 1 }} 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Container>
          <StatusBar
            barStyle='light-content'
            backgroundColor='transparent'
            translucent
          />
          <Background source={require(background)} />
          <Title>
            <Logo />
            <TitleSvg />
          </Title>
          <Form>
            <Input 
              name='email'
              placeholder='Email'
              autoCorrect={false}
              value={email}
              autoCapitalize='none'
              onChangeText={(text) => dispatch(setEmail(text))}
            />
            <Input 
              name='password'
              placeholder='Senha'
              secureTextEntry
              autoCorrect={false}
              autoCapitalize='none'
              value={password}
              onChangeText={(text) => dispatch(setPassword(text))}
            />
          </Form>
        </Container>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}