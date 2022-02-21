import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const REACT_APP_BACKEND_URL = "https://testfront44.herokuapp.com/api";

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

  console.log(SECTIONS);
  console.log("et ...");
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

const SECTIONS = [
  {
    title: "Made for you",
    data: [
      {
        key: "1",
        text: "Item text 1",
        uri: "https://picsum.photos/id/1/200",
      },
      {
        key: "2",
        text: "Item text 2",
        uri: "https://picsum.photos/id/10/200",
      },

      {
        key: "3",
        text: "Item text 3",
        uri: "https://picsum.photos/id/1002/200",
      },
      {
        key: "4",
        text: "Item text 4",
        uri: "https://picsum.photos/id/1006/200",
      },
      {
        key: "5",
        text: "Item text 5",
        uri: "https://picsum.photos/id/1008/200",
      },
    ],
  },
  {
    title: "Punk and hardcore",
    data: [
      {
        key: "1",
        text: "Item text 1",
        uri: "https://picsum.photos/id/1011/200",
      },
      {
        key: "2",
        text: "Item text 2",
        uri: "https://picsum.photos/id/1012/200",
      },

      {
        key: "3",
        text: "Item text 3",
        uri: "https://picsum.photos/id/1013/200",
      },
      {
        key: "4",
        text: "Item text 4",
        uri: "https://picsum.photos/id/1015/200",
      },
      {
        key: "5",
        text: "Item text 5",
        uri: "https://picsum.photos/id/1016/200",
      },
    ],
  },
  {
    title: "Based on your recent listening",
    data: [
      {
        key: "1",
        text: "Item text 1",
        uri: "https://picsum.photos/id/1020/200",
      },
      {
        key: "2",
        text: "Item text 2",
        uri: "https://picsum.photos/id/1024/200",
      },

      {
        key: "3",
        text: "Item text 3",
        uri: "https://picsum.photos/id/1027/200",
      },
      {
        key: "4",
        text: "Item text 4",
        uri: "https://picsum.photos/id/1035/200",
      },
      {
        key: "5",
        text: "Item text 5",
        uri: "https://picsum.photos/id/1038/200",
      },
    ],
  },
];

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
