import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const data = [
  { id: '1', text: 'Item 1' },
  { id: '2', text: 'Item 2' },
  { id: '3', text: 'Item 3' },
  // Agrega más elementos si es necesario
];

interface Item {
  id: string;
  text: string;
}

const renderItem = ({ item }: { item: Item }) => (
  <View style={styles.item}>
    <Text style={styles.itemText}>{item.text}</Text>
    {/* Agregar contenido adicional debajo del texto */}
    <Text style={styles.itemDescription}>Descripción del elemento</Text>
  </View>
);

export const Home = (props:any) => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>DonaVida+</Text>
      </View>
      <View style={styles.tituloNoticias}>
        <Text style={styles.noticiasText}>NOTICIAS</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal // Configura el FlatList como horizontal
          contentContainerStyle={styles.flatlistContent}
        />
      </View>
      <View style={styles.informacion}>
        <Text style={styles.informacionText}>Información</Text>
        {/* Agrega dos botones debajo de la sección de información */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('Requerimientos')}
        >
          <Text style={styles.buttonText}>Requerimientos para donar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('Proceso')}
        >
          <Text style={styles.buttonText}>Cómo es el proceso</Text>
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
  tituloNoticias: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  noticiasText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'rgb(229, 56, 59)',
  },
  content: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  informacion: {
    alignItems: 'center', // Centra horizontalmente
    justifyContent: 'center', // Centra verticalmente
    paddingVertical: 10,
    width: '100%',
  },
  informacionText: {
    color: 'rgb(229, 56, 59)',
    fontSize: 24,
    fontWeight: 'bold',
  },
  item: {
    width: 200,
    height: 220,
    backgroundColor: 'rgb(229, 56, 59)',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: 'darkred',
  },
  itemText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  itemDescription: {
    // Estilos para la descripción del elemento
  },
  flatlistContent: {
    flexGrow: 1,
  },
  button: {
    backgroundColor: 'rgb(229, 56, 59)',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20, // Agregamos margen a los costados
    marginVertical: 10,
    width: '90%', // Ocupa todo el ancho disponible
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'darkred', // Color del borde rojo oscuro
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
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

