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
  Title
} from './styles';

interface Props {
  data: BookDTO;
}

export function CardBookComponent({ data }: Props) {
  return (
    <Container>
      <ImageBook source={{ uri: data.imageUrl }}/>
      <Info>
        <Header>
          <Title>{data.title}</Title>
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
          <InfoDetails>{data.publisher}</InfoDetails>
          <InfoDetails>Publicado em {data.category}</InfoDetails>
        </Footer>
      </Info>
    </Container>
  );
}

export const CardBook = memo(CardBookComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.data, nextProps.data);
})