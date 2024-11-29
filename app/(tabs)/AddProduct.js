import { Animated, FlatList, SectionList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import global from "../../assets/style/global";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";

const categories = [
    { id: 1, name: "Fruits"},
    { id: 2, name: "Clothes"},
    { id: 3, name: "Accessories"},
]

const locals = [
    { id: 1, name: "IG"},
    { id: 2, name: "Arasuper"},
    { id: 3, name: "Meta 21"},
]

export default function AddProduct () {
    const [selectedCategory, setSelectedCategory] = useState()

    const [height, setHeight] = useState(0);
    const onContentSizeChange = event =>
            setHeight(Math.max(35, event.nativeEvent.contentSize.height)
    );
    
    return (
        <View style={global.container}>
            <View style={styles.input} >
                <Text style={styles.txt} >Local (Select one) *</Text>
                <View
                    style={styles.picker}
                >
                    <Picker 
                        prompt="Select one..."
                        mode="dropdown"
                        selectedValue={selectedCategory}
                        onValueChange={(itemvalue, itemIndex) => 
                            setSelectedCategory(itemvalue)
                        }
                    >
                        {locals.map((item) => {
                            return <Picker.Item label={item.name} value={item.name}/>
                        })}
                    </Picker>
                </View>
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >Product name *</Text>
                <TextInput placeholder="Enter the product name here..." inputMode="text" style={styles.inputfield}/>
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >Price *</Text>
                <TextInput placeholder="Enter the product price name here..." inputMode="decimal" style={styles.inputfield}/>
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >Category (Select one) *</Text>
                <View
                    style={styles.picker}
                >
                    <Picker 
                        prompt="Select one..."
                        mode="dropdown"
                        selectedValue={selectedCategory}
                        onValueChange={(itemvalue, itemIndex) => 
                            setSelectedCategory(itemvalue)
                        }
                    >
                        {categories.map((item) => {
                            return <Picker.Item label={item.name} value={item.name}/>
                        })}
                    </Picker>
                </View>
            </View>
            <View style={styles.inputObs} >
                <Text style={styles.txt} >Observation *</Text>
                <TextInput placeholder="Enter any useful observation..." multiline style={styles.inputobs} onContentSizeChange={onContentSizeChange}/>
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >Photos *</Text>
                <TextInput placeholder="Espera-se uma foto" style={styles.inputfield} />
            </View>
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
    }
})