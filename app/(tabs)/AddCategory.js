import { StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native"
import global from "../../assets/style/global"
import useCategoryStore from "../../store/categoryStore";
import { useState } from "react";

export default function AddCategory() {
    const [ category, setCategory] = useState({
        nome: ''
    })

    const { postCategory, getCategory, postErrorMessage } = useCategoryStore()

    const handleCategory = (text) => {
        setCategory({nome:text})
    }

    function addCategory() {
        if( category.nome && category.nome.length > 0){
            postCategory(category)
            
            if(postErrorMessage) {
                ToastAndroid.show('Error to add category! \n Try again later, if the error persists, please contact our support team', ToastAndroid.SHORT);
            } else {
                ToastAndroid.show('Category added!', ToastAndroid.SHORT);
                getCategory()
                setCategory({
                    nome: ''
                })
            }

        } else {
            ToastAndroid.show('Enter Category name!', ToastAndroid.SHORT);
        }
    }
    
    return (
        <View style={global.container}>
            <View style={styles.input} >
                <Text style={styles.txt} >Category name</Text>
                <TextInput 
                onChangeText={handleCategory} 
                placeholder="Enter a new Category..." 
                inputMode="text" 
                value={category.nome}
                style={global.inputfield}/>
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