import React from 'react';
import AwardImg from './AwardImg';
import ContactInfo from './ContactInfo';
import FooterInfo from './FooterInfo';
import Services from './Services';

const Footer = () =>
	<div className="footer">
		<FooterInfo/>
		<ContactInfo/>
		<Services/>
		<AwardImg/>
	</div>;

export default Footer;
