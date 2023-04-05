import { Button } from '@mui/material';
import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const ViewMore = () =>
	<div className="viewMore">
		<Button
			sx={ { color: 'white' } }
			endIcon={ <ArrowRightAltIcon/> }
		>View More</Button>
	</div>;

export default ViewMore;
