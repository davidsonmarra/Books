import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import LogoSvg from '../../assets/logo-dark.svg';
import FilterSvg from '../../assets/filter.svg';
import { FlatList, FlatListProps } from 'react-native';
import { BookDTO } from '.';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 ${RFValue(16)}px;
`;

export const Logo = styled(LogoSvg)`
  margin-right: ${RFValue(16.6)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${RFValue(42)}px 0 0;
`;

export const Title = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LogoutButton = styled.TouchableOpacity`
  width: ${RFValue(32)}px;
  height: ${RFValue(32)}px;
  border-radius: ${RFValue(16)}px;
  justify-content: center;
  align-items: center;
  border: ${RFValue(1)}px solid ${({ theme }) => theme.colors.input_background};
`;

export const Search = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${RFValue(32)}px;
  padding-bottom: ${RFValue(32)}px;
`;

export const Filter = styled(FilterSvg).attrs({
  width: RFValue(24),
  height: RFValue(24)
})``;

export const List = styled(
  FlatList as new (props: FlatListProps<BookDTO>
) => (FlatList<BookDTO>)).attrs(({ theme }) => ({
  contentContainerStyle: {
    paddingBottom: RFValue(24),
  }
}))``;
