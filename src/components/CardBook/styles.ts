import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface Props {
  isLast: boolean;
}

const { width } = Dimensions.get('window');

export const Container = styled.TouchableOpacity`
  width: ${RFValue(width - 16)}px;
  height: ${RFValue(180)}px;
  background-color: ${({ theme }) => theme.colors.shape};
  margin-bottom: ${RFValue(16)}px;
  padding: ${RFValue(19)}px ${RFValue(16)}px;
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
  padding: ${RFValue(19)}px 0;
  justify-content: space-between;
`;

export const Header = styled.View``;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.dark};
  font-weight: bold;
`;

export const Author = styled.Text<Props>`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.button};
`;

export const Footer = styled.View``;

export const InfoDetails = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.details};
`;