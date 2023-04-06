import React from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Heading = () =>
	<div className="dotHeading">
		<span><FiberManualRecordIcon sx={ { fontSize: 'small' } }/></span>
		<h6 className="H6">OUR BLOG</h6>
		<span><FiberManualRecordIcon sx={ { fontSize: 'small' } }/></span>
	</div>;

export default Heading;
