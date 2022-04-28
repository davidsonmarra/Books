import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BookDTO, Home } from '../screens/Home';
import BookDetails from '../screens/BookDetails';

export type AuthRootStackParamList = {
  Home: undefined;
  BookDetails: { book: BookDTO };
};

const { Navigator, Screen }: any =
  createNativeStackNavigator<AuthRootStackParamList>();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="BookDetails" component={BookDetails} />
    </Navigator>
  );
}
