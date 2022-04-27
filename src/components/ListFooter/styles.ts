import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  min-height: ${RFValue(24)}px;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.button,
  size: 'large'
}))``;