import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { CameraView, useCameraPermissions } from "expo-camera"
import { useEffect, useRef } from "react";

export default function Camera() {
    const [permission, requestPermission] = useCameraPermissions();
    // const [type, setType] = useState(Camera.Constants.Type.back);
    const cameraRef = useRef(null);

    useEffect(() => {
        (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);

    const snapPhoto = async () => {
        if (cameraRef.current) {
        const photo = await cameraRef.current.takePictureAsync();
        }
    };

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
        <View style={styles.container}>
            <Text style={styles.message}>We need your permission to show the camera</Text>
            <Button onPress={requestPermission} title="grant permission" />
        </View>
        );
    }

    return (
        <View style={{flex: 1}}>
            <CameraView useRef={cameraRef} style={{flex: 1}} facing={'front'} s >
                <TouchableOpacity 
                    onPress={snapPhoto} 
                    style={{
                        backgroundColor: 'white', 
                    }} 
                >
                    <Text>Foto</Text>
                </TouchableOpacity>
            </CameraView>
        </View>
    )
}

const styles = StyleSheet.create({
    
})