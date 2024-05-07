import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from "../views/StartScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigation(){
  return <NavigationContainer> 
            <Stack.Navigator initialRouteName="Home"
            screenOptions={{
                headerShown:false
            }}>
                <Stack.Screen name="Home" component={StartScreen} />
            </Stack.Navigator>
    </NavigationContainer>
}