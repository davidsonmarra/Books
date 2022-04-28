import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../screens/SignIn';

export type PublicRootStackParamList = {
  SignIn: undefined;
};

const { Navigator, Screen }: any =
  createNativeStackNavigator<PublicRootStackParamList>();

export function PublicRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SignIn"
    >
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
}
