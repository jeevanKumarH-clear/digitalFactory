/* eslint-disable max-len */
import React from 'react';
import ViewMoreBtn from './ViewMoreBtn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Box } from '@mui/material';

const BlogCards = (context) => {
	const { config: { blogCards }} = context;

	return <div className="cardContainer">
		{blogCards.map((card, key) =>
			<div key={ key } className="blogCards">
				<a className="blogAnchor" href={ card.anchor }>
					<img
						src={ card.img }
						alt="img"
						height="200px"
					/>
					<Box className="blogDate" sx={ { fontSize: 'small' } }><AccessTimeIcon/>{card.date}</Box>
					<div className="blogCardTitle">{card.title}</div>
				</a>
				<p>{card.info}</p>
				<ViewMoreBtn { ...context }/>
			</div>)}
	</div>;
};

export default BlogCards;
