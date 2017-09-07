import React, {Component} from 'react'
import RenderWithClass from './components/RenderWithClass'
import {StatelessComponent, StatelessComponent2} from './components/StatelessComponent'
import {View} from 'react-native'

export default class Main extends Component {

  render(){
    return (
        <View>
          <RenderWithClass/>
          {/*<StatelessComponent/>*/}
          {/*<StatelessComponent2/>*/}
        </View>
    )
  }

}
