import React from 'react';

import{
	View,
	Text,
	Button,

} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

import Backend from '../Backend';

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
		Backend.sendMessage(messages);
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
			<GiftedChat
				messages={this.state.messages}
				onSend={(this.onSend)}
				user={{
				_id: Backend.getUid(),
				name: this.props.name,
			}}
      />
		);
	}

	componentDidMount(){
		Backend.loadChat((messages)=>{
			this.setState((previousState)=>{
				return {
					messages: GiftedChat.append(previousState.messages, messages),
				};
			})
		});
	}

	componentWillUnMount(){
		Backend.closeChat();
	}
}

export default Chat;
