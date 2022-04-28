import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { AuthRootStackParamList } from '../../routes/auth.routes';
import {
  Back,
  BackButton,
  Container,
  Header,
  Content,
  Title,
  BookImage,
  Authors,
  Author,
  InfoTitle,
  InfoKey,
  Info,
  InfoValue,
  Quote,
} from './styles';

type Props = NativeStackScreenProps<AuthRootStackParamList, 'BookDetails'>;

export default function BookDetails({ navigation, route }: Props) {
  const { book } = route.params;

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={() => handleGoBack()}>
          <Back />
        </BackButton>
      </Header>
      <Content showsVerticalScrollIndicator={false}>
        <BookImage source={{ uri: book.imageUrl }} />
        <Title numberOfLines={2}>{book.title}</Title>
        <Authors>
          {book.authors?.map((author, index) => (
            <Author key={author} isLast={index !== book.authors?.length - 1}>
              {author}
              {/* eslint no-unsafe-optional-chaining: [0] */}
              {index !== book.authors?.length - 1 && ','}
            </Author>
          ))}
        </Authors>
        <InfoTitle>Informações</InfoTitle>
        <Info>
          <InfoKey>Páginas</InfoKey>
          <InfoValue>{book.pageCount} páginas</InfoValue>
        </Info>
        <Info>
          <InfoKey>Editora</InfoKey>
          <InfoValue>{book.publisher}</InfoValue>
        </Info>
        <Info>
          <InfoKey>Publicação</InfoKey>
          <InfoValue>{book.published}</InfoValue>
        </Info>
        <Info>
          <InfoKey>Idioma</InfoKey>
          <InfoValue>{book.language}</InfoValue>
        </Info>
        <Info>
          <InfoKey>Título Original</InfoKey>
          <InfoValue>{book.title}</InfoValue>
        </Info>
        <Info>
          <InfoKey>ISBN-10</InfoKey>
          <InfoValue>{book.isbn10}</InfoValue>
        </Info>
        <Info>
          <InfoKey>ISBN-13</InfoKey>
          <InfoValue>{book.isbn13}</InfoValue>
        </Info>
        <Info>
          <InfoKey>Categoria</InfoKey>
          <InfoValue>{`${book.category}`}</InfoValue>
        </Info>
        <InfoTitle>Resenha da Editora</InfoTitle>
        <Quote />
        <InfoValue>{book.description}</InfoValue>
      </Content>
    </Container>
  );
}
