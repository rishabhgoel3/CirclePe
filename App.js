const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import IPhone84 from "./screens/IPhone84";
import IPhone83 from "./screens/IPhone83";
import IPhone8 from "./screens/IPhone8";
import IPhone81 from "./screens/IPhone81";
import IPhone82 from "./screens/IPhone82";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Imprima-Regular": require("./assets/fonts/Imprima-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="IPhone84"
              component={IPhone84}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone83"
              component={IPhone83}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone8"
              component={IPhone8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone81"
              component={IPhone81}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone82"
              component={IPhone82}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
