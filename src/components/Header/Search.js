import { Button } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Search = () =>
	<Button
		sx={ { color: 'black' } }
		startIcon={ <SearchIcon/> }
	/>;

export default Search;
