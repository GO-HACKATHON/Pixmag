import React from 'react';
import {
  StyleSheet
} from 'react-native'
const Styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'red',
    marginBottom: 5,
  },
  logo : {
    width : 100,
    height: 100,
  },
  Header : {
    width : '100%',
    height : 50,
    backgroundColor: "#04B486",
  },
  LogoName : {
    color:'white',
    fontSize:22,
    textAlign : 'center',
    paddingTop:8,
    fontFamily:'Roboto',
    fontWeight:'bold'
  },
  content : {
    height: 500,
    backgroundColor:'white',
    width:'100%',
  }
});
export default Styles;
