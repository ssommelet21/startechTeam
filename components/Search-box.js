import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const SearchBox = (props) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder={props.message}
      onChangeText={props.onSearch}
    />
  </View>
);

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#707070",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "grey",
    backgroundColor: "white",
  },
});
