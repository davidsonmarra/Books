import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { schema } from './schema';
import TitleSvg from '../../assets/title.svg';
import { Input } from '../../components/form/Input';
import { yupResolver } from '@hookform/resolvers/yup';
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

export interface IFormInput {
  email: string;
  password: string;
}

export function SignIn() {
  const dispatch = useDispatch();
  const {
    email,
    password,
  } = useSelector(({ loginReducer }: IRootState) => loginReducer);
  const background = '../../assets/background.png';

  return (
    <Container>
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
  );
}