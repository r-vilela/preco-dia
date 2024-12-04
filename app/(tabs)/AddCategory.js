import { StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native"
import global from "../../assets/style/global"
import useAuthStore from "../../store/authStore";
import useCategoryStore from "../../store/categoryStore";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";

export default function AddCategory() {
    const [ category, setCategory] = useState({
        nome: ''
    })

    const { loggedUser } = useAuthStore()
    const { postCategory } = useCategoryStore()

    const handleCategory = (text) => {
        setCategory({nome:text})
    }

    function addCategory() {
        if( category.nome && category.nome.length > 0){
            postCategory(category)
            ToastAndroid.show('Category added!', ToastAndroid.SHORT);
        } else {
            console.log(category)
            ToastAndroid.show('Enter Category name!', ToastAndroid.SHORT);
        }
    }
    
    return (
        <View style={global.container}>
            <View style={styles.input} >
                <Text style={styles.txt} >Category name</Text>
                <TextInput onChangeText={handleCategory} placeholder="Enter a new Category..." inputMode="text" style={styles.inputfield}/>
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