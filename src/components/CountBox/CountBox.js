/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import React from 'react';
import CountUp from 'react-countup';

const CountBox = () =>
	<div className="countBox">
		<div className="countImg">
			<div className="stat" style={ { color: 'palegreen' } }>
				<h2 className="headTwo">
					<CountUp
						end={ 96 }
						duration={ 5 }
						enableScrollSpy={ true }
					/>%
				</h2>
				CLIENT RETENTION
			</div>
			<div className="stat">
				<h2 className="headTwo">
					<CountUp
						end={ 15 }
						duration={ 5 }
						enableScrollSpy={ true }
					/>+
				</h2>
				YEARS OF EXPERIENCE
			</div>
			<div className="stat">
				<h2 className="headTwo">
					<CountUp
						end={ 6 }
						duration={ 5 }
						enableScrollSpy={ true }
					/>+
				</h2>
				PROFESSIONALS
			</div>
			<div className="stat">
				<h2 className="headTwo">
					<CountUp
						end={ 70 }
						duration={ 5 }
						enableScrollSpy={ true }
					/>+
				</h2>
				SATISFIED CLIENTS
			</div>
		</div>
	</div>;

export default CountBox;
