import React ,{Component} from 'react';
import{
	View,
	Text,
	Button,
	Image,
  TextInput,
  TouchableHighlight,
} from 'react-native';

import Styles from './style.js';
import Chat from './Chat.js';
class LoginID extends Component {
	constructor(){
		super();
    this.state = { user: 'Username',pass:'Password' };
			this.Routes = this.Routes.bind(this);
	}

	Routes(route, navigator){
		console.log('wow')
		if(route.name === "home"){
			return <Home navigator={navigator}/>
		}else if (route.name === 'chat'){
			return <Chat navigator ={navigator}/>
		}
	}
	navigate(name) {
    alert('Login Suscess!!');
		this.props.navigator.push({
			name
		});
	}
	render(){
		return(
			<View style={Styles.Login}>
        <View style={Styles.Logo}>
        <Text style={{textAlign:'center'}}>
          <Image style={{width:400, height:400,backgroundColor:'red'}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>
        </Text>
        </View>
        <View style={{alignItems:'center',marginTop:20}}>
              <TextInput
           style={Styles.Input}
           onChangeText={(user) => this.setState({user})}
           value={this.state.user}
           underlineColorAndroid = 'transparent'
         />
        </View>
        <View style={{alignItems:'center',marginTop:1}}>
              <TextInput
          style={{password: true,secureTextEntry: true}}
           style={Styles.Input}
           onChangeText={(pass) => this.setState({pass})}
           value={this.state.pass}
           underlineColorAndroid = 'transparent'
         />
         </View>
         <View style={{alignItems:'center',marginTop:10}}>
              <Button
              onPress={()=> this.navigate('chat')}
              title="Log In"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
              />
          </View>
			</View>
		);
	}
}

export default LoginID;
