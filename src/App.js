import { React } from 'react';
import './App.scss';
import Home from './components/Home';

const App = (context) =>
	<div className="App">
		<Home { ...context }/>
	</div>;

export default App;
