import React from "react";
import { StyleSheet, Image, View, TouchableOpacity, Text} from "react-native";
import * as Sharing from "expo-sharing";

const ShowPhoto = function ({ route, navigation }) {
  const { imageUri } = route.params;

  //* Refactor 
  let openShareDialogAsync = async () => {
    let isAvailable = await Sharing.isAvailableAsync();
    
    if(!isAvailable) {
      Alert.alert("ups, sharing isn´t avaliable.. =(")
    }

    await Sharing.shareAsync(imageUri);
  }
  //* END Refactor 
  

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <TouchableOpacity
        style={styles.buttonShare}
        onPress={() => openShareDialogAsync()}
      >
        <Text>Share Image</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShowPhoto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "90%",
  },
  buttonShare: {
    backgroundColor: 'coral',
    paddingVertical: 10,
    paddingHorizontal: 25,
    fontSize: 15,
    marginTop: 10,
    textAlign: 'center',
    zIndex: 2
  }
});
