import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Card} from 'react-native-elements';
import {DISHES} from '../shared/dishes';

function RenderDish(props) {
  const dish = props.dish;

  if (dish != null) {
    return (
      <Card
        featuredTitle={dish.name}
        image={require('./images/uthappizza.png')}>
        {/* <Card.FeaturedTitle>{dish.name}</Card.FeaturedTitle> */}
        {/* <Card.Image source={require('./images/uthappizza.png')} /> */}
        <Text style={{margin: 10}}>{dish.description}</Text>
      </Card>
    );
  } else {
    return <View></View>;
  }
}

function Dishdetail(props) {
  const [dishes, setDishes] = useState(DISHES);
  const {dishId} = props.route.params;
    console.warn(dishId)
  return <RenderDish dish={dishes[dishId]} />;
}

export default Dishdetail;
