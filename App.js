import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/Home";
import FilmsScreen from "./screens/Films";
import MusiquesScreen from "./screens/Musiques";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Films" component={FilmsScreen} />
        <Stack.Screen name="Musiques" component={MusiquesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
