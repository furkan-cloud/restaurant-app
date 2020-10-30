import React, {Component} from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import History from './AboutComponent';
import Contact from './ContactComponent';
import Dishdetail from './DishDetailComponent';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MenuPage() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#512DA8'},
        headerTintColor: '#fff',
        headerTitleStyle: {color: '#fff'},
      }}>
      <Stack.Screen options={{title: 'Menu'}} name="Menu" component={Menu} />
      <Stack.Screen
        options={{title: 'Dish Details'}}
        name="Dishdetail"
        component={Dishdetail}
      />
    </Stack.Navigator>
  );
}

function HomePage() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#512DA8'},
        headerTintColor: '#fff',
        headerTitleStyle: {color: '#fff'},
      }}>
      <Stack.Screen options={{title: 'Home'}} name="Home" component={Home} />
    </Stack.Navigator>
  );
}

function AboutPage() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#512DA8'},
        headerTintColor: '#fff',
        headerTitleStyle: {color: '#fff'},
      }}>
      <Stack.Screen
        options={{title: 'About Us'}}
        name="About"
        component={History}
      />
    </Stack.Navigator>
  );
}

function ContactPage() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#512DA8'},
        headerTintColor: '#fff',
        headerTitleStyle: {color: '#fff'},
      }}>
      <Stack.Screen
        options={{title: 'Contact Us'}}
        name="Contact"
        component={Contact}
      />
    </Stack.Navigator>
  );
}

const Main = () => {
  return (
    <NavigationContainer style={{flex: 1, paddingTop: 10}}>
      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: '#D1C4E9',
        }}>
        <Drawer.Screen name="Home" component={HomePage} />
        <Drawer.Screen name="About Us" component={AboutPage} />
        <Drawer.Screen name="Menu" component={MenuPage} />
        <Drawer.Screen name="Contact Us" component={ContactPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Main;
