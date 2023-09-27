import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native';


export const Hospitales = (props: any) => {
  const data = [
    {
      id: '1',
      name: 'Hospital A',
      address: 'Dirección del Hospital A',
      description:
        'Este es un hospital de ejemplo con un texto más largo. Pueden haber múltiples líneas de texto aquí para demostrar el desplazamiento vertical cuando hay mucho texto en el cuadro.',
    },
    {
      id: '2',
      name: 'Hospital B',
      address: 'Dirección del Hospital B',
      description:
        'Descripción del Hospital B. Agrega más información sobre este hospital aquí. Pueden haber múltiples líneas de texto en la descripción.',
    },
    {
      id: '3',
      name: 'Hospital C',
      address: 'Dirección del Hospital C',
      description:
        'Este es el Hospital C. Aquí puedes proporcionar detalles adicionales sobre este hospital. El texto se desplazará si es demasiado largo.',
    },
    {
      id: '4',
      name: 'Hospital D',
      address: 'Dirección del Hospital D',
      description:
        'Hospital D. Agrega información sobre este hospital aquí. Si la descripción es larga, se permitirá el desplazamiento vertical.',
    },
  ];


  // Renderizar cada elemento de la lista
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => props.navigation.navigate('Hospital')}>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text style={styles.itemAddress}>{item.address}</Text>
        <ScrollView style={styles.itemDescriptionContainer}>
          <Text style={styles.itemDescription}>{item.description}</Text>
        </ScrollView>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>DonaVida+</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
  item: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 2,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemAddress: {
    fontSize: 16,
    color: 'gray',
  },
  itemDescriptionContainer: {
    marginTop: 10,
    maxHeight: 100,
  },
  itemDescription: {
    fontSize: 14,
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

export default Hospitales;
