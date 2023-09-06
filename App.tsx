import {
  useFonts, 
  Quicksand_400Regular,
  Quicksand_600SemiBold
} from "@expo-google-fonts/quicksand";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Carrinho from './src/pages/Carrinho';

export default function App() {
  const [fonteCarregada] = useFonts({
    QRegular: Quicksand_400Regular,
    QSemiBold: Quicksand_600SemiBold
  });

  if (!fonteCarregada) {
    return null;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
    <StatusBar />
      <Carrinho/>
    </SafeAreaView>
  );
}


