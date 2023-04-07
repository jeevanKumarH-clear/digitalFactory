/* eslint-disable max-len */
import React from 'react';
import ViewMoreBtn from './ViewMoreBtn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Box } from '@mui/material';

const BlogCards = (context) => {
	const { config: { blogCards }} = context;

	return <div className="blogContainer">
		{blogCards.map((card, key) =>
			<div key={ key } className="blogCards">
				<div className="blogImg">
					<a href={ card.anchor }>
						<img src={ card.img } alt="img" height="200px" width="100%"/>
					</a>
				</div>
				<div className="blogDetails">
					<Box className="blogDate" sx={ { fontSize: 'small' } }><AccessTimeIcon/>{card.date}</Box>
					<div className="blogCardTitle">{card.title}</div>
					<p>{card.info}</p>
					<ViewMoreBtn { ...context }/>
				</div>
			</div>)}
	</div>;
};

export default BlogCards;
