import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import { FormatSections } from "../includes/Functions_partagees";
import Card from "../components/Card";

const REACT_APP_BACKEND_URL = "https://greta-bibliotheque-jh.herokuapp.com/api";

export default function Musiques() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const TYPEOFMEDIA = "musiques";

  useEffect(() => {
    fetch(REACT_APP_BACKEND_URL + "/" + TYPEOFMEDIA)
      .then((response) => response.json())
      .then((json) => setData(FormatSections(json[TYPEOFMEDIA], TYPEOFMEDIA)))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

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
              return <Card item={item} />;
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
});
