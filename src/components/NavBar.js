// In App.js in a new project

import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShareImage from "./ShareImage";
import Home from "./Home";
import TakePhoto from "./TakePhoto";
import ShowPhoto from "./ShowPhoto";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen 
            name="ShareImage" 
            component={ShareImage} 
            options={{
                title: 'Share Image'
            }}
        />
        <Stack.Screen 
            name="TakePhoto" 
            component={TakePhoto} 
            options={{
                title: 'Take a Photo'
            }}
        />
        <Stack.Screen 
            name="ShowPhoto" 
            component={ShowPhoto}
            options={{
                title: 'New Picture',
                headerBackTitle: 'New'
            }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
