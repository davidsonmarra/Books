import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(60)}px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.input_background};
  border-radius: ${RFValue(4)}px;
  justify-content: flex-end;
  margin-bottom: ${RFValue(16)}px;
`;

export const FormInput = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme.colors.shape};
  padding: 0 ${RFValue(16)}px ${RFValue(8)}px;
  align-self: flex-end;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Placeholder = styled.Text`
  position: absolute;
  font-size: ${RFValue(12)}px;
  left: ${RFValue(16)}px;
  top: ${RFValue(8)}px;
  color: ${({ theme }) => theme.colors.shape};
  opacity: .5;
  font-family: ${({ theme }) => theme.fonts.regular};
`;