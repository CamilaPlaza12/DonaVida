/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';

const listaAlumnos = [
  {
    name: 'Vicky',
    surname: 'Heine',
    legajo: 123456789,
  },
  {
    name: 'Eduardo',
    surname: 'Retamales',
    legajo: 1,
  },
];

class MiComponente extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name
    };
  }

  render() {
    return (
      <View>
        <Text>Hola soy {this.state.name}!</Text>
      </View>
    );
  }
}

function Greetings(props) {
  const [name, setName] = React.useState(props.name);
  const [clicks, setClicks] = React.useState(0);

  function sumarClicks(num) {
    setClicks(clicks + num);
  }

  /*const sumarClicks = (num) => {
    setClicks(clicks + num)
  }*/

  return (
    <View>
      <Text>Hola soy {name}</Text>
      <Text>{clicks}</Text>
      <Button title="clickame" onPress={() => sumarClicks(5)} />
    </View>
  );
}

function App() {
  return (
    <View>
      <FlatList
        data={listaAlumnos}
        keyExtractor={item => item.legajo.toString()}
        renderItem={({item}) => (
          <View
            style={{
              backgroundColor: 'grey',
              margin: 10,
              borderWidth: 1,
              borderRadius: 5,
            }}>
            <Text>{item.name}</Text>
            <Text>{item.surname}</Text>
            <Text>{item.legajo}</Text>
          </View>
        )}
      />
      <Text>Hola Mundo!</Text>
      <MiComponente name="Manuel" />
      <Greetings name="MANUEL" />
    </View>
  );
}

export default App;