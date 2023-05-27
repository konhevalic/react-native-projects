
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { ContainerContext } from './src/contextos';

import Home from './src/home';
import CalculoMedias from './src/media';
import ListaAlunos from './src/listaAlunos';
import Contador from './src/contador';
import ListaImagens from './src/listaImagens';

const Stack = createStackNavigator()

export default function App() {

  const [showModal, setShowModal] = useState(false)
  const [alunos, setAlunos] = useState([]);


  const values = {
    showModal,
    setShowModal,
    alunos,
    setAlunos
  }


  return (
    <ContainerContext.Provider value={values}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Calculo Medias" component={CalculoMedias} />
          <Stack.Screen name="Lista de Alunos" component={ListaAlunos} />
          <Stack.Screen name="Contador" component={Contador} />
          <Stack.Screen name="Lista de Imagens" component={ListaImagens} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContainerContext.Provider>
  );
}