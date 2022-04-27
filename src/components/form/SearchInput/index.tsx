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
}

export function SearchInput({...rest }: Props) {
  return (
    <Container>
      <FormInput {...rest}/>
      <SearchButton>
        <SearchIcon />
      </SearchButton>
    </Container>
  );
}