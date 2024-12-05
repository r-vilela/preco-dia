import { Picker } from "@react-native-picker/picker";
import { Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import global from "../../assets/style/global";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useContext, useEffect, useState } from "react";
import useAuthStore from "../../store/authStore";
import useCategoryStore from "../../store/categoryStore";
import useLocalStore from "../../store/localStore";
import { router } from "expo-router";
import { StateContext } from "../../Context/ProductContext";

export default function Page() {
    const [ cat, setCat ] = useState([])
    const [ loc, setLoc ] = useState([])
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [selectedLocal, setLocalCategory] = useState('')
    const [ prod, setProd ] = useContext(StateContext)
        
    const { loggedUser, name } = useAuthStore()
    const { getCategory, category, isLoadingCat } = useCategoryStore()
    const { getLocal, local, isLoadingLocal } = useLocalStore()


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
        setProd({...prod, ...obj})
    }

    const handleInputLocal = (obj) => {
        setProd({...prod, ...obj})
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
        if (category && category.length > 0) {
            if(!isLoadingCat){
                setCat(category);
            }
        }
        if (local && local.length > 0) {
            if(!isLoadingLocal){
                setLoc(local);
            }
        }
    }, [category, isLoadingCat, isLoadingLocal])

    function addProduct() {
        if(selectedLanguage && selectedLocal && prod.nome && prod.preco && prod.usuario){
            console.log(prod, selectedLanguage, selectedLocal)
            
            ToastAndroid.show('Product added!', ToastAndroid.SHORT);
        } else {
            console.log(prod, selectedLanguage, selectedLocal)
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
                        selectedValue={selectedLocal}
                        onValueChange={(itemvalue, itemIndex) => 
                            handleInputLocal(itemvalue)
                        }
                    >
                        <Picker.Item label="Select one..." value="" /> 
                        {loc.map((item) => {
                            return <Picker.Item key={item.id} label={item.nome} value={item.name}/>
                        })}
                    </Picker>
                </View>
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >Product name *</Text>
                <TextInput 
                    onChangeText={handleInputNome} 
                    placeholder="Enter the product name here..." 
                    inputMode="text" 
                    style={styles.inputfield}
                />
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >Price *</Text>
                <TextInput 
                    onChangeText={handleInputPreco} 
                    placeholder="Enter the product price name here..." 
                    inputMode="decimal" 
                    style={styles.inputfield}
                />
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >Category (Select one) *</Text>
                <View
                    style={styles.picker}
                >
                    <Picker 
                        mode="dropdown"
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                            handleInputCategory(itemValue)
                        }
                    >
                        <Picker.Item label="Select one..." value="" /> 
                        {cat.map((item) => {
                            return <Picker.Item key={item.id} label={item.nome} value={item.name}/>
                        })}
                    </Picker>
                </View>
            </View>
            <View style={styles.inputObs} >
                <Text style={styles.txt} >Description *</Text>
                <TextInput 
                    onChangeText={handleInputDescricao} 
                    placeholder="Enter any useful observation..." 
                    multiline 
                    style={styles.inputobs} 
                    onContentSizeChange={onContentSizeChange}
                />
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >Photos *</Text>
                <View style={styles.CamContainer}>
                    {prod.image && prod.image.length > 0 ? 
                        <Image style={{height:180, width: 180}} source={{uri:prod.image}} />
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
        borderWidth: 1.32,
        borderColor: '#d1d5db',
        borderRadius: 8
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