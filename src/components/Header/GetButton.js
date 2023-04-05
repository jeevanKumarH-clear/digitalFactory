/* eslint-disable max-len */
import { Button } from '@mui/material';
import React from 'react';

const GetButton = () =>
	<Button
		className="getButton"
		size="large"
		sx={ { borderRadius: '50px', backgroundColor: 'rgb(29, 218, 54)', color: 'white', width: '140px', height: '40px' } }
	>GET A QUOTE</Button>;

export default GetButton;
