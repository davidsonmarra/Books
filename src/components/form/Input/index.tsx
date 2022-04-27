import React, { useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { IFormInput } from '../../../screens/SignIn';
import { Button } from '../Button';
import {
  Container,
  FormInput,
  Placeholder
} from './styles';

interface Props extends TextInputProps {
  control: any;
  name: keyof IFormInput;
}

export function Input({
  control,
  name,
  placeholder,
  ...rest
}: Props) {

  return (
    <Container>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value }}) => (
          <>
            <FormInput
              onChangeText={onChange}
              value={value}
              {...rest}
            />
            {
              name === 'password' && (
                <Button />
              )
            }
            <Placeholder>{placeholder}</Placeholder>
          </>
        )}
      />
    </Container>
  );
}