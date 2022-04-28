import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
  isLast: boolean;
}

export const Wrapper = styled.View`
  width: 100%;
  padding: 0 ${RFValue(16)}px;
`;

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(180)}px;
  background-color: ${({ theme }) => theme.colors.shape};
  margin-bottom: ${RFValue(16)}px;
  padding: ${RFValue(8)}px ${RFValue(16)}px;
  border-radius: ${RFValue(4)}px;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ImageBook = styled.Image`
  width: ${RFValue(81)}px;
  height: ${RFValue(122)}px;
  margin-right: ${RFValue(16)}px;
`;

export const Info = styled.View`
  flex: 1;
  height: ${RFValue(180)}px;
  padding: ${RFValue(16)}px 0;
  justify-content: space-between;
`;

export const Header = styled.View``;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Author = styled.Text<Props>`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.button};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Footer = styled.View``;

export const InfoDetails = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.details};
`;
