import React from 'react';

import{
	View,
	Text,
	Button,

} from 'react-native';

class Chat extends React.Component {
	constructor(){
		super();

	}
	Routes(route, navigator){
		console.log('tai')
		if(route.name === "home"){
			return <Home navigator={navigator}/>
		}else if (route.name === 'chat'){
			return <Chat navigator ={navigator}/>
		}
	}
	render(){
		return(
			<View>
				<Text>
					CHAAAAttttt
				</Text>
				<Button onPress={()=> this.props.navigator.pop()}
				title="Learn More"
	color="#841584"
	accessibilityLabel="Learn more about this purple button"
				/>
			</View>
		);
	}
}

export default Chat;
