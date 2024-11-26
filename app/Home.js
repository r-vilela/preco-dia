import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import global from "../assets/style/global";
import Item from "../components/Home/Item";

export default function Home(){
    return (
        <View style={global.container}>
            <View style={styles.searchContainer}>
                <TextInput style={styles.search} placeholder="Search Product"/>
                <TouchableOpacity style={styles.searchBtn} title="Search" >
                    <Image source={require('../assets/img/Search.png')} />
                </TouchableOpacity>
            </View>

           <Item />
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
        flex: 12
    },
    searchBtn: {
        flex: 1,
        borderWidth: 0.5,
        borderColor: '#6b7280',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})