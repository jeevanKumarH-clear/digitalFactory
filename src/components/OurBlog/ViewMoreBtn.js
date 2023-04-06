import { Button } from '@mui/material';
import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const ViewMoreBtn = () =>
	<div className="viewMoreBtn">
		<Button
			sx={ { color: '#85cc29', fontFamily: 'Montserrat' } }
			endIcon={ <ArrowRightAltIcon/> }
		>VIEW MORE
		</Button>
	</div>;

export default ViewMoreBtn;
