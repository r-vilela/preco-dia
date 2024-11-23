import { StyleSheet } from "react-native";

export default global = StyleSheet.create({
    container: {
        paddingVertical: 16,
        paddingHorizontal: 16,
        flex: 1,
        backgroundColor: '#fff',
    },
    primarytouch: {
        backgroundColor: '#22c55e',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center'
    },
    touchtxt:{
        color: '#f3f4f6',
        fontSize: 16,
        marginHorizontal: 'auto'
    },
    inputfield:{
        borderWidth: 0.5,
        borderColor: '#6b7280',
        borderRadius: 8
    },
    link: {
        color: '#38bdf8', 
        textDecorationLine: 'underline',
    },
})