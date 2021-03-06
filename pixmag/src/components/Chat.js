import React from 'react';
import{
	View,
	Text,
	Button,

} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import CacheStore from 'react-native-cache-store';
// import Backend from '../Backend';
import firebase from 'firebase'
class Chat extends React.Component {
	messagesRef = null;
	uid='';
	constructor(props) {
		super(props);
		this.state = {
			messages: [],
			name:'',
			userid:'',
	    };
		this.onSend = this.onSend.bind(this);

		var config = {
            apiKey: "AIzaSyClFBrF81S5w77xX4hUDxKiXGln-83GEy8",
            authDomain: "react-pixmag.firebaseapp.com",
            databaseURL: "https://react-pixmag.firebaseio.com",
            storageBucket: "react-pixmag.appspot.com"
        };
        firebase.initializeApp(config);
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.uid =user.uid;
				this.setState({
		userid: user.uid
	});
            }else{
                firebase.auth().signInAnonymously().catch((error) =>{
                    alert(error.message);
                });
            }

        });

  	}
	sendMessage(message){
        for(let i=0;i < message.length ; i++){
            this.messagesRef.push({
				_id:this.state.messages.length,
				text: message[i].text,
				createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
               user: message[i].user,
            });
        }

    }

    closeChat(){
        if(this.messagesRef){
            this.messagesRef.off();
        }
    }

	componentWillMount() {
		var _this=this;
		CacheStore.get('userchat').then((value) => {
			this.setState({name:value});
		});
		this.messagesRef = firebase.database().ref('messages');
		this.databind();
console.log("test");
		console.log(this.state.messages);
		// Backend.loadMessages((messages)=>{
		// 	console.log(messages);
		// 	console.log("hasil");
		// 	this.setState((previousState)=>{
		// 		return {
		// 			messages: GiftedChat.append(previousState.messages, messages),
		// 		};
		// 	})
		// });
		//var aa = Backend.loadMessages();
		console.log("datanya");
		//console.log(Backend.getallData());


	}

databind(){
	var _this=this;
	var ref = firebase.database().ref().child('messages');
        ref.on("value", function(snapshot) {
           console.log(snapshot.val());
		   if(snapshot.val()!=null)
		   {

			   var obj =snapshot.val();
			   var arr = Object.keys(obj).map(function(k) { return obj[k] });

arr = arr.sort(function(a, b){return b._id-a._id});
           _this.setState({
		messages: arr
	});
		   }
        }, function (errorObject) {
           console.log("The read failed: " + errorObject.code);
		   _this.setState({
		messages: [
			{
				_id: 1,
				text: 'Hello developer',
				createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
				user: {
					_id: 2,
					name: 'React Native',
					avatar: 'http://orig12.deviantart.net/ca1f/f/2009/254/e/f/ef4040a54c0eacaaa8c6a5ad87700580.jpg',
				},
			},
		],
		});
        });
}

	onSend(messages = []) {
		//Backend.sendMessage(messages);
		this.sendMessage(messages);
		this.databind();
		// this.setState((previousState) => {
		// 	return {
		// 		messages: GiftedChat.append(previousState.messages, messages),
		// 	};
		// });
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
			<View style={{height:'100%'}}>
			<Text style={{backgroundColor:'#008000',height:40,textAlign:'center',paddingTop: 7,fontSize:20,color:'white'}}>Trinoto</Text>
			<GiftedChat
				messages={this.state.messages}
				onSend={(this.onSend)}
				user={{
					_id: this.state.userid,//Backend.getUid()
					name: this.state.name,
					avatar: 'http://orig12.deviantart.net/ca1f/f/2009/254/e/f/ef4040a54c0eacaaa8c6a5ad87700580.jpg',
				}}
      		/>
				</View>
		);
	}

	componentDidMount(){
		//console.log(Backend.getallData());
	}

	componentWillUnMount(){
		//Backend.closeChat();
		this.closeChat();
	}
}

Chat.defaultProps = {
	name: 'trinoto',
};

Chat.propTypes = {
	name: React.PropTypes.string,
};



export default Chat;
