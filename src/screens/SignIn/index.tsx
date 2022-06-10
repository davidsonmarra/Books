import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import TitleSvg from '../../assets/title.svg';
import { Input } from '../../components/form/Input';
import { Container, Background, Title, Logo, Form } from './styles';
import background from '../../assets/background.png';
import { CHANGE_EMAIL, CHANGE_PASSWORD } from '../../store/slices/loginSlice';
import { IRootState } from '../../store/store';

export interface IFormInput {
  email: string;
  password: string;
}

export function SignIn() {
  const dispatch = useDispatch();
  const { email, password } = useSelector(
    ({ login }: IRootState) => login
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Container>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          <Background source={background} />
          <Title>
            <Logo />
            <TitleSvg />
          </Title>
          <Form>
            <Input
              name="email"
              placeholder="Email"
              autoCorrect={false}
              value={email}
              autoCapitalize="none"
              onChangeText={(text) => dispatch(CHANGE_EMAIL(text))}
            />
            <Input
              name="password"
              placeholder="Senha"
              secureTextEntry
              autoCorrect={false}
              autoCapitalize="none"
              value={password}
              onChangeText={(text) => dispatch(CHANGE_PASSWORD(text))}
            />
          </Form>
        </Container>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
