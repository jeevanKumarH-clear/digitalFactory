/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import StartNow from './StartNow';

const Banners = () =>
	<Carousel autoPlay={ false } showArrows={ true } showIndicators={ false } showStatus={ false } infiniteLoop={ true }>
		<div className="parentOne">
			<div className="divOne">
				<h2>END-TO-END DIGITAL MARKETING SERVICES</h2>
				<p className="para">We offer end-to-end digital marketing services that help<br/>in the growth if start-ups and small medium enterprises <br/>through a digital platform.</p>
				<StartNow/>
			</div>
			<div className="divTwo">
				<img
					src="https://digitalfactoryindia.com/storage/2023/01/bg_white_firstslider-optimized.png"
					alt="img"
					width="500px"
					height="600px"
				/>
			</div>
		</div>
		<div className="parentTwo">
			<div className="divOneP2">
				<h2>SOCIAL MEDIA MARKETING</h2>
				<p className="para">An effective social strategy can help<br/>you grow your business,maintain<br/>your social presence and engage<br/>with the audience</p>
				<StartNow/>
			</div>
			<div className="divTwoP2">
				<img
					src="https://digitalfactoryindia.com/storage/2021/02/Social-media-marketing-01-2-optimized.png"
					alt="img"
					width="500px"
					height="600px"
				/>
			</div>
		</div>
		<div className="parentThree">
			<div className="divOneP3">
				<h2>WEB DEVELOPMENT</h2>
				<p className="para">We build attractive CMS websites for<br/>any business with great functionality and<br/>integration possible to promote your<br/>product and services.</p>
				<StartNow/>
			</div>
			<div className="divTwoP3">
				<img
					src="https://digitalfactoryindia.com/storage/2021/02/1-01-5-optimized.png"
					alt="img"
					width="500px"
					height="600px"
				/>
			</div>
		</div>
		<div className="parentFour">
			<div className="divOneP4">
				<h2>SEARCH ENGINE OPTIMIZATION</h2>
				<p className="para">Search engine optimization is important<br/>for the online presence of your business.<br/>Discover More About Our SEO Expertise!</p>
				<StartNow/>
			</div>
			<div className="divTwoP4">
				<img
					src="https://digitalfactoryindia.com/storage/2021/01/ANALYZE-A-WEB-SITE-1-optimized.png"
					alt="img"
					width="500px"
					height="600px"
				/>
			</div>
		</div>
		<div className="parentFive">
			<div className="divOneP5">
				<h2>EMAIL MARKETING</h2>
				<p className="para">We create tailored marketing campaigns<br/>for each segment of your audience to promote<br/>your brand, products and services to effectively<br/>engage new customers.</p>
				<StartNow/>
			</div>
			<div className="divTwoP5">
				<img
					src="https://digitalfactoryindia.com/storage/2021/02/Email-marketing-01-optimized.png"
					alt="img"
					width="500px"
					height="600px"
				/>
			</div>
		</div>
	</Carousel>;

export default Banners;
