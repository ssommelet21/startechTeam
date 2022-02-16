import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Test sur Films"
        onPress={() => navigation.navigate("Films")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
