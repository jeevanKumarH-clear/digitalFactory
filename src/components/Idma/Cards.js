/* eslint-disable max-len */
import React from 'react';

const Cards = (context) => {
	const { config: { cards }} = context;

	return <div className="cardContainer">
		{cards.map((card, key) =>
			<div key={ key } className="cards">
				<div className="imgCircle">
					<img
						src={ card.icon }
						alt="img"
						height="30px"
					/>
				</div>
				<div className="cardTitle">{card.title}</div>
				<p>{card.para}</p>
			</div>)}
	</div>;
};

export default Cards;
