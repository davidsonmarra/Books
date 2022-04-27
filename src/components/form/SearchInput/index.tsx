import React from 'react';
import { TextInputProps } from 'react-native';
import {
  Container,
  FormInput,
  SearchButton,
  SearchIcon,
  
} from './styles';

interface Props extends TextInputProps {
  name: string;
  onSubmit: () => void;
}

export function SearchInput({ onSubmit, ...rest }: Props) {
  return (
    <Container>
      <FormInput {...rest}/>
      <SearchButton onPress={onSubmit}>
        <SearchIcon />
      </SearchButton>
    </Container>
  );
}