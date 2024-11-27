import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import global from "../../assets/style/global";
import Item from "../../components/Home/Item";

const dados = [
    {
        name: 'Abacate Paulista',
        local: 'Mercale - Avenida Ceara',
        author: 'Alan123',
        price: 8.99,
    },
    {
        name: 'Abacaxi Verde',
        local: 'IG - Avenida Calama',
        author: 'Raul29',
        price: 11.99,
    },
    {
        name: 'Manga Verde',
        local: 'Meta 21 - Abuna',
        author: 'Bianca75',
        price: 7.99,
    },
    {
        name: 'Morango Grande Verde',
        local: 'Feira da Quarta Feira',
        author: 'Joana77',
        price: 3.99,
    }
]

export default function Home(){
    return (
        <View style={global.container}>
            <View style={styles.searchContainer}>
                <TextInput style={styles.search} placeholder="Search Product"/>
                <TouchableOpacity style={styles.searchBtn} title="Search" >
                    <Image source={require('../../assets/img/Search.png')} />
                </TouchableOpacity>
            </View>
            <View style={ styles.itemContainer}>

                {dados.map((item) => {
                    {console.log(item)}
                    <Item prod={item} />
                })}

            </View>

            <View>
                <Text>navbar</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    search: {
        paddingHorizontal: 16,
        borderWidth: 0.5,
        borderColor: '#6b7280',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        flex: 12,
        fontSize: 16
    },
    searchBtn: {
        flex: 1.5,
        backgroundColor: '#e5e7eb',
        borderWidth: 0.5,
        borderColor: '#6b7280',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemContainer: {
        gap: 20,
        paddingTop: 32
    }
})