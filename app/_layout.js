import { Stack } from "expo-router";

export default function RootLayout(){
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
      <Stack.Screen name="index" options={{headerShown: false,}}/>
      <Stack.Screen name ="EditPerfil" options={{
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 32,
                  color: '#374151'
                },
                headerTitleAlign: 'center',
                title: 'Edit Perfil',
            }}/>
    </Stack>
  )
}
