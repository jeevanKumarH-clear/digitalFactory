import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Idma from './Idma/Idma';
import WhatWeDo from './WhatWeDo/WhatWeDo';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';

const Home = (context) =>
	<div className="home">
		<Header { ...context }/>
		<Idma { ...context }/>
		<WhatWeDo { ...context }/>
		<WhyChooseUs { ...context }/>
		<Footer { ...context }/>
	</div>;

export default Home;
