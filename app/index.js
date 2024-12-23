import { ActivityIndicator, Alert, Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import global from '../assets/style/global'
import { useEffect, useState } from 'react';
import useAuthStore from '../store/authStore';
import { router } from 'expo-router';

export default function App() {
  const [loading, setLoading] = useState()
  const [usuario, setUsuario] = useState({
    user: "",
    pass: ""
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

  useEffect(() => {
    if(errorMessage){
      Alert.alert(errorMessage)
      
    } else if (loggedUser){   
      console.log(loggedUser)   
      router.replace('Home')
    }
  }, [errorMessage, loggedUser])

  const logar = async () => {
    setLoading(true)

    if(usuario.user && usuario.pass) {
      await login(usuario.user, usuario.pass)
      
    } else {
      ToastAndroid.show('Enter all the credentials!', ToastAndroid.TOP)
    }
    setLoading(false)

  }
  return (
    <View style={global.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../assets/img/logo.png')} />
        <Text 
          style={{
            color:'#ef4444', 
            fontWeight: 'bold', 
            fontSize: 20, 
            position: 'absolute', 
            top: 199,
            right: 110
          }}>
            BETA
          </Text>
        <Text style={styles.title}>LOGIN</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.input} >
          <Text style={styles.txt} >User</Text>
          <TextInput onChangeText={handleInputUsuario}  placeholder='Enter your username here...' inputMode='email' autoCapitalize="none" keyboardType='email-address' style={global.inputfield}></TextInput>
        </View>
        <View style={styles.input}>
          <Text style={styles.txt}>Password</Text>
          <TextInput onChangeText={handleInputPass} placeholder='Enter your password here...' autoCapitalize="none" secureTextEntry style={global.inputfield} ></TextInput>
        </View> 
        <TouchableOpacity onPress={logar} style={global.primarytouch}>
          {loading ? 
            <ActivityIndicator color={'white'} />  
          :
            <Text style={global.touchtxt}>Log In</Text>
          }
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
