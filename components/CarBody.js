import React from 'react'
import {View, Text} from 'react-native'

export default (props) => (
  <View>
    <Text>Body Color = "{props.color}"</Text>
    <Text>Screen Guard = "{props.screenGuard}"</Text>
  </View>
)
