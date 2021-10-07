import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing"

export default function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  let OperImagePickerAsync = async () => {
    let permisionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permisionResult.granted == false) {
      Alert.alert("Permission is required! =(");
      return false;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return false;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  let openShareDialogAsync = async () => {
    let isAvailable = await Sharing.isAvailableAsync();
    
    if(!isAvailable) {
      Alert.alert("ups, sharing isn´t avaliable.. =(")
    }

    await Sharing.shareAsync(selectedImage.localUri);
  }

  const sharedImage = selectedImage ? (
    <TouchableOpacity
      style={styles.buttonShare}
      onPress={() => openShareDialogAsync()}
    >
      <Text>Share Image</Text>
    </TouchableOpacity>
  ) : null;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to the app!</Text>
      <StatusBar style="auto" />
      <Image
        style={styles.image}
        source={{
          uri:
            selectedImage === null
              ? "https://picsum.photos/200/200"
              : selectedImage.localUri,
        }}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => OperImagePickerAsync()}
        >
          <Text>Select an image</Text>
        </TouchableOpacity>
        { sharedImage }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  buttonContainer: {
    display: "flex",
  },
  button: {
    color: "#00bfff",
    backgroundColor: "#00bfff",
    paddingVertical: 10,
    paddingHorizontal: 25,
    fontSize: 15,
    marginTop: 10,
    textAlign: "center",
  },
  buttonShare: {
    backgroundColor: 'coral',
    paddingVertical: 10,
    paddingHorizontal: 25,
    fontSize: 15,
    marginTop: 10,
    textAlign: 'center'
  }
});
