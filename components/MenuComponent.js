import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  FlatList,
  Text,
  StatusBar,
} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';

function Menu(props) {
  const renderMenuItem = ({item, index}) => {
    return (
      <ListItem key={index} onPress={() => props.onPress(item.id)}>
        <Avatar rounded source={require('./images/vadonut.png')} />
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
          {/* <ListItem.Chevron/> */}
        </ListItem.Content>
      </ListItem>
    );
  };

  return (
    <FlatList
      data={props.dishes}
      renderItem={renderMenuItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

export default Menu;
