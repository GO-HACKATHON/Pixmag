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
  },
  Login : {
    backgroundColor : '#d41f26',
    width : '100%',
    height : '100%',
  },
  Logo : {
    width:'100%',
    paddingTop:125,
  },
  Input : {
    width: 250,
    height: 40,
    borderColor: 'white',
    color:'black',
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth :2,
    borderColor:'white',
    backgroundColor: 'white',
    borderRadius:20,
  },
  ButtonWrapper : {
    width: 250,
    height:40,
    alignItems:'center',
    marginTop:20,
    borderRadius:150,
    borderWidth :2,
    borderColor:'white',
    backgroundColor: '#5FC3E4',
  },

});
export default Styles;
