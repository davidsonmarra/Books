import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import { Routes } from './src/components/routes';
import theme from './src/global/styles/theme';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar
          style='light'
          backgroundColor='transparent'
          translucent
        />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

