import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const Proceso = (props:any) => {

    const [activeButton, setActiveButton] = useState(0);

  const buttons = [
    { title: 'Para donar sangre', content: ' Deberás sentarte en una posición cómoda mientras te limpian y esterilizan tu brazo. Te mantendrás sentado mientras se extrae la sangre de tu brazo. Una vez que se termina la donación, colocarán una venda en tu brazo. Una donación completa de sangre es de hasta 500 mililitros o, aproximadamente, 17 onzas.' },
    { title: 'Para donar medula', content: 'Contenido del botón 2' },
    { title: 'Para donar plaquetas', content: 'Contenido del botón 3' },
  ];

  const toggleButton = (index) => {
    if (activeButton === index) {
      setActiveButton(null); // Cierra el botón si ya está abierto
    } else {
      setActiveButton(index); // Abre el botón seleccionado
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>DonaVida+</Text>
      </View>
      <View style={styles.tituloRequerimientos}>
        <Text style={styles.RequerimientosText}>¿Cómo es el proceso?</Text>
      </View>
      <View style={styles.buttonContainer}>
        {buttons.map((button, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.button, activeButton === index && styles.activeButton]}
            onPress={() => toggleButton(index)}
          >
            <Text style={[styles.buttonText, activeButton === index && styles.activeButtonText]}>
              {button.title}
            </Text>
            {activeButton === index && (
              <Text style={[styles.buttonContent, activeButton === index && styles.activeButtonContent]}>
                {button.content}
              </Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
      <View>
      <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('Hospitales')}
        ><Text style={styles.buttonText}>Hospitales</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('Hospital')}
        ><Text style={styles.buttonText}>Hospital</Text>
        </TouchableOpacity>
      </View>
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
  tituloRequerimientos: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingBottom: 10,
  },
  RequerimientosText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'rgb(229, 56, 59)',
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 5,
  },
  activeButton: {
    backgroundColor: 'rgb(229, 56, 59)',
  },
  buttonText: {
    fontSize: 20, // Tamaño de texto más grande
    fontWeight: 'bold',
    color: 'black', // Color de texto original
  },
  activeButtonText: {
    color: 'white', // Cambia el color del texto activo a blanco
  },
  buttonContent: {
    marginTop: 10,
    fontSize: 18, // Tamaño de texto más grande
    color: 'black', // Color de texto original
  },
  activeButtonContent: {
    color: 'white', // Cambia el color del contenido activo a blanco
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    height: 60,
  },
  navItem: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
});

export default Proceso;
