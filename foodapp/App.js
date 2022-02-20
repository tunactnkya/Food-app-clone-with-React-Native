import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from './src/views/screens/DetailScreen';
import BottomNavigator from './src/views/Navigation/BottomNavigator';
import OnBoardScreen from './src/views/screens/OnBoardScreen';
import { StatusBar } from "react-native";
import COLORS from "./src/consts/colors";


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='white' barStyle='dark-content' />
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="Home" component={BottomNavigator} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;