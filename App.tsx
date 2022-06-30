import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import AppLoading from 'expo-app-loading';
import { Routes } from './src/routes';
import theme from './src/global/styles/theme';
import store from './src/store';
import {
  useFonts,
  Heebo_400Regular,
  Heebo_500Medium
} from '@expo-google-fonts/heebo';

export default function App() {
  const [fontsLoaded] = useFonts({
    Heebo_400Regular,
    Heebo_500Medium,
  });

  if (!fontsLoaded)
    return <AppLoading />;

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle='dark-content'
          backgroundColor={theme.colors.background}
          translucent
        />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

