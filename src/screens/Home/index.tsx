import React, { useEffect, useState } from 'react';
import TitleSvg from '../../assets/title-dark.svg';
import LogoutSvg from '../../assets/logout.svg';
import {
  Container,
  Filter,
  Header,
  List,
  Logo,
  LogoutButton,
  Search,
  Title
} from './styles';
import { SearchInput } from '../../components/form/SearchInput';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { fetchBooks } from '../../store/actions/booksActions';
import { CardBook } from '../../components/CardBook';
import { string } from 'yup';
import ListFooter from '../../components/ListFooter';

export interface BookDTO {
  title: string;
  imageUrl: string;
  authors: string[];
  pageCount: number;
  publisher: string;
  published: number;
}

export function Home() {
  const [offset, setOffset] = useState(1);
  const dispatch = useDispatch();
  const {
    is_end,
    books,
    loading_fetch_books
  } = useSelector(({ booksReducer }: IRootState ) => booksReducer);

  function onEndReached() {
    
    if(!is_end) {
      dispatch(fetchBooks(offset + 1));
      setOffset(offset + 1);
    }
  }

  useEffect(() => {
    dispatch(fetchBooks(offset));
  }, []);

  return (
    <Container>
      <Header>
        <Title>
          <Logo />
          <TitleSvg />
        </Title>
        <LogoutButton>
          <LogoutSvg />
        </LogoutButton>
      </Header>
      <Search>
        <SearchInput 
          name="book"
          placeholder='Procure um livro'
        />
        <Filter />
      </Search>
      <List
        data={books}
        keyExtractor={(item) => `${item.id}`}
        refreshing={loading_fetch_books}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CardBook data={item} />
        )}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <ListFooter isLoading={loading_fetch_books} />
        )}
      />
    </Container>
  );
}