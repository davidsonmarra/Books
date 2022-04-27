import React, { useRef, useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { Button } from '../Button';
import {
  Container,
  FormInput,
  Placeholder
} from './styles';

interface Props extends TextInputProps {
  name: string;
}

export function Input({
  name,
  placeholder,
  ...rest
}: Props) {
  const inputRef = useRef<React.Ref<TextInput>>(null);
  return (
    <Container >
      <FormInput ref={inputRef} {...rest} />
      {
        name === 'password' && (
          <Button />
        )
      }
      <Placeholder>{placeholder}</Placeholder>    
    </Container>
  );
}