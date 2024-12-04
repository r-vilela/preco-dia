import {  StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import global from "../assets/style/global";

export default function Register () {
    
    return (
        <View style={global.container}>
            <View style={styles.input} >
                <Text style={styles.txt} >E-mail *</Text>
                <TextInput placeholder="Enter your e-mail here..." inputMode="email" style={styles.inputfield}/>
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >Password</Text>
                <TextInput placeholder="Enter your password here..." autoCapitalize="none" inputMode="text" secureTextEntry style={styles.inputfield}/>
            </View>
            <View style={styles.inputObs} >
                <Text style={styles.txt} >Full Name</Text>
                <TextInput placeholder="Enter your full name here..." inputMode="search" style={styles.inputfield}/>
            </View>
            <View style={styles.inputObs} >
                <Text style={styles.txt} >Username</Text>
                <TextInput placeholder="Enter your username here..." style={styles.inputfield}/>
            </View>
            <TouchableOpacity style={{...global.primarytouch, marginTop: 15}}>
                <Text style={global.touchtxt}>Register</Text>
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