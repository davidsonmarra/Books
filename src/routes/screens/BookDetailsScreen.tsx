import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import BookDetails from '../../presentational/BookDetails';
import AuthRootStackParamList from '../../@types/AuthRootStackParamList';

type Props = NativeStackScreenProps<AuthRootStackParamList, 'BookDetailsScreen'>;

export default function BookDetailsScreen({ route }: Props) {
  const { book } = route.params;
  return <BookDetails book={book} />;
}
