import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");

var heightCanevas;
const is_windows = true;
const is_autres = false;

// A adapter suivant l'appareil !
// 101 px pour barre de recherche navigateur Chrome
// 64 px pour partie nav app
// 48 pixels pour button bar
// 41 pixels en Windows 7 sur taskbar

if (is_windows) {
  heightCanevas = height - (101 + 64 + 48 + 41);
} else {
  heightCanevas = height - (64 + 48);
}

console.log(heightCanevas);

const mainImage1 = require("../assets/films.png");
const mainImage2 = require("../assets/musiques.png");

export default function Accueil({ navigation }) {
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
        style={{ width: width, height: heightCanevas / 2 }}
      />

      <Image
        source={mainImage2}
        style={{ width: width, height: heightCanevas / 2 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
