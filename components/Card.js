import React from "react";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");

export default function Card(props) {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: props.item.uri,
        }}
        style={{ width: width - 30, height: width - 30 }}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{props.item.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    margin: 10,
    alignItems: "center",
  },
  itemText: {
    color: "rgba(255, 255, 255, 0.5)",
    marginTop: 5,
  },
});
