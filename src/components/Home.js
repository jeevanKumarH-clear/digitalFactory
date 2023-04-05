import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Idma from './Idma/Idma';

const Home = (context) =>
	<div className="home">
		<Header { ...context }/>
		<Idma { ...context }/>
		<Footer { ...context }/>
	</div>;

export default Home;
