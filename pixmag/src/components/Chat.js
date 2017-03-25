import React from 'react';

import{
	View,
	Text,
	Button,

} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

class Chat extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {messages: []};
    	this.onSend = this.onSend.bind(this);
  	}

	componentWillMount() {
		this.setState({
		messages: [
			{
			_id: 1,
			text: 'Hello developer',
			createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
			user: {
				_id: 2,
				name: 'React Native',
				avatar: 'https://facebook.github.io/react/img/logo_og.png',
			},
			},
		],
		});
	}

	onSend(messages = []) {
		this.setState((previousState) => {
		return {
			messages: GiftedChat.append(previousState.messages, messages),
		};
		});
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
			/*<View>
				<Text>
					CHAAAAttttt
				</Text>
				<Button onPress={()=> this.props.navigator.pop()}
				title="Learn More"
	color="#841584"
	accessibilityLabel="Learn more about this purple button"
				/>
			</View>*/
			<GiftedChat
				messages={this.state.messages}
				onSend={this.onSend}
				user={{
				_id: 1,
			}}
      />
		);
	}
}

export default Chat;
