import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AccueilScreen from "./screens/Accueil";
import MusiquesScreen from "./screens/Musiques";
import FilmsScreen from "./screens/Films";
import AProposScreen from "./screens/APropos";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Accueil" component={AccueilScreen} />
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
