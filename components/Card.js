import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default function Card(props) {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: props.item.uri,
        }}
        style={styles.itemPhoto}
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
  itemPhoto: {
    width: 200,
    height: 200,
  },
  itemText: {
    color: "rgba(255, 255, 255, 0.5)",
    marginTop: 5,
  },
});
