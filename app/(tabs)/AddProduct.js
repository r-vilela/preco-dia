import { Animated, FlatList, SectionList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import global from "../../assets/style/global";
import { useState } from "react";

const categories = [
    { id: 1, name: "Fruits"},
    { id: 2, name: "Clothes"},
    { id: 3, name: "Accessories"},
]

export default function AddProduct () {
    const [expandedSection, setExpandedSection] = useState(null); // Track expanded section
  const [selectedItems, setSelectedItems] = useState([]); // Track selected items
  const [animation] = useState(new Animated.Value(0)); // Animation value for collapsing/expanding sections

  const toggleSection = (id) => {
    const toValue = expandedSection === id ? 0 : 1; // If the section is already expanded, collapse it
    setExpandedSection(toValue === 1 ? id : null); // Set expanded section ID
    Animated.timing(animation, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleItemSelect = (item) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(item)
        ? prevSelectedItems.filter((selectedItem) => selectedItem !== item) // Deselect if already selected
        : [...prevSelectedItems, item] // Add item to selected list
    );
  };

  const renderItem = ({ item }) => {
    const heightAnimation = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 150], // Control the expanded height
    });

    return (
      <View style={styles.section}>
        <TouchableOpacity onPress={() => toggleSection(item.id)} style={styles.header}>
          <Text style={styles.headerText}>{item.title}</Text>
        </TouchableOpacity>

        <Animated.View style={[styles.content, { height: heightAnimation }]}>
          {item.items.map((subItem) => (
            <TouchableOpacity
              key={subItem}
              onPress={() => handleItemSelect(subItem)}
              style={[
                styles.item,
                selectedItems.includes(subItem) ? styles.selectedItem : {},
              ]}
            >
              <Text style={styles.itemText}>{subItem}</Text>
            </TouchableOpacity>
          ))}
        </Animated.View>
      </View>
    );
  };

    return (
        <View style={global.container}>
            <View style={styles.input} >
                <Text style={styles.txt} >Local *</Text>
                <TextInput style={styles.inputfield}/>
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >Name *</Text>
                <TextInput style={styles.inputfield}/>
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >Price *</Text>
                <TextInput style={styles.inputfield}/>
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >Category *</Text>
                
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
                {/* Show selected items */}
                <View style={styles.selectedContainer}>
                    <Text style={styles.selectedText}>Selected Items:</Text>
                    {selectedItems.length > 0 ? (
                    selectedItems.map((item, index) => (
                        <Text key={index} style={styles.selectedItemText}>
                        {item}
                        </Text>
                    ))
                    ) : (
                    <Text>No items selected</Text>
                    )}
                </View>
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >Observation *</Text>
                <TextInput multiline style={styles.inputobs}/>
            </View>
            <View style={styles.input} >
                <Text style={styles.txt} >Photos *</Text>
                <TextInput style={styles.inputfield}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
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
})