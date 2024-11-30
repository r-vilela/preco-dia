import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from "expo-router";

export default function TabLayout () {
   const headerOpt = {
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 32,
        color: '#374151'
    },
    headerTitleAlign: 'center',
   }

    return (
        <Tabs screenOptions ={{ tabBarActiveTintColor: '#22c55e', tabBarInactiveTintColor: '#166534'}}>
            <Tabs.Screen
                name ="Home"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name='home' color={color} />,
                }}
            />
                <Tabs.Screen
                    name ="AddProduct"
                    options={ {
                        ...headerOpt,
                        title: 'Add a Product',
                        tabBarIcon: ({ color }) => <FontAwesome size={28} name='plus-square' color={color} />,
                    }}
                />
            <Tabs.Screen
                name ="AddCategory"
                options={{
                    ...headerOpt,
                    title: 'Add a Category',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name='list' color={color} />,
                }}
            />
            <Tabs.Screen
                name ="AddLocal"
                options={{
                    ...headerOpt,
                    title: 'Add a Local',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name='map-marker' color={color} />,
                }}
            />
            <Tabs.Screen
                name ="Perfil"
                options={{
                    ...headerOpt,
                    title: 'Perfil',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name='user' color={color} />,
                }}
            />
        </Tabs>
    )
}