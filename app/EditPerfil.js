import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import global from "../assets/style/global"

export default function EditPerfil() {
    return (
        <View style={{...global.container, paddingTop: 280}}>
            <View style={{
                height: 250, 
                backgroundColor: '#16a34a', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                position: 'absolute',
                left: 0,
                top: 0,
                right: 0,
                gap: 16
            }}>
                <Image source={require('../assets/img/perfil.png')} />
                <Text style={{fontSize: 32, color: '#fff'}}>Lizza</Text>
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >Name</Text>
                <TextInput placeholder="Enter your name here..." inputMode="text" style={styles.inputfield}/>
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >E-mail</Text>
                <TextInput placeholder="Enter your E-mail here..." inputMode="email" style={styles.inputfield}/>
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >CPF</Text>
                <TextInput placeholder="Enter your CPF here..." inputMode="numeric" style={styles.inputfield}/>
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >Password</Text>
                <TextInput placeholder="Enter your Password here..." inputMode="text" secureTextEntry style={styles.inputfield}/>
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >Telefone</Text>
                <TextInput placeholder="Enter your phone number here..." inputMode="tel" style={styles.inputfield}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    optContainer: {
        padding: 8,
        gap: 16
    },
    input: {
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