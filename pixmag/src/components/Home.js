import React ,{Component} from 'react';
import{
	View,
	Text,
	Button,
	Image,
} from 'react-native';

import Styles from './style.js';
import Chat from './Chat.js';
import Backend from '../Backend';

class Home extends Component {
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
			<View style={Styles.Header}>
			<View style={{width:'100%'}}>
					<Text style={Styles.LogoName}>pixmagDeveloper</Text>
				</View>
				</View>
				<Text style={Styles.content}>
					Ini Homeee
				</Text>
				<Button onPress={()=> this.navigate('chat')}
				title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
				/>
			</View>
		);
	}
}

export default Home;
