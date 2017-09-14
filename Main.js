import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import OsItem from './components/OsItem';

export default class Main extends Component {

  os = [
    {name: 'windows', year: 1990},
    {name: 'apple', year: 1991},
  ];

  renderHeader(){
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Title</Text>
      </View>
    )
  }

  renderRow(os){
    return (
      <View style={styles.card}>
        <View style={styles.avatar}>

        </View>
        <View style={{}}>
          <Text style={styles.cardText}>{os.name}</Text>
          <Text style={styles.cardText}>{os.year}</Text>
        </View>
      </View>
    )
  }

  render(){
    return (
      <View style={styles.container}>

        {/* HEADER */}
        {this.renderHeader()}

        <ScrollView>

          {/* LIST VIEW */}
          <View>
            {this.os.map(os => <OsItem os={os}/>)}
          </View>

        </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'gray',
  },
  header: {
    alignItems: 'center',
    backgroundColor: 'pink',
    padding: 20
  },
  headerText: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: "bold"
  },
});
