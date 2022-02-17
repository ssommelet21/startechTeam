import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/Home";
import FilmsScreen from "./screens/Films";
import MusiquesScreen from "./screens/Musiques";

const Stack = createNativeStackNavigator();

// https://reactnavigation.org/docs/bottom-tab-navigator#example : bottom-tab-navigator

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Accueil" component={HomeScreen} />
        <Stack.Screen name="Films" component={FilmsScreen} />
        <Stack.Screen name="Musiques" component={MusiquesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
