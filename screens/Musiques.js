import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const REACT_APP_BACKEND_URL = "https://greta-bibliotheque-jh.herokuapp.com/api";

const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
};

export default function Musiques() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    fetch(REACT_APP_BACKEND_URL + "/musiques")
      .then((response) => response.json())
      .then((json) => setData(FormatSections(json.musiques)))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const FormatSections = (old_array) => {
    let new_array = [];
    let i = 0;
    old_array.forEach((element) => {
      new_array.push({ key: i++, uri: element.imageUrl, text: element.titre });
    });

    let trav = {
      title: "Musiques",
      data: new_array,
    };

    return [trav];
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        {isLoading ? (
          <Text>Chargement...</Text>
        ) : (
          <SectionList
            contentContainerStyle={{ paddingHorizontal: 10 }}
            stickySectionHeadersEnabled={false}
            sections={data}
            renderSectionHeader={({ section }) => (
              <>
                <Text style={styles.sectionHeader}>
                  Listing avec {section.data.length} occurence(s)
                </Text>
              </>
            )}
            renderItem={({ item }) => {
              return <ListItem item={item} />;
            }}
          />
        )}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  sectionHeader: {
    fontWeight: "800",
    fontSize: 18,
    color: "#f4f4f4",
    marginTop: 20,
    marginBottom: 5,
  },
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
