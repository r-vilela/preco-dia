import {  StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import global from "../../assets/style/global";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";
import useAuthStore from "../../store/authStore";

const categories = [
    { id: 1, name: "Fruits"},
    { id: 2, name: "Clothes"},
    { id: 3, name: "Accessories"},
]

const locals = [
    { id: 1, name: "IG"},
    { id: 2, name: "Arasuper"},
    { id: 3, name: "Meta 21"},
]

export default function AddProduct () {
    if (router.isReady) {
        return (<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 32}}>Loading...</Text>
                </View>)
    }

    const { loggedUser } = useAuthStore()

    if(!loggedUser){
        router.replace('/')
    }

    const [selectedCategory, setSelectedCategory] = useState()

    function addProduct() {
        ToastAndroid.show('Product added!', ToastAndroid.SHORT);
    }

    const [height, setHeight] = useState(0);
    const onContentSizeChange = event =>
            setHeight(Math.max(35, event.nativeEvent.contentSize.height)
    );

    const AddPhoto = () => {
        router.navigate('Camera')
        console.log('camera')
    }
    
    return (
        <View style={global.container}>
            <View style={styles.input} >
                <Text style={styles.txt} >Local (Select one) *</Text>
                <View
                    style={styles.picker}
                >
                    <Picker 
                        prompt="Select one..."
                        mode="dropdown"
                        selectedValue={selectedCategory}
                        onValueChange={(itemvalue, itemIndex) => 
                            setSelectedCategory(itemvalue)
                        }
                    >
                        {locals.map((item) => {
                            return <Picker.Item key={item.id} label={item.name} value={item.name}/>
                        })}
                    </Picker>
                </View>
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >Product name *</Text>
                <TextInput placeholder="Enter the product name here..." inputMode="text" style={styles.inputfield}/>
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >Price *</Text>
                <TextInput placeholder="Enter the product price name here..." inputMode="decimal" style={styles.inputfield}/>
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >Category (Select one) *</Text>
                <View
                    style={styles.picker}
                >
                    <Picker 
                        prompt="Select one..."
                        mode="dropdown"
                        selectedValue={selectedCategory}
                        onValueChange={(itemvalue, itemIndex) => 
                            setSelectedCategory(itemvalue)
                        }
                    >
                        {categories.map((item) => {
                            return <Picker.Item key={item.id} label={item.name} value={item.name}/>
                        })}
                    </Picker>
                </View>
            </View>
            <View style={styles.inputObs} >
                <Text style={styles.txt} >Observation *</Text>
                <TextInput placeholder="Enter any useful observation..." multiline style={styles.inputobs} onContentSizeChange={onContentSizeChange}/>
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >Photos *</Text>
                <View style={styles.CamContainer}>
                    <TouchableOpacity onPress={AddPhoto} style={styles.CamButton}>
                        <Text style={styles.CamText}>Add Photo</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={{...global.primarytouch, marginTop: 15}}>
                <Text style={global.touchtxt}>Add Product</Text>
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
    inputobs: {
        borderWidth: 1.32,
        borderColor: '#d1d5db',
        borderRadius: 8,
        textAlignVertical: 'top'
    },
    section: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        overflow: 'hidden',
    },
    header: {
        padding: 10,
        backgroundColor: '#f1f1f1',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    content: {
        padding: 10,
        backgroundColor: '#fafafa',
    },
    picker: {
        borderWidth: 1.32,
        borderColor: '#d1d5db',
        borderRadius: 8,
    },
    CamContainer: {
        height: 120,
        borderWidth: 1.32,
        borderColor: '#d1d5db',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        padding: 8
    },
    CamButton: {
        padding: 8,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: '#0ea5e9',
        width: '50%'
    },
    CamText: {
        color: '#f3f4f6',
        fontSize: 20,
        marginHorizontal: 'auto',
        fontWeight: 'bold'
    }
})