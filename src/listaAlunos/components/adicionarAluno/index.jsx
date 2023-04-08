import { useState, useContext } from 'react';
import { StyleSheet, View, Button, TextInput, Modal } from 'react-native'
import { ContainerContext } from '../../../contextos';

import globalStyles from '../../../../globalStyles';

const AdicionarAluno = () => {

    const {setShowModal, showModal, setAlunos} = useContext(ContainerContext)

    const [aluno, setAluno] = useState("");

    const salvarAluno = () => {
        if(aluno) {
            setAlunos(prevAlunos => [...prevAlunos, aluno])
            setShowModal(false)
            setAluno("")
        }
    }

    return (
        <Modal 
            visible={showModal}
            animationType="slide"
            transparent={true}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TextInput
                        style={globalStyles.input}
                        onChangeText={(aluno) =>setAluno(aluno)}
                        placeholder="Aluno"
                    />
                    <Button 
                        onPress={() => salvarAluno()}
                        title="Salvar"
                    />
                    <Button 
                        onPress={() => setShowModal(false)}
                        title="Fechar"
                    />
                </View>
            </View>
        </Modal>
    )
}

export default AdicionarAluno;

const styles = StyleSheet.create({

    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },

      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },

  });