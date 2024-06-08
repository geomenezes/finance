import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './src/pages/Home/Home';
import Quiz from './src/pages/QuizAPI/Quiz';
import Spents from './src/pages/Spents/Spents';
import Investments from './src/pages/Investments/Investments';
import Profile from './src/pages/Profile/Profile';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen 
          name="Home" 
          component={Home} 
          // options={{
          //   title: ''
          // }}
        />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Spents" component={Spents} />
        <Stack.Screen name="Investments" component={Investments} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}