import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from "expo-router";

export default function TabLayout () {
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
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name='plus-square' color={color} />,
                }}
            />
        </Tabs>
    )
}