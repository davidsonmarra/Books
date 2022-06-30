import React from 'react';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
  isLoading: boolean;
}

export const StyledContainer = styled.View`
  height: ${RFValue(50)}px;
  justify-content: center;
  align-items: center;
`;

export const StyledLoading = styled.ActivityIndicator.attrs(({ theme }) => ({
  size: 'large',
  color: theme.colors.button,
}))``;

export default function ListFooter({ isLoading }: Props) {
  return <StyledContainer>{isLoading && <StyledLoading />}</StyledContainer>;
}
