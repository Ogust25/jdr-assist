import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "./src/views/home";
import { Campaigns } from "./src/views/campaigns";
import { About } from "./src/views/about";
import { Map } from "./src/views/map";
import { Crew } from "./src/views/crew";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Campaigns"
          component={Campaigns}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Map"
          component={Map}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Crew"
          component={Crew}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
