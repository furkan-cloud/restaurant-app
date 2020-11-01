import React, {useState} from 'react';
import {Text, View, ScrollView, FlatList} from 'react-native';
import {Card, Icon} from 'react-native-elements';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';

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
        <Icon
          raised
          reverse
          name={props.favorite ? 'heart' : 'heart-o'}
          type="font-awesome"
          color="#f50"
          onPress={() =>
            props.favorite ? console.log('Already favorite') : props.onPress()
          }
        />
      </Card>
    );
  } else {
    return <View></View>;
  }
}

const RenderComments = (props) => {
  const comments = props.comments;

  const renderCommentItem = ({item, index}) => {
    return (
      <View key={index} style={{margin: 10}}>
        <Text style={{fontSize: 14}}>{item.comment}</Text>
        <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
        <Text style={{fontSize: 12}}>
          {'-- ' + item.author + ', ' + item.date}
        </Text>
      </View>
    );
  };
  return (
    <Card title="Comments">
      <FlatList
        renderItem={renderCommentItem}
        data={comments}
        keyExtractor={(item, index) => index.toString()}
      />
    </Card>
  );
};

function Dishdetail(props) {
  const [dishes, setDishes] = useState(DISHES);
  const [comments, setComments] = useState(COMMENTS);
  const [favorites, setFavorites] = useState([]);

  const {dishId} = props.route.params;
  return (
    <ScrollView>
      <RenderDish
        dish={dishes[dishId]}
        favorite={favorites.some((el) => el === dishId)}
        onPress={() => setFavorites(favorites.concat(dishId))}
      />
      <RenderComments
        comments={comments.filter((comment) => dishId === comment.dishId)}
      />
    </ScrollView>
  );
}

export default Dishdetail;
