import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.logo} src='../assets/img/logo.svg' />
        <Text style={styles.title}>LOGIN</Text>
          <Text style={styles.txt} >User</Text>
          <TextInput style={styles.inputfield}></TextInput>
        <Text style={styles.txt}>Senha</Text>
        <TextInput style={styles.inputfield} ></TextInput>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontxt}>Entrar</Text>
        </TouchableOpacity>
        <Text  style={styles.link}>Registrar</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logo: {
    width: 205,
    hieght: 205,
    paddingBottom: 62
  },
  title: {
    fontSize: 38,
    fontWeight: 'semibold',
    letterSpacing: -0.03,
    paddingBottom: 46
  },
  txtcard: {
  },
  txt: {
    color: '#6b7280'
  },
  inputfield:{
    color: 'inputfield',
    border: 2,
    borderColor: '#6b7280'
  },
  buttontxt:{},
  link: {}
});
