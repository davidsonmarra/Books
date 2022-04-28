import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import LogoSvg from '../../assets/logo.svg';


export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 ${RFValue(16)}px;
`;

export const Background = styled.ImageBackground`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Logo = styled(LogoSvg)`
  margin-right: ${RFValue(16.6)}px;
`;

export const Title = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${RFValue(50)}px;
`;

export const Form = styled.View``;

