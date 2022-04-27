import styled from 'styled-components/native';
import CloseSvg from '../../assets/close.svg';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
  isSelected: boolean;
}

export const Container = styled.Modal`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.input_background};
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.input_background};
  justify-content: center;
  align-items: center;
  padding: 0 ${RFValue(16)}px;
`;

export const Content = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape};
  padding: ${RFValue(16)}px ${RFValue(16)}px ${RFValue(24)}px;
`;

export const Header = styled.View`
  align-items: flex-end;
`;

export const CloseButton = styled.TouchableOpacity`
  width: ${RFValue(32)}px;
  height: ${RFValue(32)}px;
  border-radius: ${RFValue(16)}px;
  border: ${RFValue(1)}px solid ${({ theme }) => theme.colors.input_background};
  justify-content: center;
  align-items: center;
`;


export const Close = styled(CloseSvg).attrs({
  width: RFValue(16),
  height: RFValue(16)
})``;

export const Category = styled.View``;

export const CategoryTitle = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: ${RFValue(16)}px;
`;

export const Categories = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CategoryButton = styled.TouchableOpacity<Props>`
  padding: ${RFValue(6)}px ${RFValue(16)}px;
  border: ${RFValue(1)}px solid ${({ theme }) => theme.colors.input_background};
  border-radius: ${RFValue(44)}px;
  margin-right: ${RFValue(8)}px;
  margin-bottom: ${RFValue(8)}px;
  background-color: ${({ theme, isSelected }) => isSelected ? theme.colors.dark : theme.colors.shape};
`;

export const CategoryName = styled.Text<Props>`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme, isSelected }) => !isSelected ? theme.colors.dark : theme.colors.shape};
`;

export const Submit = styled.TouchableOpacity`
  width: ${RFValue(90)}px;
  padding: ${RFValue(12)}px ${RFValue(8)}px;
  align-self: center;
  margin-top: ${RFValue(48)}px;
  border: ${RFValue(1)}px solid ${({ theme }) => theme.colors.button};
  border-radius: ${RFValue(44)}px;
`;

export const SubmitText = styled.Text`
  color: ${({ theme }) => theme.colors.button};
  align-self: center;
  font-family: ${({ theme }) => theme.fonts.medium};
`;