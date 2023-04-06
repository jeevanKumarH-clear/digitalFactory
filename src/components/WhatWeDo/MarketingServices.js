/* eslint-disable max-len */
import React from 'react';
import DotHeading from './DotHeading';
import Rating from './Rating';
import Services from './Services';

const MarketingServices = (context) =>
	<div className="marketingServices">
		<DotHeading/>
		<h2 className="H2">END-TO-END DIGITAL MARKETING SERVICES</h2>
		<Services { ...context }/>
		<Rating { ...context }/>
	</div>;

export default MarketingServices;
