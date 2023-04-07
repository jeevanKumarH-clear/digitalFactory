/* eslint-disable id-length */
/* eslint-disable max-len */
import { Button } from '@mui/material';
import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const StartNow = () =>
	<div className="startNow">
		<Button
			sx={ { color: '#115a9f', fontWeight: '700', fontSize: '20px' } }
			variant="text"
			endIcon={ <ArrowRightAltIcon sx={ { width: '30px', height: '30px', color: 'red' } }/> }
		>Start Now</Button>
	</div>;

export default StartNow;
