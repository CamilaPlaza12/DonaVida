import React from 'react';
import { View, ScrollView, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const usuarioImage = require('./imagenes/usuario.png');
const candadoImage = require('./imagenes/candado.png');
const correoImage = require('./imagenes/correo-electronico.png');
const infoImage = require('./imagenes/informacion.png');

export const SignUp = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcomeText}>Sing Up</Text>

      <View style={styles.block}>
        <Image source={usuarioImage} style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor="white"
        />
      </View>

      <View style={styles.block}>
        <Image source={usuarioImage} style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Apellido"
          placeholderTextColor="white"
        />
      </View>

      <View style={styles.block}>
        <Image source={correoImage} style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="white"
        />
      </View>

      <View style={styles.block}>
        <Image source={usuarioImage} style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Género"
          placeholderTextColor="white"
        />
      </View>

      <View style={styles.block}>
        <Image source={usuarioImage} style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Edad"
          placeholderTextColor="white"
        />
      </View>

      <View style={styles.block}>
      <Image source={infoImage} style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Peso"
          placeholderTextColor="white"
        />
      </View>

      <View style={styles.block}>
        <Image source={infoImage} style={styles.inputIcon} />
        <Text style={styles.label}>Tomas alguna medicación?</Text>
        <TextInput
          style={styles.input}
          placeholder="Respuesta"
          placeholderTextColor="white"
        />
      </View>

      <View style={styles.block}>
        <Image source={infoImage} style={styles.inputIcon} />
        <Text style={styles.label}>Posibilidad de Embarazo</Text>
        <TextInput
          style={styles.input}
          placeholder="Respuesta"
          placeholderTextColor="white"
        />
      </View>

      <View style={styles.block}>
        <Image source={candadoImage} style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="white"
        />
      </View>

      <View style={styles.block}>
      <Image source={candadoImage} style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Repetir Contraseña"
          placeholderTextColor="white"
        />
      </View>

      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#A4161A',
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: '#A4161A',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
  block: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#BA181B',
    borderRadius: 35,
    padding: 10,
    marginBottom: 15,
    width: 310,
    alignSelf: 'center'
  },
  label: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  input: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
    marginLeft: 8
  },
  continueButton: {
    backgroundColor: '#FF5252',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 35
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});


