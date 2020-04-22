import React from 'react';


const LongInput = (props) => {
	return (
		<label htmlFor="">
			{props.labelValue}
			<textarea
				onChange = {props.setLocation}
				value = {props.newLocation}
				className="long-input"
				key={props.key}
				id={props.id}
			/>
		</label>
	)
}

export default LongInput
