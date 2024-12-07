import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function Item({prod}) {

    return (
        <TouchableOpacity key={prod.id} style={styles.itemContainer}>
            <View style={styles.itemImageContainer}>
                {prod.image && prod.image.length > 0 ? 
                    <Image style={styles.itemImage} source={{uri:'https://api-produtos-6p7n.onrender.com/'+prod.image}} />
                :
                    <FontAwesome size={160} name='image' color={'#374151'} />
                }
            </View>
            <View style={styles.itemDesc}>
                <View style={{gap: 10}}>
                    <Text style={{fontSize: 24, fontWeight: 'bold'}}>{prod.nome}</Text>
                    <View style={{display: 'flex', flexDirection: 'row', gap: 8}}>
                        <Fontisto size={20} name="map-marker-alt" color={'#374151'} />
                        <Text style={{fontSize: 18, fontWeight: 'semibold'}}>{prod.Location.nome}</Text>
                    </View >
                    <View style={{display: 'flex', flexDirection: 'row', gap: 8}}>
                        <FontAwesome size={20} name='user-o' color={'#374151'} />
                        <Text style={{fontSize: 18, fontWeight: 'semibold'}}>{prod.usuario}</Text>
                    </View>
                </View>
                <View style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
                    <Text style={{fontSize: 24, color: '#15803d', paddingTop: 15}}>$</Text>
                    <Text  style={{fontSize: 70, color: '#15803d'}}>
                        {parseFloat(prod.preco).toFixed(2)}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#f3f4f6',
        padding: 16,
        borderWidth: 1,
        borderColor: '#9ca3af',
        borderRadius: 16
    },
    itemImageContainer: {
        flex: 2,
    },
    itemImage: {
        width: '100%',
        height: 160,
        objectFit: 'fill',
    },
    itemDesc: {
        flex: 3,
        marginLeft: 8
    }
})