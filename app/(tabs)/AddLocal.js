import { Animated, FlatList, SectionList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import global from "../../assets/style/global";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";

export default function AddLocal () {

    function addLocal() {
        ToastAndroid.show('Local added!', ToastAndroid.SHORT);
    }
    
    return (
        <View style={global.container}>
            <View style={styles.input} >
                <Text style={styles.txt} >Local`s name</Text>
                <TextInput placeholder="Enter the local name here..." inputMode="text" style={styles.inputfield}/>
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >CEP</Text>
                <TextInput placeholder="Enter CEP..." inputMode="decimal" style={styles.inputfield}/>
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >Street</Text>
                <TextInput placeholder="Enter the street..." inputMode="decimal" style={styles.inputfield}/>
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >Nº</Text>
                <TextInput placeholder="Enter the place Nº..." inputMode="decimal" style={styles.inputfield}/>
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >Neighborhood</Text>
                <TextInput placeholder="Enter the neighborhood name..." inputMode="decimal" style={styles.inputfield}/>
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >City</Text>
                <TextInput placeholder="Enter the city name..." inputMode="decimal" style={styles.inputfield}/>
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >State</Text>
                <TextInput placeholder="Espera-se uma foto" style={styles.inputfield} />
            </View>
            <TouchableOpacity onPress={addLocal} style={{...global.primarytouch, marginTop: 15}}>
                <Text style={global.touchtxt}>Add Local</Text>
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
    }
})