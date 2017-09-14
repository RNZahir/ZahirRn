import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default (props) => (
  <View style={styles.card}>
    <View style={styles.avatar}>

    </View>
    <View style={{}}>
      <Text style={styles.cardText}>{props.os.name}</Text>
      <Text style={styles.cardText}>{props.os.year}</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    padding: 10,
    margin: 5,
    flexDirection: 'row',
  },
  cardText: {
    fontSize: 20
  },
  avatar: {
    backgroundColor: 'purple',
    padding: 40,
    marginRight: 20
  }
});
