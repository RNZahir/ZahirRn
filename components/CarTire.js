import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class CarTire extends Component{

  render(){
    return (
      <View>
        <Text>
          Jumlah: "{this.props.count}"
        </Text>
      </View>
    )
  }
}
