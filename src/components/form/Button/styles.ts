import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width:  ${RFValue(85)}px;
  background-color: ${({ theme }) => theme.colors.shape};
  padding: ${RFValue(8)}px 0;
  justify-content: center;
  align-items: center;
  border-radius: ${RFValue(44)}px;
  align-self: flex-end;
  margin-bottom: ${RFValue(2)}px;
`;

export const Loading = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.button
}))`
  font-size: ${RFValue(16)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.button};
  font-family: ${({ theme }) => theme.fonts.medium};
`;