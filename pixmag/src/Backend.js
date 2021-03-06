import firebase from 'firebase'

class Backend{
    uid='';
    messagesRef = null;

    constructor(){
        var config = {
            apiKey: "AIzaSyClFBrF81S5w77xX4hUDxKiXGln-83GEy8",
            authDomain: "react-pixmag.firebaseapp.com",
            databaseURL: "https://react-pixmag.firebaseio.com",
            storageBucket: "react-pixmag.appspot.com"
        };
        firebase.initializeApp(config);
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setUid(user.uid);
            }else{
                firebase.auth().signInAnonymously().catch((error) =>{
                    alert(error.message);
                });
            }

        });
        var ref = firebase.database().ref().child('messages');
        ref.on("value", function(snapshot) {
           console.log(snapshot.val());
           this.messagesRef=snapshot.val();
        }, function (errorObject) {
           console.log("The read failed: " + errorObject.code);
        });

    }

    setUid(value){
        this.uid = value;
    }
    getUid(value){
        return this.uid;
    }
    getallData(value){
        return this.messagesRef;
        
    }

    loadMessages(){
        //this.messagesRef = firebase.database().ref('messages');
        //
        // console.log("data");
        // console.log(this.messagesRef);
        // const onReceive = (data) => {
        //     const message = data.val();
        //     callback({
        //         _id: data.key,
        //         text: message.text,
        //         CreatedAt: new Date(message.createdAt),
        //         user:{
        //             _id: message.user._id,
        //             name: message.user.name
        //         }
        //     });
        // };
        //this.messagesRef.limitToLast(20).on('child-change');
        //this.messagesRef.off();
       var ref = firebase.database().ref().child('messages');
        ref.on("value", function(snapshot) {
           console.log("data");
           console.log(snapshot.val());
           return snapshot.val();
        }, function (errorObject) {
           console.log("The read failed: " + errorObject.code);
        });
        
    }
    

    sendMessage(message){
        for(let i=0;i < message.length ; i++){
            this.messagesRef.push({
               text: message[i].text,
               user: message[i].user,
               createdAt: firebase.database.ServerValue.TIMESTAMP
            });
        }
    }

    closeChat(){
        if(this.messagesRef){
            this.messagesRef.off();
        }
    }
}

export default new Backend();