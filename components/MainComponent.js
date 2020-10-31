import React, {Component} from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import History from './AboutComponent';
import Contact from './ContactComponent';
import Dishdetail from './DishDetailComponent';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Icon} from 'react-native-elements';
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MenuPage(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#512DA8'},
        headerTintColor: '#fff',
        headerTitleStyle: {color: '#fff'},
      }}>
      <Stack.Screen
        options={
          ({title: 'Menu'},
          ({navigation}) => ({
            headerLeft: () => (
              <Icon
                name="menu"
                size={24}
                color="white"
                onPress={() => navigation.toggleDrawer()}
              />
            ),
          }))
        }
        name="Menu"
        component={Menu}
      />
      <Stack.Screen
        options={
          ({
            title: 'Dish Details',
          },
          ({navigation}) => ({
            headerLeft: () => (
              <Icon
                name="menu"
                size={24}
                color="white"
                onPress={() => navigation.toggleDrawer()}
              />
            ),
          }))
        }
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
      <Stack.Screen
        options={
          ({
            title: 'Home',
          },
          ({navigation}) => ({
            headerLeft: () => (
              <Icon
                name="menu"
                size={24}
                color="white"
                onPress={() => navigation.toggleDrawer()}
              />
            ),
          }))
        }
        name="Home"
        component={Home}
      />
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
        options={
          ({
            title: 'About Us',
          },
          ({navigation}) => ({
            headerLeft: () => (
              <Icon
                name="menu"
                size={24}
                color="white"
                onPress={() => navigation.toggleDrawer()}
              />
            ),
          }))
        }
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
        options={
          ({
            title: 'Contact Us',
          },
          ({navigation}) => ({
            headerLeft: () => (
              <Icon
                name="menu"
                size={24}
                color="white"
                onPress={() => navigation.toggleDrawer()}
              />
            ),
          }))
        }
        name="Contact"
        component={Contact}
      />
    </Stack.Navigator>
  );
}

const CustomDrawerContent = (props) => {
  return(
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{top: 'always', horizontal: 'never'}}>
      <View style={styles.drawerHeader}>
        <View style={{flex: 1}}>
          <Image
            style={styles.drawerImage}
            source={require('./images/logo.png')}
          />
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
    </SafeAreaView>
  </ScrollView>)
};

const Main = () => {
  return (
    <NavigationContainer style={{flex: 1, paddingTop: 10}}>
      <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
        drawerStyle={{
          backgroundColor: '#D1C4E9',
          // contentComponent: CustomDrawerContentComponent,
        }}>
        <Drawer.Screen
          options={{
            drawerIcon: ({tintColor}) => (
              <Icon
                name="home"
                type="font-awesome"
                size={24}
                color={tintColor}
              />
            ),
          }}
          name="Home"
          component={HomePage}
        />
        <Drawer.Screen
          options={{
            drawerIcon: ({tintColor}) => (
              <Icon
                name="info-circle"
                type="font-awesome"
                size={24}
                color={tintColor}
              />
            ),
          }}
          name="About Us"
          component={AboutPage}
        />
        <Drawer.Screen
          options={{
            drawerIcon: ({tintColor}) => (
              <Icon
                name="list"
                type="font-awesome"
                size={24}
                color={tintColor}
              />
            ),
          }}
          name="Menu"
          component={MenuPage}
        />
        <Drawer.Screen
          options={{
            drawerIcon: ({tintColor}) => (
              <Icon
                name="address-card"
                type="font-awesome"
                size={22}
                color={tintColor}
              />
            ),
          }}
          name="Contact Us"
          component={ContactPage}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {flex: 1},
  drawerHeader: {
    height: 140,
    alignItems: 'center',
    backgroundColor: '#512DA8',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60,
  },
});
