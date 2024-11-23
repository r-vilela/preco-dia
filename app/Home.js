import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import global from "../assets/style/global";
import Item from "../components/Item";

export default function Home(){
    return (
        <View style={global.container}>
            <TextInput style={styles.search} placeholder="Search Product">
                <Button title="search" >
                    <Image source={require('../assets/img/Search.png')} />
                </Button>
            </TextInput>
           <Item />
            <View>
                <Text>navbar</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        paddingHorizontal: 16,
        borderWidth: 0.5,
        borderColor: '#6b7280',
        borderRadius: 20
    },
})