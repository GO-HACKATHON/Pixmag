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
           placeholderTextColor='gray'
         />
        </View>

         <View style={{alignItems:'center',marginTop:10}}>
              <View style={Styles.ButtonWrapper}>
              <Text style={{lineHeight:25,color:'white',fontWeight:'bold',width:'100%',textAlign:'center'}} onPress={()=> this.navigate('chat')}>Log In</Text>
              </View>
          </View>
			</View>
		);
	}
}

export default LoginID;
