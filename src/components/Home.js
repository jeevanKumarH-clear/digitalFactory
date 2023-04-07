import React from 'react';
import Banners from './Banners/Banners';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Idma from './Idma/Idma';
import OurBlog from './OurBlog/OurBlog';
import RectangleImg from './RectangleImg/RectangleImg';
import WhatWeDo from './WhatWeDo/WhatWeDo';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';

const Home = (context) =>
	<div className="home">
		<Header { ...context }/>
		<Banners/>
		<Idma { ...context }/>
		<WhatWeDo { ...context }/>
		<WhyChooseUs { ...context }/>
		<OurBlog { ...context }/>
		<RectangleImg { ...context }/>
		<Footer { ...context }/>
	</div>;

export default Home;
