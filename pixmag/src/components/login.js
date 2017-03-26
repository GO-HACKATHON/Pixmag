import React ,{Component} from 'react';
import{
	View,
	Text,
	Button,
	Image,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import {LoginUser} from '../xhr/getxhr.js';
import Styles from './style.js';
import Chat from './Chat.js';
import CacheStore from 'react-native-cache-store';
class LoginID extends Component {
	constructor(){
		super();
    this.state = { user: '',pass:'' };
			this.Routes = this.Routes.bind(this);
			this.handechange = this.handechange.bind(this);
			this._btnSubmit = this._btnSubmit.bind(this);
	}

	Routes(route, navigator){
		console.log('wow')
		if(route.name === "home"){
			return <Home navigator={navigator}/>
		}else if (route.name === 'chat'){
			return <Chat Username={route.passProps.user} navigator ={navigator}/>
		}
	}
	navigate(name) {
    alert('Login Suscess!!');
		this.props.navigator.push({
			name
		});
	}
	handechange(e)
	{
		this.setState({user:e});
		CacheStore.set('userchat', e, 10000);

		CacheStore.get('userchat').then((value) => {
			console.log(value);
		});

	}

	_btnSubmit(event){

this.navigate('chat');
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
           onChangeText={(user) => this.handechange(user)}
           value={this.state.user}
           underlineColorAndroid = 'transparent'
           placeholderTextColor='gray'
					 placeholder="Username"
         />
        </View>
				<View style={{alignItems:'center',marginTop:1}}>
						<TextInput
						style={{password: true,secureTextEntry: true}}
						style={Styles.Input}
						onChangeText={(pass) => this.setState({pass})}
						value={this.state.pass}
						underlineColorAndroid = 'transparent'
						placeholderTextColor='white'
						secureTextEntry={true}
						placeholder="Password"
						placeholderTextColor='gray'
						/>
				</View>
         <View style={{alignItems:'center',marginTop:10}}>
              <View style={Styles.ButtonWrapper}>
              <Text style={{lineHeight:25,color:'white',fontWeight:'bold',width:'100%',textAlign:'center'}} onPress={this._btnSubmit}>Log In</Text>
              </View>
          </View>
			</View>
		);
	}
}

export default LoginID;
