/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import React from 'react';

const ContactInfo = () =>
	<div className="contactInfo">
		<h3>Contact Info</h3>
		<ul>
			<li>
				<strong style={ { color: 'turquoise' } }>Address:</strong>
				<br/>First Floor, 95 – D Needarajappaiyar Street, Pondicherry – 605001
			</li>
			<li>
				<strong style={ { color: 'turquoise' } }>Email:</strong>
				<br/>info@digitalfactoryindia.com
			</li>
			<li>
				<strong style={ { color: 'turquoise' } }>phone:</strong>0413 2222136
			</li>
			<li>
				<strong style={ { color: 'turquoise' } }>Open:</strong>Mon – Sat 9:00 am – 6:00 pm
			</li>
		</ul>
	</div>;

export default ContactInfo;
