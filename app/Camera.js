import { Button, Text, TouchableOpacity, View } from "react-native"
import { CameraView, useCameraPermissions } from "expo-camera"
import { useContext, useEffect, useRef, useState } from "react";
import { router } from "expo-router";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { StateContext } from "../context/ProductContext";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Camera( addPhoto ) {
    const [facing, setFacing] = useState('back');
    const [flash, setFlash] = useState('off');
    const [ prod, setProd ] = useContext(StateContext)
    const [ image, setImage ] = useState('')
    const [permission, requestPermission] = useCameraPermissions();
    
    const cameraRef = useRef(null);

    useEffect(() => {
        if(image){
            setProd({...prod, image:{uri:image, type: 'image/jpeg', name: 'image.jpeg'}})
            router.back()
        }
    }, [image])

    const takePicture = async () => {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync();
            setImage(photo.uri)
        }
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    const toggleCameraFacing = () => {
        setFacing(current => (current === 'back' ? 'front' : 'back'))
    }
    const toggleCameraFlash = () => {
        setFlash(current => (current === 'off' ? 'on' : 'off'))
    }

    return (
        <View style={{flex: 1}}>
            <CameraView ref={cameraRef} style={{flex: 1}} facing={facing} flash={flash} >
                { facing === 'back' ?
                <TouchableOpacity 
                    onPress={toggleCameraFlash} 
                    style={{
                        position: 'absolute',
                        right: 10,
                        top: 10,
                        height: 50,
                        width: 50,
                        borderRadius: 25, 
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'white',

                    }} 
                >
                    <FontAwesome name="flash" size={30} color={'#374151'} />
                    <Text style={{fontWeight:'bold', color:'#374151' }} >{flash}</Text>
                </TouchableOpacity>
                :
                null
                }
                <View style={{
                    position: 'absolute',
                    bottom: 20, 
                    left: '50%',
                    transform: [{ translateX: -230 }],
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
                            borderRadius: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            borderWidth: 2,
                            borderColor: '#ccc',
                        }} 
                    >
                        <Text>Foto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={toggleCameraFacing} 
                        style={{
                            position: 'absolute',
                            right: 30,
                            height: 50,
                            width: 50,
                            borderRadius: 25, 
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'white',

                        }} 
                    >
                        <FontAwesome6 name="camera-rotate" size={30} color={'#374151'} />
                    </TouchableOpacity>
                </View>
            </CameraView>
        </View>
    )
}