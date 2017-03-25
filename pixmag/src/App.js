import React from 'react';

import Home from './components/Home';
import Chat from './components/Chat';

import {
	Router,
	Scene
} from 'react-native-router-flux';

class App extends React.Component{
	render(){
		return(
			<Router>
				<Scene key='root'>
					<Scene key='home' Component={Home} title='Home'/>
					<Scene key='chat' Component={Chat} title='Chat'/>
				</Scene>
			</Router>
		);
	}
}

export default App;
