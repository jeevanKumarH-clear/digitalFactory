import React from 'react';
import DigiFacImg from './DigiFacImg';
import GetButton from './GetButton';
import HeaderTabs from './HeaderTabs';
import Search from './Search';

const Header = () =>
	<div className="header">
		<DigiFacImg/>
		<HeaderTabs/>
		<Search/>
		<GetButton/>
	</div>;

export default Header;
