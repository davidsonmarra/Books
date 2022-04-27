import React, { useState } from 'react';
import TitleSvg from '../../assets/title-dark.svg';
import LogoutSvg from '../../assets/logout.svg';
import {
  Container,
  Filter,
  Header,
  Logo,
  LogoutButton,
  Search,
  Title
} from './styles';
import { SearchInput } from '../../components/form/SearchInput';

export function Home() {
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
    </Container>
  );
}