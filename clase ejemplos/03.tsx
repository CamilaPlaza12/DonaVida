import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const App = () => {
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    if (progress < 100) {
      setProgress(progress + 10);
    }
  };

  const resetProgress = () => {
    setProgress(0);
  };

  const showAlert = () => {
    Alert.alert('Vicky:', 'Hola love u!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${progress}%` }]} />
        <Text style={styles.progressBarText}>{progress}%</Text>
      </View>
      <Button title="Aumentar Progreso" onPress={increaseProgress} />
      <Button title="Resetear Progreso" onPress={resetProgress} />
      <View style={styles.pinkButtonContainer}>
        <Button title="VICKY TOCA ACÁ" onPress={showAlert} color="pink" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBarContainer: {
    width: '80%',
    marginTop: 20,
  },
  progressBar: {
    height: 20,
    backgroundColor: 'green',
  },
  progressBarText: {
    marginTop: 5,
    textAlign: 'center',
  },
  pinkButtonContainer: {
    marginTop: 20,
  },
});

export default App;
