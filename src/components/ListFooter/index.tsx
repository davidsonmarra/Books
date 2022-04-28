import React from 'react';
import { Container, Loading } from './styles';

interface Props {
  isLoading: boolean;
}

export default function ListFooter({ isLoading }: Props) {
  return <Container>{isLoading && <Loading />}</Container>;
}
