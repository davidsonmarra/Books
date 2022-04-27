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

export interface IFormInput {
  email: string;
  password: string;
}

export function SignIn() {
  const background = '../../assets/background.png';
  const {
    control,
    reset,
    handleSubmit,
  } = useForm<any>({
    resolver: yupResolver(schema)
  });

  return (
    <Container>
      <Image source={require(background)}>
        <Title>
          <Logo />
          <TitleSvg />
        </Title>
        <Form>
          <Input 
            control={control}
            name='email'
            placeholder='Email'
            autoCorrect={false}
          />
          <Input 
            control={control}
            name='password'
            placeholder='Senha'
            autoCorrect={false}
          />
        </Form>
      </Image>
    </Container>
  );
}