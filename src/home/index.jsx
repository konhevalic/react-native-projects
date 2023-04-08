import { View, StyleSheet, Button, FlatList } from 'react-native'
import uuid from 'react-native-uuid';

import globalStyles from '../../globalStyles';


const width_proportion = '50%';

const Home = ({navigation}) => {

    const applications = [
        {id: 1, screen: 'Contador'},
        {id: 2, screen: 'Calculo Medias'},
        {id: 3, screen: 'Lista de Alunos'},
        {id: 4, screen: 'Empty'},
        {id: 5, screen: 'Empty'},
        {id: 6, screen: 'Empty'},
        {id: 7, screen: 'Empty'},
        {id: 8, screen: 'Empty'}
    ]

    return (
        <View style={styles.app}>
            <FlatList 
                data={applications}
                numColumns={2}
                key={item => item.id}
                keyExtractor={item => item.id}
                renderItem= {({item}) => {
                    return (
                        <View style={styles.item}>
                            <Button
                                title={item.screen}
                                onPress={() => navigation.navigate(item.screen)}
                                color={item.screen === "Empty" ? "gray": "blue"}
                            />
                        </View>
                        
                    )
                }}
            />
            
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    app: {
        marginHorizontal: "auto",
        width: 400,
        flexDirection: "row",
        flexWrap: "wrap",
        maxWidth: '100%'
      },
      item: {
        flex: 1,
        minWidth: width_proportion,
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        margin: 2,
        backgroundColor: "#487aa1",
        borderRadius: 8.0,
        color: '#aaa'
      }
  });
