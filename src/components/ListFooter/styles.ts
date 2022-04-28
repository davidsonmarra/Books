import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: ${RFValue(50)}px;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.button,
  size: 'large',
}))``;
