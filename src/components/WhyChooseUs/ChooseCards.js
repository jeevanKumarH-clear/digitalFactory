import React from 'react';

const ChooseCards = (context) => {
	const { config: { whyUsCards }} = context;

	return <div className="chooseCardContainer">
		{whyUsCards.map((card, key) =>
			<div key={ key } className="chooseCards">
				<div className="chooseCardTitle">{card.title}</div>
				<p>{card.para}</p>
			</div>)}
	</div>;
};

export default ChooseCards;
