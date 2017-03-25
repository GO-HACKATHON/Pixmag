import React ,{Component} from 'react';
import{
	View,
	Text,
	Button,
	Image,
} from 'react-native';

import Styles from './style.js';
import Chat from './Chat.js';
class LoginID extends Component {
	constructor(){
		super();
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
		this.props.navigator.push({
			name
		});
	}
	render(){
		return(
			<View>

			</View>
		);
	}
}

export default LoginID;
