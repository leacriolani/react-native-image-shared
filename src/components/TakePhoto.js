import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { Camera } from "expo-camera"
import * as MediaLibrary from 'expo-media-library'; 

export default function TakePhoto({ navigation }){
    
    const camera = useRef(null)

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    
    const takePicture = async () => {
        try{
            const { uri } = await camera.current.takePictureAsync();
            const asset = await MediaLibrary.saveToLibraryAsync(uri);
            
            navigation.navigate('ShowPhoto', {
                imageUri: uri
            })

        }catch(err){
            console.error('Error ==> ' , err)
        }
    }

    useEffect(()=>{
        (async() => {
            const {status} = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted')
        })();
    }, []);

    if(hasPermission === null){
        return <View/>
    }

    if(hasPermission === false){
        return <Text>Permission not granted! =(</Text>
    }

    return (
        <View style={styles.container}>
          <Camera style={styles.camera} 
                  type={type}
                  ref={camera}
            >
            <View style={styles.buttonContainer}>
              {/* <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}>
                <Text style={styles.text}> Flip </Text>
            </TouchableOpacity> */}
              <TouchableOpacity
                style={styles.button}
                onPress={takePicture}>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      margin: 20,
      alignItems: 'center',
      justifyContent: "center",
    },
    button: {
      alignSelf: 'flex-end',
      marginBottom: 50,
      backgroundColor: "white",
      width: 50,
      height: 50,
      borderRadius: 25,
      borderColor: 'black',
    },
    text: {
      fontSize: 18,
      color: 'white',
    },
  });