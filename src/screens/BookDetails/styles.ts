import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import BackSvg from '../../assets/back.svg';
import QuoteSvg from '../../assets/quote.svg';

interface Props {
  isLast: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 ${RFValue(16)}px;
`;

export const Header = styled.View`
  padding-top: ${RFValue(45)}px;
`;

export const BackButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: ${RFValue(32)}px;
  height: ${RFValue(32)}px;
  border-radius: ${RFValue(16)}px;
  border: ${RFValue(1)}px solid ${({ theme }) => theme.colors.input_background};
`;

export const Back = styled(BackSvg)``;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: RFValue(16)
  }
})`
  padding: 0 ${RFValue(40 - 16)}px;
`;

export const BookImage = styled.Image`
  width: ${RFValue(240)}px;
  height: ${RFValue(350)}px;
  align-self: center;
  margin-top: ${RFValue(20)}px;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
`;

export const Title = styled.Text`
  align-self: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${RFValue(28)}px;
  margin-top: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Authors = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: ${RFValue(16)}px;
  flex-wrap: wrap;
`;

export const Author = styled.Text<Props>`
  margin-right: ${({ isLast }) => isLast ? RFValue(4) : 0}px;
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.button};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const InfoTitle = styled.Text`
  text-transform: uppercase;
  margin-top: ${RFValue(16)}px;
  margin-bottom: ${RFValue(16)}px;
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Info = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoKey = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const InfoValue = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.details};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Quote = styled(QuoteSvg)`
  margin-bottom: ${RFValue(8)}px;
`;