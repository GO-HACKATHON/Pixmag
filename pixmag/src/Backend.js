import firebase from 'firebase'

class Backend{
    uid='';
    messageRef = null;

    constructor(){
        var config = {
            apiKey: "AIzaSyClFBrF81S5w77xX4hUDxKiXGln-83GEy8",
            authDomain: "react-pixmag.firebaseapp.com",
            databaseURL: "https://react-pixmag.firebaseio.com",
            storageBucket: "react-pixmag.appspot.com"
        };
        firebase.initializeApp(config);
        // firebase.auth().onAuthStateChanged((user) => {
        //     if(user){
        //         this.setUid(user.uid);
        //     }else{
        //         firebase.auth().signInAnonymously().catch((error) =>{
        //             alert(error.message);
        //         });
        //     }

        // })
    }

    setUid(value){
        this.uid = value;
    }
    getUid(value){
        return this.uid;
    }

    loadChat(callback){
        this.messageRef = firebase.database().ref('messages');
        this.messageRef.off();
        const onReceive = (data) => {
            const message = data.val();
            callback({
                _id: data.key,
                text: message.text,
                CreatedAt: new Date(message.createdAt),
                user:{
                    _id: message.user._id,
                    name: message.user.name
                }
            });
        };
        //this.messageRef.limitToLast(20).on('child-added', onReceive);
    }
    

    sendMessage(message){
        // console.log(message);
        // for(let i=0;i < message.length ; i++){
        //     firebase.database().ref().child('messages').push().set({
        //         text: message[i].text,
        //         user: message[i].user,
        //         createdAt: firebase.database.ServerValue.TIMESTAMP
        //     });
        // }

        for(let i=0;i < message.length ; i++){
            this.messageRef.push({
               text: message[i].text,
               user: message[i].user,
               createdAt: firebase.database.ServerValue.TIMESTAMP
            });
        }
    }

    closeChat(){
        if(this.messageRef){
            this.messageRef.off();
        }
    }
}

export default new Backend();