
import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  TouchableHighlight,
} from 'react-native';

import Chat from './src/components/Chat.js';
import Home from './src/components/Home.js';
import Styles from './src/components/style.js';



export default class pixmag extends Component {
  Routes(route, navigator){
    if(route.name === "home"){
      return <Home navigator={navigator}/>
    }else if (route.name === 'chat'){
      return <Chat navigator ={navigator}/>
    }
  }
  render() {
    return (
      <Navigator
      initialRoute={{name :'home'}}
      renderScene={this.Routes.bind(this) }
      />
    );
  }
}

AppRegistry.registerComponent('pixmag', () => pixmag);
