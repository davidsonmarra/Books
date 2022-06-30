import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignInScreen } from '../screens';
import PublicRootStackParamList from '../../@types/PublicRootStackParamList';

const { Navigator, Screen }: any = createNativeStackNavigator<PublicRootStackParamList>();

export function PublicRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='SignInScreen'
    >
      <Screen name='SignInScreen' component={SignInScreen} />
    </Navigator>
  );
}
