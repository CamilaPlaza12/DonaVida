import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput } from 'react-native';

const LoginScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>DONAVIDA+</Text>
      <Image
        source={require('./imagenes/imagenPrincipal.png')} 
        style={styles.image}
      />
      <Text style={styles.welcomeText}>¡BIENVENIDO!</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry // Para ocultar la contraseña
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50, // Añade espacio entre el borde superior y el título "DONAVIDA+"
  },
  header: {
    fontSize: 45, // Agrandar la letra del título "DONAVIDA+"
    fontWeight: 'bold',
    color: '#A4161A', // Cambiar el color a rojo
    textAlign: 'center',
    marginTop: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.5)', // Agregar sombra al texto
    textShadowOffset: { width: 3, height: 3 }, // Configurar la posición de la sombra
    textShadowRadius: 4, // Configurar el radio de la sombra
  },
  image: {
    width: 240,
    height: 220,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20, // Añade espacio después de la imagen
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#A4161A', // Cambiar el color a rojo
    textAlign: 'center',
    marginBottom: 20, // Añade espacio después del texto "¡BIENVENIDO!"
  },
  inputContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
});

export default LoginScreen;
