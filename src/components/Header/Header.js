import React from 'react';
import DigiFacImg from './DigiFacImg';
import GetButton from './GetButton';
import HeaderTabs from './HeaderTabs';
import Search from './Search';

const Header = (context) =>
	<div className="header">
		<DigiFacImg { ...context }/>
		<HeaderTabs { ...context }/>
		<Search { ...context }/>
		<GetButton { ...context }/>
	</div>;

export default Header;
