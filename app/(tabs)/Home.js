import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import global from "../../assets/style/global";
import Item from "../../components/Home/Item";
import useAuthStore from "../../store/authStore";
import { router } from "expo-router";
import useProductStore from "../../store/prodStore";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Home() {
    const [ prod, setProd ] = useState([])
    const [ search, setSearch ] = useState('')
    const { loggedUser } = useAuthStore();

    const { getProd, products, isLoading } = useProductStore()

    useEffect(() => {
        if (!loggedUser) {
            router.replace('/');
        } else {
            getProd()
           }
    }, [loggedUser, router]);

    useEffect(() => {
        if (products && products.length > 0) {
            setProd(products);
        } else {
            setProd([])
        }

    }, [products])

    const handleSearch = (text) => {
        if ( text && text.length > 0){
            setSearch(text)
        } else {
            getProd()
        }
    }

    const searchProd = () => {
        if( search && search.length > 0 ){
            getProd(search)
        }
    }

    return (
        <View style={{flex: 1}}>
            <View style={styles.searchContainer}>
                <TextInput onChangeText={handleSearch} inputMode="search" style={styles.search} placeholder="Search Product">
                </TextInput>
                <TouchableOpacity onPress={searchProd} style={styles.searchBtn} title="Search" >
                    <FontAwesome size={20} name='search' color={'#374151'} />
                    {/* <Image source={require('../../assets/img/Search.png')} /> */}
                </TouchableOpacity>
            </View>
            {isLoading ? (
                <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator size="large" color={'#22c55e'} />
                </View>
            ): (
                <ScrollView style={global.container}>
                <View style={styles.itemContainer}>
                    {prod && prod.length > 0 ? (
                        prod.map(item => (
                            <Item key={item.id} prod={item} />
                        ))
                    ) : (
                        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>No products available...</Text>
                    )}
                </View>
            </ScrollView>
            )}
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
        paddingHorizontal: 8,
        paddingVertical: 8
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
