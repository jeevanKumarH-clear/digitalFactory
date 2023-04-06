/* eslint-disable max-len */
import React from 'react';
import Cards from './Cards';
import ViewMore from './ViewMore';

const Idma = (context) =>
	<div className="idma">
		<h2 className="idma_h2">INBOUND DIGITAL MARKETING AGENCY</h2>
		<p className="idmaPara">Digital Factory, an Best <a className="anchor" href="https://digitalfactoryindia.com/inbound-marketing/">Inbound Digital Marketing </a>Agency in Pondicherry specializing in <a className="anchor" href="https://digitalfactoryindia.com/web-development/">WordPress Web Development</a>, Web Design, Social Media Marketing and SEO services.</p>
		<Cards { ...context }/>
		<ViewMore { ...context }/>
	</div>;

export default Idma;
