import React, {Component} from 'react';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import Dishdetail from './DishDetailComponent';
import {View, Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function Main() {
  return(
    <NavigationContainer style={{flex:1,paddingTop: 10 }}>
      <Stack.Navigator
      screenOptions={{
        initialRouteName: "Menu",
        headerStyle: {backgroundColor: "#512DA8"},
        headerTintColor:'#fff',
        headerTitleStyle: {color: "#fff"}
      }}>
        <Stack.Screen 
        options = {{title: "Menu"}}
        name= "Menu"
        component={Menu}
        />
                <Stack.Screen 
        options = {{title: "Dish Details"}}
        name= "Dishdetail"
        component={Dishdetail}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

// const MenuNavigator = createStackNavigator(
//   {
//     Menu: {screen: Menu },
//     Dishdetail: {screen: Dishdetail},
//   },
//   {
//     initialRouteName: 'Menu',
//     navigationOptions: {
//       headerStyle: {
//         backgroundColor: '#512DA8',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         color: '#fff',
//       },
//     },
//   },
// );

// class Main extends Component {

//   render() {
//     return (
//       <View style={{flex:1, paddingTop: 10 }}>
//         <MenuNavigator />
//       </View>
//     );
//   }
// }

export default Main;
