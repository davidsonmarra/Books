import BookDTO from './BookDTO';

type AuthRootStackParamList = {
  HomeScreen: undefined;
  BookDetailsScreen: { book: BookDTO };
};

export default AuthRootStackParamList;
