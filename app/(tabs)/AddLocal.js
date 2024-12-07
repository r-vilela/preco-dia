import { StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native"
import global from "../../assets/style/global";
import useAuthStore from "../../store/authStore";
import { router } from "expo-router";
import { useState } from "react";
import useLocalStore from "../../store/localStore";

export default function AddLocal () {
    const [ loc, setLoc] = useState({
        nome: '',
        cep: '',
        logradouro: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
    })

    const { loggedUser } = useAuthStore()
    const { postLocal } = useLocalStore()

    if(!loggedUser){
        router.replace('/')
    }

    const handleInputNome = (text) => {
        setLoc({...loc, nome: text})
    }
    
    const handleInputCEP = (text) => {
        setLoc({...loc, cep:text})
    }

    const handleInputLog = (text) => {
        setLoc({...loc, logradouro:text})
    }

    const handleInputNum = (text) => {
        setLoc({...loc, numero:text})
    }

    const handleInputBairro = (text) => {
        setLoc({...loc, bairro:text})
    }

    const handleInputCidade = (text) => {
        setLoc({...loc, cidade:text})
    }

    const handleInputEstado = (text) => {
        setLoc({...loc, estado:text})
    }

    function addLocal() {
        if(loc.nome && loc.cep && loc.logradouro && loc.numero && loc.bairro && loc.cidade && loc.estado) {
            postLocal(loc)
            setLoc({
                nome: '',
                cep: '',
                logradouro: '',
                numero: '',
                bairro: '',
                cidade: '',
                estado: '',
            })
            ToastAndroid.show('Local added!', ToastAndroid.SHORT);
        } else {
            ToastAndroid.show('Enter all the fields available!', ToastAndroid.SHORT);
        }
    }
    
    return (
        <View style={global.container}>
            <View style={styles.input} >
                <Text style={styles.txt} >Local`s name</Text>
                <TextInput onChangeText={handleInputNome} placeholder="Enter the local name here..." inputMode="text" style={styles.inputfield}/>
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >CEP</Text>
                <TextInput onChangeText={handleInputCEP} placeholder="Enter CEP..." inputMode="decimal" style={styles.inputfield}/>
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >Street</Text>
                <TextInput onChangeText={handleInputLog} placeholder="Enter the street..." inputMode="text" style={styles.inputfield}/>
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >Nº</Text>
                <TextInput onChangeText={handleInputNum} placeholder="Enter the place Nº..." inputMode="decimal" style={styles.inputfield}/>
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >Neighborhood</Text>
                <TextInput onChangeText={handleInputBairro} placeholder="Enter the neighborhood name..." inputMode="text" style={styles.inputfield}/>
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >City</Text>
                <TextInput onChangeText={handleInputCidade} placeholder="Enter the city name..." inputMode="text" style={styles.inputfield}/>
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >State</Text>
                <TextInput onChangeText={handleInputEstado} placeholder="Enter the state name..." style={styles.inputfield} />
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