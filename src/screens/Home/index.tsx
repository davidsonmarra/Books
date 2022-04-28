import React, { useEffect, useState } from 'react';
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
  Title
} from './styles';
import { SearchInput } from '../../components/form/SearchInput';
import { useSelector } from 'react-redux';
import { IRootState, useAppDispatch } from '../../store';
import { fetchBooks, handleSearchTitle, reset } from '../../store/actions/booksActions';
import { CardBook } from '../../components/CardBook';
import ListFooter from '../../components/ListFooter';
import { FilterModal } from '../../components/FilterModal';
import { logout } from '../../store/actions/loginActions';
import { AuthRootStackParamList } from '../../routes/auth.routes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Keyboard } from 'react-native';

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
  description: string
}

export interface CategoryProps {
  key: string;
  title: string;
}

type Props = NativeStackScreenProps<AuthRootStackParamList, 'Home'>

export function Home({ navigation }: Props) {
  const [searchInput, setSearchInput] = useState('');
  const [offset, setOffset] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useAppDispatch();
  const {
    search,
    is_end,
    books,
    loading_fetch_books,
    category
  } = useSelector(({ booksReducer }: IRootState ) => booksReducer);

  function onEndReached() {
    if(!is_end) {
      dispatch(fetchBooks(offset + 1, category, search));
      setOffset(offset + 1);
    }
  }

  function handleSearch() {
    Keyboard.dismiss();
    dispatch(handleSearchTitle(searchInput));
    setOffset(1)
    dispatch(fetchBooks(1, category, searchInput));
  }

  function handleModal() {
    setModalVisible(!modalVisible);
  }

  function handleLogout() {
    dispatch(logout());
    dispatch(reset());
  }

  function handleGoToBookDetails(book: BookDTO) {
    navigation.navigate('BookDetails', { book });
  }

  useEffect(() => {
    dispatch(fetchBooks(offset, category, search));
  }, []);

  return (
    <Container>
      <Header>
        <Title>
          <Logo />
          <TitleSvg />
        </Title>
        <LogoutButton onPress={handleLogout}>
          <LogoutSvg />
        </LogoutButton>
      </Header>
      <Search>
        <SearchInput 
          name="book"
          placeholder='Procure um livro'
          value={searchInput}
          onChangeText={setSearchInput}
          onSubmit={handleSearch}
        />
        <FilterButton onPress={handleModal}>     
          <Filter />
        </FilterButton>
      </Search>
      <List
        data={books}
        keyExtractor={(item) => `${item.id}`}
        refreshing={loading_fetch_books}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CardBook data={item} handleGoToBookDetails={(book) => handleGoToBookDetails(book)} />
        )}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <ListFooter isLoading={loading_fetch_books} />
        )}
      />
      <FilterModal 
        visible={modalVisible}
        handleModal={handleModal}
        setOffset={setOffset}
      />
    </Container>
  );
}