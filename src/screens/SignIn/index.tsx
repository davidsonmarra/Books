import React from 'react';
import TitleSvg from '../../assets/title.svg';
import { Input } from '../../components/form/Input';
import {
  Container,
  Image,
  Title,
  Logo,
  Form
} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store';
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
  const dispatch = useDispatch();
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
              <Image source={require(background)}>
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
                    onChangeText={(text) => dispatch(setEmail(text))}
                  />
                  <Input 
                    name='password'
                    placeholder='Senha'
                    secureTextEntry
                    autoCorrect={false}
                    value={password}
                    onChangeText={(text) => dispatch(setPassword(text))}
                  />
                </Form>
              </Image>
        </Container>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}