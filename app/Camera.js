import { Button, Text, TouchableOpacity, View } from "react-native"
import { CameraView, useCameraPermissions } from "expo-camera"
import { useContext, useEffect, useRef, useState } from "react";
import { router } from "expo-router";
import { StateContext } from "../Context/ProductContext";

export default function Camera( addPhoto ) {
    const [ prod, setProd ] = useContext(StateContext)
    const [ image, setImage ] = useState('')
    const [permission, requestPermission] = useCameraPermissions();
    
    const cameraRef = useRef(null);

    useEffect(() => {
        if(image){
            setProd({...prod, image:image})
            router.back()
        }
    }, [image])

    const takePicture = async () => {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync();
            setImage(photo.uri)
        }
    }

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    return (
        <View style={{flex: 1}}>
            <CameraView ref={cameraRef} style={{flex: 1}} facing={'front'} >
                <View style={{
                    position: 'absolute',
                    bottom: 20, // Adds space from the bottom (adjust as needed)
                    left: '50%',
                    transform: [{ translateX: -230 }], // Center the button horizontally
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                }}> 
                    <TouchableOpacity 
                        onPress={takePicture} 
                        style={{
                            height: 80,
                            width: 80,
                            borderRadius: 40,  // Half of height and width for perfect circular button
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            borderWidth: 2,
                            borderColor: '#ccc',
                        }} 
                    >
                        <Text>Foto</Text>
                    </TouchableOpacity>
                </View>
            </CameraView>
        </View>
    )
}