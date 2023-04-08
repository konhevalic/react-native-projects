import { useState, useBoolean } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'

import globalStyles from '../../globalStyles';

const CalculoMedias = () => {

    const [nota1, setNota1] = useState(null);
    const [nota2, setNota2] = useState(null);
    const [resultado, setResultado] = useState(null);

    const calcularMedia = () => {
        const n1 = parseFloat(nota1.replace(',', '.'))
        const n2 = parseFloat(nota2.replace(',', '.'))
        const media = ( n1 + n2 ) / 2

        setResultado(media.toFixed(2))
        setNota1("")
        setNota2("")
    }

    return (
        <View style={styles.container}>
            <Text>
                Digite suas notas para calcular a média:
            </Text>
            <TextInput
            placeholder="9.5"
            value={nota1}
            keyboardType='numeric'
            onChangeText={(nota) => setNota1(nota)}
            style={globalStyles.input}
            />
            <TextInput
            placeholder="7.3"
            keyboardType='numeric'
            value={nota2}
            onChangeText={(nota) => setNota2(nota)}
            style={globalStyles.input}
            />
            <Button 
                title="Calcular Média" 
                onPress={() => calcularMedia()}
            />
            {resultado && (
            <Text>
                Sua média é: {resultado}
            </Text>
            )}

            
        </View>
    )
}

export default CalculoMedias

const styles = StyleSheet.create({
    container: {
      flex: 0.5,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
  });