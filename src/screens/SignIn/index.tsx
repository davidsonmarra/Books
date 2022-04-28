import React from 'react';
import { useSelector } from 'react-redux';
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
import { IRootState, useAppDispatch } from '../../store';
import { setEmail, setPassword } from '../../store/actions/loginActions';
import background from '../../assets/background.png';

export interface IFormInput {
  email: string;
  password: string;
}

export function SignIn() {
  const dispatch = useAppDispatch();
  const { email, password } = useSelector(
    ({ loginReducer }: IRootState) => loginReducer
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
              onChangeText={(text) => dispatch(setEmail(text))}
            />
            <Input
              name="password"
              placeholder="Senha"
              secureTextEntry
              autoCorrect={false}
              autoCapitalize="none"
              value={password}
              onChangeText={(text) => dispatch(setPassword(text))}
            />
          </Form>
        </Container>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
