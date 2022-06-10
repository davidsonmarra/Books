import React from 'react';
import { TextInputProps } from 'react-native';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import SearchSvg from '../../assets/search.svg';

export const StyledContainer = styled.View`
  width: 85%;
  height: ${RFValue(60)}px;
  flex-direction: row;
  justify-content: flex-end;
  padding: ${RFValue(14)}px ${RFValue(16)}px ${RFValue(14)}px ${RFValue(11)}px;
  border: ${RFValue(1)}px solid ${({ theme }) => theme.colors.input_background};
  border-radius: ${RFValue(2)}px;
`;

export const StyledFormInput = styled.TextInput`
  flex: 1;
  align-self: flex-end;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.dark};
`;

export const StyledSearchIcon = styled(SearchSvg).attrs({
  width: RFValue(24),
  height: RFValue(24),
})``;

export const StyledSearchButton = styled.TouchableOpacity`
  align-self: center;
`;

interface Props extends TextInputProps {
  name: string;
  onSubmit: () => void;
}

export default function SearchInput({ onSubmit, ...rest }: Props) {
  return (
    <StyledContainer>
      <StyledFormInput {...rest} />
      <StyledSearchButton onPress={onSubmit}>
        <StyledSearchIcon />
      </StyledSearchButton>
    </StyledContainer>
  );
}
