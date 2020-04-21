import React from 'react';


const LongInput = (props) => {
	return (
		<input
				type="textarea"
				onChange = {props.setLocation}
				value = {props.newLocation}
				className="long-input"
				key={props.key}
				id={props.id}
		/>
	)
}

export default LongInput
