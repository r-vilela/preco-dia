import { StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native"
import global from "../../assets/style/global"

export default function AddCategory() {
    function addCategory() {
        ToastAndroid.show('Category added!', ToastAndroid.SHORT);
    }

    return (
        <View style={global.container}>
            <View style={styles.input} >
                <Text style={styles.txt} >Category name</Text>
                <TextInput placeholder="Enter a new Category..." inputMode="text" style={styles.inputfield}/>
            </View>
            <TouchableOpacity onPress={addCategory} style={{...global.primarytouch, marginTop: 15}}>
                <Text style={global.touchtxt}>Add Category</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin:4, 
        gap: 8
    },
    inputObs: {
        margin:4, 
        gap: 8
    },
    txt: {
        color: '#111827',
        fontSize: 16
    },
    inputfield: {
        borderWidth: 1.32,
        borderColor: '#d1d5db',
        borderRadius: 8
    },
})