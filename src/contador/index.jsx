import { useState } from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native"

import globalStyles from "../../globalStyles";

const Contador = () => {

    const [contador1, setContador1] = useState(0)
    const [contador2, setContador2] = useState(0)

    const incrementador = (player) => {
        if(player === "player1") {
            setContador1(contador1 + 1)
        } else {
            setContador2(contador2 + 1)
        }
    }

    const decrementador = (player) => {
        if(player === "player1") {
            setContador1(contador1 - 1)
        } else {
            setContador2(contador2 - 1)
        }
    }
    
    return (
        <View style={globalStyles.container}>
            <View style={styles.contador1} >
                <View style={styles.pontuacao}>
                    <Text style={styles.pontos}>
                        {contador1}
                    </Text>
                </View>
                <View>
                    <Button
                        title="+"
                        onPress={() => incrementador("player1")}
                        color="blue"
                    />
                    <Button
                        title="-"
                        onPress={() => decrementador("player1")}
                        color="blue"
                    />
                </View>


            </View>
            <View style={styles.contador2}>
                <View style={styles.pontuacao}>
                    <Text style={styles.pontos}>
                        {contador2}
                    </Text>
                </View>
                <Button
                    title="+"
                    onPress={() => incrementador("player2")}
                    color="green"
                />
                <Button
                    title="-"
                    onPress={() => decrementador("player2")}
                    style={styles.texts}
                    color="green"
                />


            </View>
        </View>
    )
}

export default Contador;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },

    incrementadores: {
        display: "flex",
        flexDirection: "row"
    },

    pontuacao: {
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 36
    },

    pontos: {
        color: 'white',
        fontSize: 64,
        textAlign: 'center',
        justifyContent: 'flex-end',
        marginBottom: 36
    },

    contador1: {
        flex: 0.5,
        backgroundColor: 'blue',
        width: Dimensions.get('window').width,
        transform: [{ rotate: '180deg' }]
    },

    contador2: {
        flex: 0.5,
        backgroundColor: 'green',
        width: Dimensions.get('window').width
    }
  });