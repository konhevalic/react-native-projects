import { useState, useContext } from 'react';
import { View, Text, Button, FlatList, Image} from 'react-native'

import globalStyles from '../../globalStyles';
import styles from './styles'

const ListaImagens = () => {

    const [images, setImages] = useState([
        require('../assets/images/animal.png'),
        require('../assets/images/bike.png'),
        require('../assets/images/binary.webp'),
        require('../assets/images/boar.webp'),
        require('../assets/images/board.jpg'),
        require('../assets/images/clouds.jpg'),
        require('../assets/images/dices.png'),
        require('../assets/images/wood-love.jpg')
    ])

    return (
        <View style={globalStyles.container}>
            <FlatList 
                data={images}
                showsVerticalScrollIndicator={false} 
                renderItem= {({item}) => {
                    return (
                        <View style={globalStyles.item}>
                            <Image
                                style={styles.image}
                                source={item}      
                            />
                        </View>
       
                    )
                }}
            />
        </View>
    )
}

export default ListaImagens
