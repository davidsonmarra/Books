import React, { useRef } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import Button from './Button';

export const StyledContainer = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(60)}px;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: ${RFValue(16)}px;
  border-radius: ${RFValue(4)}px;
  background-color: ${({ theme }) => theme.colors.input_background};
`;

export const StyledFormInput = styled.TextInput`
  flex: 1;
  align-self: flex-end;
  padding: 0 ${RFValue(16)}px ${RFValue(8)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
`;

export const StyledPlaceholder = styled.Text`
  position: absolute;
  left: ${RFValue(16)}px;
  top: ${RFValue(8)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.shape};
  opacity: 0.5;
`;

interface Props extends TextInputProps {
  name: string;
}

export default function Input({ name, placeholder, ...rest }: Props) {
  const inputRef = useRef<TextInput>(null);
  return (
    <StyledContainer onPress={() => inputRef.current?.focus()}>
      <StyledFormInput ref={inputRef} {...rest} />
      {name === 'password' && <Button />}
      <StyledPlaceholder>{placeholder}</StyledPlaceholder>
    </StyledContainer>
  );
}
