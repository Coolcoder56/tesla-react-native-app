import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet,Text, View } from "react-native";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handle1 = () => {
    setCount(count + 1);
  };
  const handle2 = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Your count is {count}</Text>
      <View style={{ display: 'flex' }}>
      <button
        style={{
          margin: "10px",
          justifyContent :'flex-start'
        }}
        onClick={() => handle1()}
      >
        Increment
      </button>
      <button
        style={{
          margin: "10px",
          justifyContent:"flex-end"
        }}
        onClick={() => handle2()}
      >
        Decrement
      </button>
    </View><StatusBar style="auto" />
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
  