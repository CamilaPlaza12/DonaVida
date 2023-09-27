import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Hospital = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>DonaVida+</Text>
      </View>
      <Text style={styles.subtitle}>Hospital</Text>
      <Image
        source={require('./imagenes/Untitled.png')} // Reemplaza con la ruta correcta de tu imagen
        style={styles.image}
      />
      <View style={styles.bottomNav}>
        {/* Agrega aquí los íconos y etiquetas de navegación */}
        <Text style={styles.navItem}>Inicio</Text>
        <Text style={styles.navItem}>Buscar</Text>
        <Text style={styles.navItem}>Perfil</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: 'rgb(229, 56, 59)',
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  image: {
    width: '85%', // Ocupa el ancho completo del contenedor
    height: '35%',
    resizeMode: 'contain', // Ajusta la forma en que la imagen se ajusta a su contenedor
    alignSelf: 'center', // Centra la imagen horizontalmente
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    height: 60,
    position: 'absolute', // Para posicionar en la parte inferior
    bottom: 0, // Anclaje en la parte inferior de la pantalla
    width: '100%', // Ancho completo
  },
  navItem: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
});

export default Hospital;
