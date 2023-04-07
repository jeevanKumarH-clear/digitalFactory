/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banners = () =>
	<Carousel autoPlay={ false } showThumbs={ false }>
		<div className="parentOne">
			<div className="divOne">
				<h2>END-TO-END DIGITAL MARKETING SERVICES</h2>
			</div>
			<div
				className="divTwo"
			>
				<img
					src="https://digitalfactoryindia.com/storage/2023/01/bg_white_firstslider-optimized.png"
					width="500px"
					height="600px"
				/>
			</div>
		</div>
		<div className="parentTwo">
			<div className="divOneP2">
				<h2>SOCIAL MEDIA MARKETING</h2>
			</div>
			<div className="divTwoP2">
				<img
					src="https://digitalfactoryindia.com/storage/2021/02/Social-media-marketing-01-2-optimized.png"
					width="500px"
					height="600px"
				/>
			</div>
		</div>
		<div className="parentThree">
			<div className="divOneP3">
				<h2>WEB DEVELOPMENT</h2>
			</div>
			<div className="divTwoP3">
				<img
					src="https://digitalfactoryindia.com/storage/2021/02/1-01-5-optimized.png"
					width="500px"
					height="600px"
				/>
			</div>
		</div>
		<div className="parentFour">
			<div className="divOneP4">
				<h2>SEARCH ENGINE OPTIMIZATION</h2>
			</div>
			<div className="divTwoP4">
				<img
					src="https://digitalfactoryindia.com/storage/2021/01/ANALYZE-A-WEB-SITE-1-optimized.png"
					width="500px"
					height="600px"
				/>
			</div>
		</div>
		<div className="parentFive">
			<div className="divOneP5">
				<h2>EMAIL MARKETING</h2>
			</div>
			<div className="divTwoP5">
				<img
					src="https://digitalfactoryindia.com/storage/2021/02/Email-marketing-01-optimized.png"
					width="500px"
					height="600px"
				/>
			</div>
		</div>
	</Carousel>;

export default Banners;
