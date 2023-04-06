import React from 'react';
import ChooseCards from './ChooseCards';
import WhyUsHeading from './WhyUsHeading';

const WhyChooseUs = (context) =>
	<div className="whyChooseUs">
		<WhyUsHeading { ...context }/>
		<ChooseCards { ...context }/>
	</div>;

export default WhyChooseUs;
