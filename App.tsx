import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import { Routes } from './src/routes';
import theme from './src/global/styles/theme';
import store from './src/store';

export default function App() {
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

