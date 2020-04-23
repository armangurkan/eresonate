import React from 'react';
import Green from '../assets/green.svg'
import Blue from '../assets/blue.svg'

const Main = (props) => {
	return (
			<React.Fragment>
			<div className="main">
				<Green className="green"/>
				<Blue className="blue" />
			</div>
			</React.Fragment>
	)
}

export default Main;
