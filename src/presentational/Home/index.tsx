import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Keyboard, FlatList, FlatListProps } from 'react-native';
import styled from 'styled-components/native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import TitleSvg from '../../assets/title-dark.svg';
import LogoutSvg from '../../assets/logout.svg';
import { CardBook, FilterModal, SearchInput } from '../../components';
import ListFooter from '../../components/ListFooter';
import { FETCH_BOOKS, RESET_BOOKS, SET_SEARCH } from '../../store/slices/booksSlice';
import { IRootState } from '../../store/store';
import { RESET } from '../../store/slices/loginSlice';
import BookDTO from '../../@types/BookDTO';
import LogoSvg from '../../assets/logo-dark.svg';
import FilterSvg from '../../assets/filter.svg';
import AuthRootStackParamList from '../../@types/AuthRootStackParamList';

export const StyledContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const StyledLogo = styled(LogoSvg)`
  margin-right: ${RFValue(16.6)}px;
`;

export const StyledHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${RFValue(42)}px ${RFValue(16)}px 0;
`;

export const StyledTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLogoutButton = styled.TouchableOpacity`
  width: ${RFValue(32)}px;
  height: ${RFValue(32)}px;
  justify-content: center;
  align-items: center;
  border: ${RFValue(1)}px solid ${({ theme }) => theme.colors.input_background};
  border-radius: ${RFValue(16)}px;
`;

export const StyledSearch = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFValue(32)}px;
  padding: 0 ${RFValue(16)}px ${RFValue(32)}px;
`;

export const StyledFilterButton = styled.TouchableOpacity``;

export const StyledFilter = styled(FilterSvg).attrs({
  width: RFValue(24),
  height: RFValue(24),
})``;

export const StyledList = styled(
  /* eslint no-unused-vars: [0] */
  FlatList as new (props: FlatListProps<BookDTO>) => FlatList<BookDTO>
).attrs({
  contentContainerStyle: {
    alignItems: 'center',
    paddingBottom: RFValue(24),
  },
})``;

export default function Home() {
  const [searchInput, setSearchInput] = useState('');
  const [offset, setOffset] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const { navigate } = useNavigation<NavigationProp<AuthRootStackParamList>>();
  const dispatch = useDispatch();
  const { search, isEnd, booksData, loadingFetchBooks, category } = useSelector(
    ({ books }: IRootState) => books
  );

  function onEndReached() {
    if (!isEnd) {
      dispatch(FETCH_BOOKS({ offset: offset + 1, category, search }));
      setOffset(offset + 1);
    }
  }

  function handleSearch() {
    Keyboard.dismiss();
    dispatch(RESET_BOOKS());
    dispatch(SET_SEARCH(searchInput));
    setOffset(1);
    dispatch(FETCH_BOOKS({ offset: 1, category, search: searchInput }));
  }

  function handleModal() {
    setModalVisible(!modalVisible);
  }

  function handleLogout() {
    dispatch(RESET_BOOKS());
    dispatch(RESET());
  }

  function handleGoToBookDetails(book: BookDTO) {
    navigate('BookDetailsScreen', { book });
  }

  useEffect(() => {
    dispatch(FETCH_BOOKS({ offset, category, search }));
  }, []);

  function renderListFooterComponent() {
    return <ListFooter isLoading={loadingFetchBooks} />;
  }

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledTitle>
          <StyledLogo />
          <TitleSvg />
        </StyledTitle>
        <StyledLogoutButton onPress={() => handleLogout()}>
          <LogoutSvg />
        </StyledLogoutButton>
      </StyledHeader>
      <StyledSearch>
        <SearchInput
          name='book'
          placeholder='Procure um livro'
          value={searchInput}
          onChangeText={setSearchInput}
          onSubmit={() => handleSearch()}
        />
        <StyledFilterButton onPress={() => handleModal()}>
          <StyledFilter />
        </StyledFilterButton>
      </StyledSearch>
      <StyledList
        data={booksData}
        keyExtractor={item => `${item.id}`}
        refreshing={loadingFetchBooks}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CardBook data={item} handleGoToBookDetails={book => handleGoToBookDetails(book)} />
        )}
        onEndReached={() => onEndReached()}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => renderListFooterComponent()}
      />
      <FilterModal visible={modalVisible} handleModal={() => handleModal()} setOffset={setOffset} />
    </StyledContainer>
  );
}
