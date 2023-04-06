/* eslint-disable id-length */
/* eslint-disable max-len */
import { Button } from '@mui/material';
import React from 'react';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';

const ViewMoreTwo = () =>
	<div className="viewMoreTwo">
		<Button
			sx={ { color: '#115a9f', fontWeight: 'bold', fontSize: '20px', width: '200px' } }
			variant="text"
			endIcon={ <ArrowCircleRightRoundedIcon/> }
		>View More</Button>
	</div>;

export default ViewMoreTwo;
