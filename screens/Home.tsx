import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla de HOME</Text>
      {/* Otros elementos y contenido de registro aquí */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});


