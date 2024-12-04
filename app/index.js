import { Alert, Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import global from '../assets/style/global'
import { useState } from 'react';
import useAuthStore from '../store/authStore';
import { router } from 'expo-router';

export default function App() {
  const [usuario, setUsuario] = useState({
    user: "emilys",
    pass: "emilyspass"
  })

  const { login, errorMessage, loggedUser } = useAuthStore()

  const handleInputUsuario = (text) => {
    setUsuario({...usuario, user:text})
  }
  
  const handleInputPass = (text) => {
    setUsuario({...usuario, pass:text})
  }

  const handleRegister = () => {
    router.navigate('Register')
  }

  const logar = async () => {
    if(usuario.user && usuario.pass) {
      login(usuario.user, usuario.pass)

      if(errorMessage){
        Alert.alert(errorMessage)
        
      } else if (loggedUser){
        router.replace('Home')
      }

    } else {
      ToastAndroid.show('Enter all the credentials!', ToastAndroid.TOP)
    }
  }
  return (
    <View style={global.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../assets/img/logo.png')} />
        <Text style={styles.title}>LOGIN</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.input} >
          <Text style={styles.txt} >User</Text>
          <TextInput onChangeText={handleInputUsuario} placeholder='Enter your username here...' inputMode='email' keyboardType='email-address' style={global.inputfield}></TextInput>
        </View>
        <View style={styles.input}>
          <Text style={styles.txt}>Password</Text>
          <TextInput onChangeText={handleInputPass} placeholder='Enter your password here...' autoCapitalize="none" secureTextEntry style={global.inputfield} ></TextInput>
        </View> 
        <TouchableOpacity onPress={logar} style={global.primarytouch}>
          <Text style={global.touchtxt}>Log In</Text>
        </TouchableOpacity>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={{width: 130}}>Don`t have an account? </Text><TouchableOpacity onPress={handleRegister}><Text style={global.link}>Register</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 36,
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    width: 220,
    height: 220,
  },
  title: {
    color: '#111827',
    fontSize: 38,
    fontWeight: 'bold',
    letterSpacing: -0.03,
    paddingTop: 62,
    paddingBottom: 46
  },
  content:{
    flex: 1,
    gap: 20,
  },
  input: {
    gap: 8
  },
  txt: {
    color: '#111827'
  },
  linkcontainer: {
    flex: 1
  },
});
