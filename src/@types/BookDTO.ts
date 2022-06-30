import { CategoryProps } from './CategoryProps';

export default interface BookDTO {
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
