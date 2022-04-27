import React, { useState } from 'react';
import { TouchableOpacityProps } from 'react-native';
import {
  Container,
  Title
} from './styles';

export function Button({}: TouchableOpacityProps) {
  return (
    <Container>
      <Title>Entrar</Title>
    </Container>
  );
}