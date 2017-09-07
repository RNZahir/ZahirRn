import React from 'react';
import {View, Text} from 'react-native'
import CarBody from './components/CarBody'
import CarTire from './components/CarTire'


class Car extends React.Component {
  render(){
    return (
      <View>
        <Text>Toyota</Text>

        <CarBody
          color="green"
          screenGuard={1}
        />

        <CarTire count={4}/>
      </View>
    )
  }
}

export default Car
