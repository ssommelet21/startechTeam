import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AccueilScreen from "./screens/Accueil";
import MusiquesScreen from "./screens/Musiques";
import FilmsScreen from "./screens/Films";
import AProposScreen from "./screens/APropos";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Musiques") {
            iconName = focused ? "musical-notes" : "musical-notes-outline";
          } else if (route.name === "Films") {
            iconName = focused ? "film" : "film-outline";
          } else if (route.name === "A propos") {
            iconName = focused
              ? "information-circle"
              : "information-circle-outline";
          } else if (route.name === "Jeux vidéo") {
            iconName = focused
              ? "ios-game-controller"
              : "ios-game-controller-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={AccueilScreen} />
      <Tab.Screen name="Musiques" component={MusiquesScreen} />
      <Tab.Screen name="Films" component={FilmsScreen} />
      <Tab.Screen name="A propos" component={AProposScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
