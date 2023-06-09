/* eslint-disable id-length */
/* eslint-disable max-len */
import { Button } from '@mui/material';
import React from 'react';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';

const ViewMore = () =>
	<div className="viewMore">
		<Button
			sx={ { color: 'white' } }
			endIcon={ <ArrowCircleRightRoundedIcon sx={ { size: 'xx-large' } }/> }
		>View More</Button>
	</div>;

export default ViewMore;
