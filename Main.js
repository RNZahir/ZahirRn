import React, {Component} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

export default class Main extends Component{

  handleShowText(){
    console.log('show text')
  }

  render(){
    return (
      <View>
        <TouchableOpacity
          onPress={()=>this.handleShowText()}
          style={styles.btn}
        >
          <Text style={styles.txt}>
            This is Button
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'red',
    padding: 10
  },
  txt: {
    color: '#FFF'
  }
})
