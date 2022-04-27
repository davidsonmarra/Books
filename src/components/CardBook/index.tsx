import React, { memo } from 'react';
import { BookDTO } from '../../screens/Home';
import {
  Author,
  Container,
  Footer,
  Header,
  ImageBook,
  Info,
  InfoDetails,
  Title,
  Wrapper
} from './styles';

interface Props {
  data: BookDTO;
  handleGoToBookDetails: (book: BookDTO) => void;
}

export function CardBookComponent({ data, handleGoToBookDetails }: Props) {
  return (
    <Wrapper>
      <Container onPress={() => handleGoToBookDetails(data)}>
        <ImageBook source={{ uri: data.imageUrl }}/>
        <Info>
          <Header>
            <Title numberOfLines={1}>{data.title}</Title>
            {
              data.authors?.map((author, index) => (
                <Author key={author} isLast={index !== data.authors?.length - 1}>
                  {author}
                  {index !== data.authors?.length - 1 && ','}
                </Author>
              ))
            }
          </Header>
          <Footer>
            <InfoDetails>{data.pageCount} páginas</InfoDetails>
            <InfoDetails numberOfLines={1}>{data.publisher}</InfoDetails>
            <InfoDetails>{`Publicado em ${data.category}`}</InfoDetails>
          </Footer>
        </Info>
      </Container>
    </Wrapper>
  );
}

export const CardBook = memo(CardBookComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.data, nextProps.data);
})