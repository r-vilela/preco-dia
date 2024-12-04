import { StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native"
import global from "../../assets/style/global"
import useAuthStore from "../../store/authStore";
import { router } from "expo-router";

export default function AddCategory() {
    if (router.isReady) {
        return (<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 32}}>Loading...</Text>
                </View>)
    }

    const { loggedUser } = useAuthStore()

    if(!loggedUser){
        router.replace('/')
    }

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