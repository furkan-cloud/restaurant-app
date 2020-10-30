import React, {useState} from 'react';
import {StyleSheet, ScrollView, FlatList, Text} from 'react-native';
import {Card, ListItem} from 'react-native-elements';
import {LEADERS} from '../shared/leaders';

const History = () => {
  const [leaders, setLeaders] = useState(LEADERS);

  const renderLeaders = ({item, index}) => {
    return (
      <ListItem
        key={index}
        title={item.name}
        subtitle={item.description}
        hideChevron={true}
        leftAvatar={{source: require('./images/alberto.png')}}
      />
    );
  };

  return (
    <ScrollView style={{flex: 1}}>
      <Card>
        <Card.Title>Our History</Card.Title>
        <Card.Divider />
        <Text style={styles.text}>
          Started in 2010, Ristorante con Fusion quickly established itself as a
          culinary icon par excellence in Hong Kong. With its unique brand of
          world fusion cuisine that can be found nowhere else, it enjoys
          patronage from the A-list clientele in Hong Kong. Featuring four of
          the best three-star Michelin chefs in the world, you never know what
          will arrive on your plate the next time you visit us.
        </Text>
        <Text style={styles.text}>
          The restaurant traces its humble beginnings to The Frying Pan, a
          successful chain started by our CEO, Mr. Peter Pan, that featured for
          the first time the world's best cuisines in a pan.
        </Text>
      </Card>
      <Card containerStyle={{marginBottom: 20}}>
        <Card.Title>Corporate Leadership</Card.Title>
        <Card.Divider />
        <FlatList
          keyExtractor={(item, index) => item.id.toString()}
          data={leaders}
          renderItem={renderLeaders}
        />
      </Card>
    </ScrollView>
  );
};

export default History;

const styles = StyleSheet.create({
  text: {
    marginBottom: 10,
  },
});
