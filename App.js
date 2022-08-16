import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import CarItems from "./components/carItems/index.js"


export default function App() {
  console.log("App executed successfully");
  return (
    <View style={styles.container}>
      
     <CarItems name={'Model X'} tagline={'Starting from $99,500'} image={require("./assets/images/ModelX.jpeg")}/> 
     
     <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  
});
