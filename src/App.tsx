import React from 'react';

import {
	Search
} from './components'
import './assets/default.css'
import Home from 'src/pages/Home'

function App() {
	return (
		<div className="App">
			<div className="container-lg">
				<Search />
				<Home />
			</div> 
		</div>
	);
}

export default App;
