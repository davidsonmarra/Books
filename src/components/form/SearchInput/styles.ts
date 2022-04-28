import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import SearchSvg from '../../../assets/search.svg';

export const Container = styled.View`
  width: 85%;
  height: ${RFValue(60)}px;
  flex-direction: row;
  border-radius: ${RFValue(2)}px;
  padding: ${RFValue(14)}px ${RFValue(16)}px ${RFValue(14)}px ${RFValue(11)}px;
  justify-content: flex-end;
  border: ${RFValue(1)}px solid ${({ theme }) => theme.colors.input_background};
`;

export const FormInput = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme.colors.shape};
  align-self: flex-end;
  color: ${({ theme }) => theme.colors.dark}
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const SearchIcon = styled(SearchSvg).attrs({
  width: RFValue(24),
  height: RFValue(24),
})``;

export const SearchButton = styled.TouchableOpacity`
  align-self: center;
`;
