import { useState, useContext } from 'react';
import { StyleSheet, View, Text, Button} from 'react-native'
import { ContainerContext } from '../contextos';

import AdicionarAluno from './components/adicionarAluno';
import Lista from './components/lista';

import globalStyles from '../../globalStyles';

const ListaAlunos = () => {

    const {setShowModal} = useContext(ContainerContext)

    return (
        <View style={globalStyles.container}>
            <AdicionarAluno />
            <Button
                onPress={() => setShowModal(true)}
                title="+Add aluno"
            />
            <Lista />
        </View>
    )
}

export default ListaAlunos
