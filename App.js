import React, { useState } from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';

function App() {
  const [contadorEq1, setContadorEq1] = useState(0);
  const [contadorEq2, setContadorEq2] = useState(0);

  const incrementarEq1 = () => {
    setContadorEq1(contadorEq1 + 1);
  }

  const zerarEq1 = () => {
    setContadorEq1(0);
  }

  const contar3Eq1 = () => {
    setContadorEq1(contadorEq1 + 3);
  }

  const incrementarEq2 = () => {
    setContadorEq2(contadorEq2 + 1);
  }

  const zerarEq2 = () => {
    setContadorEq2(0);
  }

  const contar3Eq2 = () => {
    setContadorEq2(contadorEq2 + 3);
  }

  return (
    <ImageBackground style={{flex: 1}} source={{uri: 'https://w7.pngwing.com/pngs/762/546/png-transparent-wooden-background-wooden-table-wooden-background-board.png'}}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 50, marginBottom: 30, color: 'white', fontWeight: 'bold'}}>Truco</Text>

        <View style={{alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'blue', borderRadius: 10, padding: 10, backgroundColor: 'silver', marginBottom: 30}}>

          <Text style={{fontSize: 30, color: 'blue', }}>Equipe 1</Text>
          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <View style={{margin: 10}}>
              <Button title='Soma +1' onPress={incrementarEq1}></Button>
            </View>
            <View style={{margin: 10}}>
              <Button title='Soma +3' onPress={contar3Eq1}></Button>
            </View>
            <View style={{margin: 10}}>  
              <Button title='Zerar' onPress={zerarEq1}></Button>
            </View>
          </View>
          <Text style={{fontSize: 30}}>Contador: {contadorEq1}</Text>
        </View>

        <View style={{alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'red', borderRadius: 10, padding: 10, backgroundColor: 'silver'}}>
          <Text style={{fontSize: 30, color: 'red', }}>Equipe 2</Text>
          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <View style={{margin: 10}}>
              <Button title='Soma +1' onPress={incrementarEq2}></Button>
            </View>
            <View style={{margin: 10}}>
              <Button title='Soma +3' onPress={contar3Eq2}></Button>
            </View>
            <View style={{margin: 10}}>  
              <Button title='Zerar' onPress={zerarEq2}></Button>
            </View>
          </View>
        <Text style={{fontSize: 30}}>Contador: {contadorEq2}</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

export default App;
