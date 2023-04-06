import React from 'react';
import MarketingServices from './MarketingServices';
import MarketingServicesImage from './MarketingServicesImage';

const WhatWeDo = (context) =>
	<div className="whatWeDo">
		<MarketingServices { ...context }/>
		<MarketingServicesImage { ...context }/>
	</div>;

export default WhatWeDo;
