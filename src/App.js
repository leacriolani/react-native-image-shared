import { registerRootComponent } from 'expo';
import React from "react";
import ShareImage from "./components/ShareImage";
import NavBar from "./components/NavBar";
import View from "react-native"

const App = function() {
  
  return (
      <NavBar></NavBar>
  );
}

registerRootComponent(App);