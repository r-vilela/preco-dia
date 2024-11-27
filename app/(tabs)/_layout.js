import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from "expo-router";

export default function TabLayout () {
    return (
        <Tabs screenOptions ={{ tabBarActiveTintColor: '#10b981', tabBarInactiveTintColor: '#34d399'}}>
            <Tabs.Screen
                name ="index"
                options={{
                    href: null,
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name ="Home"
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name='home' color={color} />,
                }}
            />
        </Tabs>
    )
}