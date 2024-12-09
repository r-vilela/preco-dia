import { Picker } from "@react-native-picker/picker";
import { Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import global from "../../assets/style/global";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useContext, useEffect, useState } from "react";
import useAuthStore from "../../store/authStore";
import useCategoryStore from "../../store/categoryStore";
import useLocalStore from "../../store/localStore";
import { router } from "expo-router";
import { StateContext } from "../../context/ProductContext";
import useProductStore from "../../store/prodStore";

export default function Page() {
    const [ cat, setCat ] = useState([])
    const [ loc, setLoc ] = useState([])
    const [ prod, setProd ] = useContext(StateContext)
        
    const { loggedUser, name } = useAuthStore()
    const { getCategory, category, isLoadingCat } = useCategoryStore()
    const { getLocal, local, isLoadingLocal } = useLocalStore()
    const { postProd, getProd, postErrorMessage } = useProductStore()

    
    const handleInputNome = (text) => {
        setProd({...prod, nome:text})
    }
    
    const handleInputPreco = (text) => {
        setProd({...prod, preco:text})
    }
    
    const handleInputImage = (text) => {
        setProd({...prod, image:text})
    }
    
    const handleInputDescricao = (text) => {
        setProd({...prod, descricao:text})
    }
    
    const handleInputCategory = (obj) => {
        if(obj !== 0 ){
            setProd({...prod, categoriaId:obj})
        } else {
            setProd({...prod, categoriaId:''})
        }
    }
    
    const handleInputLocal = (obj) => {
        if(obj !== 0){
            setProd({...prod, localId:obj})
        } else {
            setProd({...prod, localId:''})
        }
    }
    
    const rmvImage = () => {
        setProd({...prod, image:''})
    }
    
    useEffect(() => {
        if (!loggedUser) {
            router.replace('/');
        } else {
            getCategory()
            getLocal()
            setProd({...prod, usuario:name})
        }
    }, [loggedUser]);
    
    useEffect(() => {
        setCat([{id:0, nome:'Select an item...'}, ...category ])
        setLoc([{id:0, nome:'Select an item...'}, ...local])
    }, [local, category])

    function addProduct() {
        if( prod.image && prod.categoriaId && prod.localId && prod.nome && prod.preco && prod.usuario){
            console.log(JSON.stringify(prod))
            postProd(prod)
            
            
            if (postErrorMessage){
                ToastAndroid.show('Error to add product! \n Try again later, if the error persists, please contact our support team', ToastAndroid.SHORT);    
            } else {
                ToastAndroid.show('Product added!', ToastAndroid.SHORT);
                getProd()
                setProd({
                    nome: "",
                    preco: "",
                    descricao: "",
                    image: "",
                    usuario: "",
                    categoriaId: "",
                    locaId: "",
                })
            }
        } else {
            console.log('OPA! NAO FOI TUDO', prod)
            ToastAndroid.show('Enter all the fields available', ToastAndroid.SHORT);
        }
    }

    const [height, setHeight] = useState(0);
    const onContentSizeChange = event =>
            setHeight(Math.max(35, event.nativeEvent.contentSize.height)
    );

    const AddPhoto = () => {
        router.push({ pathname: "Camera", params: { handleInputImage: handleInputImage } })
    }

    return(

        <View style={global.container}>
            <View style={styles.input} >
                <Text style={styles.txt} >Local (Select one) *</Text>
                <View
                    style={styles.picker}
                >
                    <Picker
                        mode="dropdown"
                        selectedValue={prod.locaId}
                        onValueChange={(itemValue, itemIndex) =>
                            handleInputLocal(itemValue)
                        }
                        >
                        { loc && loc.map ?
                        loc.map((item) => {
                            return <Picker.Item key={item.id} label={item.nome} value={item.id}/>
                        })
                        :
                        <Picker.Item label="Loading" value="" /> 
                        }
                    </Picker>
                </View>
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >Product name *</Text>
                <TextInput 
                    value={prod.nome}
                    onChangeText={handleInputNome} 
                    placeholder="Enter the product name here..." 
                    inputMode="text" 
                    style={global.inputfield}
                />
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >Price *</Text>
                <TextInput 
                    value={prod.preco}
                    onChangeText={handleInputPreco} 
                    placeholder="Enter the product price name here..." 
                    inputMode="decimal" 
                    style={global.inputfield}
                />
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >Category (Select one) *</Text>
                <View
                    style={styles.picker}
                >
                    <Picker
                        mode="dropdown"
                        selectedValue={prod.categoriaId}
                        onValueChange={(itemValue, itemIndex) =>
                            handleInputCategory(itemValue)
                        }
                        >
                        { cat && cat.map ?
                        cat.map((item) => {
                            return <Picker.Item key={item.id} label={item.nome} value={item.id}/>
                        })
                        :
                        <Picker.Item label="Loading" value="" /> 
                        }
                    </Picker>
                </View>
            </View>
            <View style={styles.inputObs} >
                <Text style={styles.txt} >Description *</Text>
                <TextInput 
                    value={prod.descricao}
                    onChangeText={handleInputDescricao} 
                    placeholder="Enter any useful observation..." 
                    multiline 
                    style={{...styles.inputobs, ...global.inputfield}} 
                    onContentSizeChange={onContentSizeChange}
                />
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >Photos *</Text>
                <View style={styles.CamContainer}>
                    {prod.image.uri && prod.image.uri.length > 0 ? 
                        <>
                            <Image style={{height:189, width: 180}} source={{uri:prod.image.uri}} />
                            <FontAwesome onPress={rmvImage} style={{position: 'absolute', right: 8}} size={30} name="close" color='#ef4444' />
                        </>
                    :
                    <>
                        <FontAwesome size={150} name='image' color={'#374151'} />
                        <TouchableOpacity onPress={AddPhoto} style={styles.CamButton}>
                            <Text style={styles.CamText}>Add Photo</Text>
                        </TouchableOpacity>
                    </>    
                    }
                </View>
            </View>
            <TouchableOpacity onPress={addProduct} style={{...global.primarytouch, marginTop: 15}}>
                <Text style={global.touchtxt}>Add Product</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        margin:4, 
        gap: 8
    },
    inputObs: {
        margin:4, 
        gap: 8
    },
    txt: {
        color: '#111827',
        fontSize: 16
    },
    inputfield: {
        borderColor: '#d1d5db',
    },
    inputobs: {
        borderWidth: 1.32,
        borderColor: '#d1d5db',
        borderRadius: 8,
        textAlignVertical: 'top'
    },
    section: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        overflow: 'hidden',
    },
    header: {
        padding: 10,
        backgroundColor: '#f1f1f1',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    content: {
        padding: 10,
        backgroundColor: '#fafafa',
    },
    picker: {
        borderWidth: 1.32,
        borderColor: '#d1d5db',
        borderRadius: 8,
    },
    CamContainer: {
        borderWidth: 1.32,
        borderColor: '#d1d5db',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        padding: 8,
    },
    CamButton: {
        padding: 8,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: '#0ea5e9',
        width: '50%',
    },
    CamText: {
        color: '#f3f4f6',
        fontSize: 20,
        marginHorizontal: 'auto',
        fontWeight: 'bold'
    }
})