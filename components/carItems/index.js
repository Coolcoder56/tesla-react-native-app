import { View, Text, ImageBackground, StatusBar } from "react-native";
import React from "react";
import styles from "./styles";
import StyledButton from "../StyledButton";

const CarItem = (props) => {

const {name, tagline, image} =props;

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      >
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{tagline}</Text>
        </View>
        <View style = {styles.btnContainer}>
          <StyledButton
            type="primary"
            content="custom order"
            onPress={() => {
              console.warn("Custom Order was pressed");
            }}
          />
          <StyledButton
            type="secondary"
            content="Existing inventory"
            onPress={() => {
              console.warn(" Existing INventory was pressed");
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default CarItem;
