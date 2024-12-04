import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import global from "../../assets/style/global";
import Item from "../../components/Home/Item";
import useAuthStore from "../../store/authStore";
import { router } from "expo-router";
import useProductStore from "../../store/prodStore";

const items = {
    name: 'Abacate Paulista',
    local: 'Mercale - Avenida Ceara',
    author: 'Alan123',
    price: 8.99,
}
const dados = [
    {
        id: 1,
        name: 'Abacate Paulista',
        local: 'Mercale - Avenida Ceara',
        author: 'Alan123',
        price: 8.99,
    },
    {
        id: 2,
        name: 'Abacaxi Verde',
        local: 'IG - Avenida Calama',
        author: 'Raul29',
        price: 11.99,
    },
    {
        id: 3,
        name: 'Manga Verde',
        local: 'Meta 21 - Abuna',
        author: 'Bianca75',
        price: 7.99,
    },
    {
        id: 4,
        name: 'Morango Grande Verde',
        local: 'Feira da Quarta Feira',
        author: 'Joana77',
        price: 3.99,
    },
    {
        id: 3,
        name: 'Manga Verde',
        local: 'Meta 21 - Abuna',
        author: 'Bianca75',
        price: 7.99,
    },
    {
        id: 4,
        name: 'Morango Grande Verde',
        local: 'Feira da Quarta Feira',
        author: 'Joana77',
        price: 3.99,
    }
];

export default function Home() {
    const [ prod, setProd ] = useState([])
    const { loggedUser } = useAuthStore();

    const { getProd, products } = useProductStore()

    useEffect(() => {
        if (!loggedUser) {
            router.replace('/');
        } else {
            getProd()
            if(products){
                setProd(products)
                console.log(products)
            }

        }
    }, [loggedUser, router]);

    return (
        <View style={{flex: 1}}>
            <View style={styles.searchContainer}>
                <TextInput inputMode="search" style={styles.search} placeholder="Search Product"/>
                <TouchableOpacity style={styles.searchBtn} title="Search" >
                    <Image source={require('../../assets/img/Search.png')} />
                </TouchableOpacity>
            </View>
            <ScrollView style={global.container}>
                <View style={styles.itemContainer}>
                    {/* {prod ? prod.map(item => (
                        <Item key={item.id} prod={item} />
                    ))
                    : <Text>There is no product yet</Text>
                    } */}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    searchContainer: {
        display: 'flex',
        flexDirection: 'row',
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        zIndex: 1,
        backgroundColor: 'white',
        paddingTop: 16,
        padding: 8,
    },
    search: {
        paddingHorizontal: 16,
        borderWidth: 0.5,
        borderColor: '#6b7280',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        flex: 12,
        fontSize: 16,
    },
    searchBtn: {
        flex: 1.5,
        backgroundColor: '#e5e7eb',
        borderWidth: 0.5,
        borderColor: '#6b7280',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemContainer: {
        gap: 20,
        flexGrow: 1
    }
});
