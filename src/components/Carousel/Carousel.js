/* eslint-disable func-style */
/* eslint-disable id-match */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
/* eslint-disable complexity */
/* eslint-disable max-statements */
/* eslint-disable no-magic-numbers */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import React, { useRef } from 'react';
import './style.css';

let i = 0;

const right = () => {
	const box1 = document.getElementById('image1');
	const box2 = document.getElementById('image2');
	const box3 = document.getElementById('image3');
	const box4 = document.getElementById('image4');

	if(i == 0) {
		box1.style.opacity = 1;
		box2.style.opacity = 0;
		box3.style.opacity = 0;
		box4.style.opacity = 0;
		i++;
	}
	else if(i == 1) {
		box1.style.opacity = 0;
		box2.style.opacity = 1;
		box3.style.opacity = 0;
		box4.style.opacity = 0;
		i++;
	}
	else if(i == 2) {
		box1.style.opacity = 0;
		box2.style.opacity = 0;
		box3.style.opacity = 1;
		box4.style.opacity = 0;
		i++;
	}
	else if(i == 3) {
		box1.style.opacity = 0;
		box2.style.opacity = 0;
		box3.style.opacity = 0;
		box4.style.opacity = 1;
		i = 0;
	}
};

const left = () => {
	const box1 = document.getElementById('image1');
	const box2 = document.getElementById('image2');
	const box3 = document.getElementById('image3');
	const box4 = document.getElementById('image4');

	if(i == 0) {
		box1.style.opacity = 0;
		box2.style.opacity = 0;
		box3.style.opacity = 0;
		box4.style.opacity = 1;
		i++;
	}
	else if(i == 1) {
		box1.style.opacity = 0;
		box2.style.opacity = 0;
		box3.style.opacity = 1;
		box4.style.opacity = 0;
		i++;
	}
	else if(i == 2) {
		box1.style.opacity = 0;
		box2.style.opacity = 1;
		box3.style.opacity = 0;
		box4.style.opacity = 0;
		i++;
	}
	else if(i == 3) {
		box1.style.opacity = 1;
		box2.style.opacity = 0;
		box3.style.opacity = 0;
		box4.style.opacity = 0;
		i = 0;
	}
};

const Carousel = () => {
	const box1 = useRef(null);
	const box2 = useRef(null);
	const box3 = useRef(null);
	const box4 = useRef(null);

	return <div className="picContainer">
		<div ref={ box1 } id="image1" className="img">
			<img
				src="https://digitalfactoryindia.com/storage/2021/02/1-01-5-optimized.png"
				alt="img"
			/>
		</div>
		<div ref={ box2 } id="image2" className="img">
			<img
				src="https://digitalfactoryindia.com/storage/2021/01/ANALYZE-A-WEB-SITE-1-optimized.png"
			/>
		</div>
		<div ref={ box3 } id="image3" className="img">
			<img src="https://digitalfactoryindia.com/storage/2021/02/Email-marketing-01-optimized.png"/>
		</div>
		<div ref={ box4 } id="image4" className="img">
			<img src="https://digitalfactoryindia.com/storage/2023/01/bg_white_firstslider-optimized.png"/>
		</div>
		<div className="left" onClick={ left }/>
		<div className="right" onClick={ right }/>
		<div className="dots">
			<div className="dot a1"/>
			<div className="dot a2"/>
			<div className="dot a3"/>
			<div className="dot a4"/>
		</div>
	</div>;
};

export default Carousel;
