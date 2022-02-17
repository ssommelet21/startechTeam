import React from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("screen");

const mainImage1 = require("../assets/films.png");
const mainImage2 = require("../assets/musiques.png");

export default function Home({ navigation }) {
  console.log(width);
  console.log(height);

  return (
    <View
      style={{
        width: width,
        display: "flex",
        flexDirection: "col",
        flexWrap: "nowrap",
        alignItems: "stretch",
        justifyContent: "center",
      }}
    >
      <Image
        source={mainImage1}
        style={{ width: width, height: height / 2.4 }}
      />

      <Image
        source={mainImage2}
        style={{ width: width, height: height / 2.4 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
