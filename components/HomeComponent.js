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
import {Card} from 'react-native-elements';
import {DISHES} from '../shared/dishes';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';

const RenderItem = (props) => {
  const item = props.item;
  if (item != null) {
    return (
      <Card
        featuredTitle={item.name}
        featuredSubtitle={item.designation}
        image={require('./images/uthappizza.png')}>
        {/* <Card.FeaturedTitle style={{color: 'black'}}>
          {item.name}
        </Card.FeaturedTitle>
        <Card.FeaturedSubtitle style={{color: 'black'}}>
          {item.designation}
        </Card.FeaturedSubtitle> */}
        {/* <Card.Image source={require('./images/uthappizza.png')} /> */}
        <Text style={{margin: 10}}> {item.description}</Text>
      </Card>
    );
  } else {
    return <View></View>;
  }
};

const Home = () => {
  const [dishes, setDishes] = useState(DISHES);
  const [promotions, setPromotions] = useState(PROMOTIONS);
  const [leaders, setLeaders] = useState(LEADERS);
  return (
    <ScrollView>
      <RenderItem item={dishes.filter((dish) => dish.featured)[0]} />
      <RenderItem
        item={promotions.filter((promotion) => promotion.featured)[0]}
      />
      <RenderItem item={leaders.filter((leader) => leader.featured)[0]} />
    </ScrollView>
  );
};

export default Home;
