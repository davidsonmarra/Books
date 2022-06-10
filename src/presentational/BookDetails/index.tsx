import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import BookDTO from '../../@types/BookDTO';
import BackSvg from '../../assets/back.svg';
import QuoteSvg from '../../assets/quote.svg';

interface Props {
  book: BookDTO;
}

interface PropsStyle {
  isLast: boolean;
}

export const StyledContainer = styled.View`
  flex: 1;
  padding: 0 ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const StyledHeader = styled.View`
  padding-top: ${RFValue(45)}px;
`;

export const StyledBackButton = styled.TouchableOpacity`
  width: ${RFValue(32)}px;
  height: ${RFValue(32)}px;
  justify-content: center;
  align-items: center;
  border: ${RFValue(1)}px solid ${({ theme }) => theme.colors.input_background};
  border-radius: ${RFValue(16)}px;
`;

export const StyledBack = styled(BackSvg)``;

export const StyledContent = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: RFValue(16),
  },
})`
  padding: 0 ${RFValue(40 - 16)}px;
`;

export const StyledBookImage = styled.Image`
  width: ${RFValue(240)}px;
  height: ${RFValue(350)}px;
  align-self: center;
  margin-top: ${RFValue(20)}px;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
`;

export const StyledTitle = styled.Text`
  align-self: center;
  text-align: center;
  margin-top: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(28)}px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const StyledAuthors = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: ${RFValue(16)}px;
`;

export const StyledAuthor = styled.Text<PropsStyle>`
  margin-right: ${({ isLast }) => (isLast ? RFValue(4) : 0)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.button};
`;

export const StyledInfoTitle = styled.Text`
  margin-top: ${RFValue(16)}px;
  margin-bottom: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(12)}px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.dark};
`;

export const StyledInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledInfoKey = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const StyledInfoValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.details};
`;

export const StyledQuote = styled(QuoteSvg)`
  margin-bottom: ${RFValue(8)}px;
`;

export default function BookDetails({ book }: Props) {
  const { goBack } = useNavigation();

  function handleGoBack() {
    goBack();
  }

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledBackButton onPress={() => handleGoBack()}>
          <StyledBack />
        </StyledBackButton>
      </StyledHeader>
      <StyledContent showsVerticalScrollIndicator={false}>
        <StyledBookImage source={{ uri: book.imageUrl }} />
        <StyledTitle numberOfLines={2}>{book.title}</StyledTitle>
        <StyledAuthors>
          {book.authors?.map((author, index) => (
            <StyledAuthor key={author} isLast={index !== book.authors?.length - 1}>
              {author}
              {/* eslint no-unsafe-optional-chaining: [0] */}
              {index !== book.authors?.length - 1 && ','}
            </StyledAuthor>
          ))}
        </StyledAuthors>
        <StyledInfoTitle>Informações</StyledInfoTitle>
        <StyledInfo>
          <StyledInfoKey>Páginas</StyledInfoKey>
          <StyledInfoValue>{book.pageCount} páginas</StyledInfoValue>
        </StyledInfo>
        <StyledInfo>
          <StyledInfoKey>Editora</StyledInfoKey>
          <StyledInfoValue>{book.publisher}</StyledInfoValue>
        </StyledInfo>
        <StyledInfo>
          <StyledInfoKey>Publicação</StyledInfoKey>
          <StyledInfoValue>{book.published}</StyledInfoValue>
        </StyledInfo>
        <StyledInfo>
          <StyledInfoKey>Idioma</StyledInfoKey>
          <StyledInfoValue>{book.language}</StyledInfoValue>
        </StyledInfo>
        <StyledInfo>
          <StyledInfoKey>Título Original</StyledInfoKey>
          <StyledInfoValue>{book.title}</StyledInfoValue>
        </StyledInfo>
        <StyledInfo>
          <StyledInfoKey>ISBN-10</StyledInfoKey>
          <StyledInfoValue>{book.isbn10}</StyledInfoValue>
        </StyledInfo>
        <StyledInfo>
          <StyledInfoKey>ISBN-13</StyledInfoKey>
          <StyledInfoValue>{book.isbn13}</StyledInfoValue>
        </StyledInfo>
        <StyledInfo>
          <StyledInfoKey>Categoria</StyledInfoKey>
          <StyledInfoValue>{`${book.category}`}</StyledInfoValue>
        </StyledInfo>
        <StyledInfoTitle>Resenha da Editora</StyledInfoTitle>
        <StyledQuote />
        <StyledInfoValue>{book.description}</StyledInfoValue>
      </StyledContent>
    </StyledContainer>
  );
}
