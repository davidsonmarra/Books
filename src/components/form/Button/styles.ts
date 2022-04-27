import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.shape};
  padding: ${RFValue(8)}px ${RFValue(20)}px;
  border-radius: ${RFValue(44)}px;
  align-self: flex-end;
  margin-bottom: ${RFValue(2)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.button}
  font-weight: bold;
`;