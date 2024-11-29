import { router } from 'expo-router';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import global from '../assets/style/global'

export default function App() {
  function logar() {
    router.replace('Home')
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
          <TextInput placeholder='Enter your email...' inputMode='email' keyboardType='email-address' style={global.inputfield}></TextInput>
        </View>
        <View style={styles.input}>
          <Text style={styles.txt}>Password</Text>
          <TextInput placeholder='Enter your password...' secureTextEntry style={global.inputfield} ></TextInput>
        </View>
        <TouchableOpacity onPress={logar} style={global.primarytouch}>
          <Text style={global.touchtxt}>Log In</Text>
        </TouchableOpacity>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={{width: 130}}>Don`t have an account? </Text><Text style={global.link}>Register</Text>
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
