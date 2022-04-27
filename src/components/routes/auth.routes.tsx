import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../../screens/SignIn';

export type PublicRootStackParamList = {
  Home: undefined;
}

const { Navigator, Screen } = createNativeStackNavigator<PublicRootStackParamList>();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    > 
      <Screen
        name="Home"
        component={() => <></>}
      />
    </Navigator>
  );
}