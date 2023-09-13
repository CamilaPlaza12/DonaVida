import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const CardListExercise = () => {
  return (
    <ScrollView>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg' }}
          style={styles.image}
        />
        <Text style={styles.cardTitle}>Título de la Tarjeta 1</Text>
        <Text>Descripción de la tarjeta 1.</Text>
      </View>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg' }}
          style={styles.image}
        />
        <Text style={styles.cardTitle}>Título de la Tarjeta 2</Text>
        <Text>Descripción de la tarjeta 2.</Text>
      </View>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg' }}
          style={styles.image}
        />
        <Text style={styles.cardTitle}>Título de la Tarjeta 3</Text>
        <Text>Descripción de la tarjeta 3.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CardListExercise;
