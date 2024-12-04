import { Stack } from "expo-router";

export default function RootLayout(){
  const atackOpt = {
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 32,
      color: '#374151'
    },
    headerTitleAlign: 'center',
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
      <Stack.Screen name="index" options={{headerShown: false,}}/>
      <Stack.Screen name ="EditPerfil" options={{
        ...atackOpt,
        title: 'Edit Perfil',
      }}/>
      <Stack.Screen name ="Camera" options={{
        ...atackOpt,
        title: 'Camera',
      }}/>
      <Stack.Screen name ="Register" options={{
        ...atackOpt,
        title: 'Register',
      }}/>
    </Stack>
  )
}
