import { useContext } from 'react';
import { ContainerContext } from '../../../contextos';
import { StyleSheet, View, Text, FlatList } from 'react-native'

const Lista = () => {

    const { alunos } = useContext(ContainerContext);

    return (
        <FlatList 
            data={alunos}
            renderItem= {({item}) => {
                return (
                    <View>
                        <Text>{item}</Text>
                    </View>
                    
                )
            }}
        />
    )
}

export default Lista;

const styles = StyleSheet.create({
    container: {
      flex: 0.5,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
  });