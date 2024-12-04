import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import global from "../../assets/style/global"
import { router } from 'expo-router';
import useAuthStore from '../../store/authStore';

export default function Perfil() {
    const { logout, loggedUser } = useAuthStore()

    function editPerfil() {
        router.navigate('EditPerfil')
    }

    const handleLogout = () => {
        logout()
    }

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
                <Image source={require('../../assets/img/perfil.png')} />
                <Text style={{fontSize: 32, color: '#fff'}}>Lizza</Text>
            </View>
            <View style={styles.optContainer}>
                <TouchableOpacity onPress={editPerfil} style={styles.opt}>
                    <FontAwesome size={60} name='user-o' color={'#374151'} />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Edit Profile</Text>
                        <Text style={styles.desc} >Email, security, change number</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.opt}>
                    <FontAwesome size={60} name='bell-o' color={'#374151'} />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Notigications</Text>
                        <Text style={styles.desc}>Activate or deactivate notifications</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.opt}>
                    <FontAwesome size={60} name='trash-o' color={'#374151'} />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Delete account</Text>
                        <Text style={styles.desc}>Delete account or registers</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLogout} style={styles.opt}>
                    <FontAwesome size={60} name='close' color={'#374151'} />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Logout</Text>
                        <Text style={styles.desc}>Logout from app</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    optContainer: {
        padding: 8,
        gap: 16
    },
    opt: {
        display: 'flex', 
        flexDirection:"row", 
        gap: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        gap:8, 
        justifyContent: 'center', 
        borderBottomWidth: 1.32,
        borderBottomColor: '#d1d5db',
        borderBottomRadius: 8,
        flex: 1,
        padding: 12
    },
    title: {
        color: '#374151',
        fontSize: 24, 
        fontWeight: 'bold'
    },
    desc: {
        color: '#6b7280', 
        fontWeight: 'thin'
    }
})