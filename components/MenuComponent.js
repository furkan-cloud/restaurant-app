import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  FlatList,
  Image,
  Text,
  StatusBar,
} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import {DISHES} from '../shared/dishes';

function Menu(props) {
  const [dishes, setDishes] = useState(DISHES);

  // static navigationOptions = {
  //   title="Menu"
  // }

  const renderMenuItem = ({item, index}) => {
    return (
      <ListItem key={index} onPress={() => props.navigation.navigate("Dishdetail", {dishId: item.id} ) }>
        <Avatar rounded source={require('./images/uthappizza.png')} />
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
          {/* <ListItem.Chevron/> */}
        </ListItem.Content>
      </ListItem>
                    //   <ListItem
                    //   key={index}
                    //   title={item.name}
                    //   subtitle={item.description}
                    //   hideChevron={true}
                    //   leftAvatar={{ source: require('./images/uthappizza.png')}}
                    // />
    );
  };

  return (
    <FlatList
      data={dishes}
      renderItem={renderMenuItem}
      keyExtractor={(item, index) => item.id.toString()}
    />
  );
}

export default Menu;
