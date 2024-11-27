import { Image, StyleSheet, Text, View } from "react-native"

export default function Item(prod) {
    console.log(prod)
    

    return (
        <View style={styles.itemContainer}>
            <View style={styles.itemImageContainer}>
                <Image style={styles.itemImage} source={require('../../assets/img/abaca.png')} />
            </View>
            <View style={styles.itemDesc}>
                <View style={{gap: 10}}>
                    <Text style={{fontSize: 24, fontWeight: 'bold'}}>{prod.name}</Text>
                    <View style={{display: 'flex', flexDirection: 'row', gap: 8}}>
                        <Image source={require('../../assets/img/map-pin.png')} /><Text style={{fontSize: 18, fontWeight: 'semibold'}}>{prod.local}</Text>
                    </View >
                    <View style={{display: 'flex', flexDirection: 'row', gap: 8}}>
                        <Image source={require('../../assets/img/perfil.png')} /><Text style={{fontSize: 18, fontWeight: 'semibold'}}>{prod.author}</Text>
                    </View>
                </View>
                <View style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
                    <Text style={{fontSize: 24, color: '#15803d', paddingTop: 15}}>$</Text>
                    <Text style={{fontSize: 70, color: '#15803d'}}>
                        {prod.price}
                    </Text>
                </View>
            </View>
        </View>
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
        objectFit: 'contain'
    },
    itemDesc: {
        flex: 3,
    }
})