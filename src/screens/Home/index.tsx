import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Keyboard } from 'react-native';
import TitleSvg from '../../assets/title-dark.svg';
import LogoutSvg from '../../assets/logout.svg';
import {
  Container,
  Filter,
  FilterButton,
  Header,
  List,
  Logo,
  LogoutButton,
  Search,
  Title,
} from './styles';
import { SearchInput } from '../../components/form/SearchInput';
import { CardBook } from '../../components/CardBook';
import ListFooter from '../../components/ListFooter';
import { FilterModal } from '../../components/FilterModal';
import { AuthRootStackParamList } from '../../routes/auth.routes';
import { FETCH_BOOKS, RESET_BOOKS, SET_SEARCH } from '../../store/slices/booksSlice';
import { IRootState } from '../../store/store';
import { RESET } from '../../store/slices/loginSlice';

export interface CategoryProps {
  key: string;
  title: string;
}
export interface BookDTO {
  id: string;
  title: string;
  imageUrl: string;
  authors: string[];
  pageCount: number;
  publisher: string;
  published: number;
  category: CategoryProps | string;
  language: string;
  isbn10: string;
  isbn13: string;
  description: string;
}

type Props = NativeStackScreenProps<AuthRootStackParamList, 'Home'>;

export function Home({ navigation }: Props) {
  const [searchInput, setSearchInput] = useState('');
  const [offset, setOffset] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const { search, isEnd, books, loadingFetchBooks, category } = useSelector(
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
    dispatch(RESET());
  }

  function handleGoToBookDetails(book: BookDTO) {
    navigation.navigate('BookDetails', { book });
  }

  useEffect(() => {
    dispatch(FETCH_BOOKS({ offset, category, search }));
  }, []);

  return (
    <Container>
      <Header>
        <Title>
          <Logo />
          <TitleSvg />
        </Title>
        <LogoutButton onPress={() => handleLogout()}>
          <LogoutSvg />
        </LogoutButton>
      </Header>
      <Search>
        <SearchInput
          name="book"
          placeholder="Procure um livro"
          value={searchInput}
          onChangeText={setSearchInput}
          onSubmit={() => handleSearch()}
        />
        <FilterButton onPress={() => handleModal()}>
          <Filter />
        </FilterButton>
      </Search>
      <List
        data={books}
        keyExtractor={(item) => `${item.id}`}
        refreshing={loadingFetchBooks}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CardBook
            data={item}
            handleGoToBookDetails={(book) => handleGoToBookDetails(book)}
          />
        )}
        onEndReached={() => onEndReached()}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => <ListFooter isLoading={loadingFetchBooks} />}
      />
      <FilterModal
        visible={modalVisible}
        handleModal={() => handleModal()}
        setOffset={setOffset}
      />
    </Container>
  );
}
