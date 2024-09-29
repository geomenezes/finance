import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './src/pages/Home/Home';
import Quiz from './src/pages/QuizAPI/Quiz';
import Spents from './src/pages/Spents/Spents';
import Investments from './src/pages/Investments/Investments';
import Projection from './src/pages/Investments/Projection';
import AddInvestments from './src/pages/Investments/AddInvestments';
import EditInvestments from './src/pages/Investments/EditInvestments';
import Profile from './src/pages/Profile/Profile';
import { DoingQuiz } from './src/pages/QuizAPI/DoingQuiz';
import ResultQuiz from './src/pages/QuizAPI/ResultQuiz';
import Login from './src/pages/Login/Login';
import Register from './src/pages/Login/Register';
import ForgotPass from './src/pages/Login/ForgotPass';
import Learn from './src/pages/LearnInvestments.js/Learn';
import AddSpents from './src/pages/Spents/AddSpents';
import EditSpents from './src/pages/Spents/EditSpents';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
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
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPass" component={ForgotPass} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Spents" component={Spents} />
        <Stack.Screen name="AddSpents" component={AddSpents} />
        <Stack.Screen name="EditSpents" component={EditSpents} />
        <Stack.Screen name="Investments" component={Investments} />
        <Stack.Screen name="Investments" component={Projection} />
        <Stack.Screen name="Investments" component={AddInvestments} />
        <Stack.Screen name="Investments" component={EditInvestments} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="DoingQuiz" component={DoingQuiz} />
        <Stack.Screen name="ResultQuiz" component={ResultQuiz} />
        <Stack.Screen name="Learn" component={Learn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}