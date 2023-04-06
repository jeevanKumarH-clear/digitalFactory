/* eslint-disable id-length */
/* eslint-disable max-len */
import { Button } from '@mui/material';
import React from 'react';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';

const StartButton = () =>
	<div className="startParent">
		<Button
			sx={ { color: '#115a9f', fontWeight: '700', fontSize: '20px', width: '200px' } }
			variant="text"
			endIcon={ <ArrowCircleRightRoundedIcon sx={ { width: '30px', height: '30px' } }/> }
		>Start Now</Button>
	</div>;

export default StartButton;
