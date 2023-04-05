import { Box, Tab, Tabs } from '@mui/material';
import React from 'react';

const HeaderTabs = () =>
	<Box sx={ { color: 'black' } }>
		<Tabs
			sx={ { ':hover': {
				color: 'green',
			}} }
			value="HOME"
			textColor=""
			indicatorColor=""
		>
			<Tab value="HOME" label="HOME"/>
			<Tab value="ABOUT US" label="ABOUT US"/>
			<Tab value="OUR SERVICES" label="OUR SERVICES"/>
			<Tab value="CAREERS" label="CAREERS"/>
			<Tab value="BLOG" label="BLOG"/>
			<Tab value="CONTACT US" label="CONTACT US"/>
		</Tabs>
	</Box>;

export default HeaderTabs;
