import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const Home = function ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Actions List!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ShareImage")}
      >
        <Text style={styles.title}>Share Image</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("TakePhoto")}
      >
        <Text style={styles.title}>Text Photo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
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
});
