import React from 'react';
import DoneIcon from '@mui/icons-material/Done';

const Services = (context) => {
	const { config: { marketingServices }} = context;

	return marketingServices.map((service, key) =>
		<div key={ key } className="servicePoints">
			<DoneIcon sx={ { color: 'yellowgreen' } }/>
			<span className="serviceName">{service}</span>
		</div>);
};

export default Services;
