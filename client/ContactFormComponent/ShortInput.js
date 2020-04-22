import React from 'react';


const ShortInput = (props) => {
	return (
		<label htmlFor={ props.id }>
			{ props.labelValue }
			<input
					type="text"
					// onChange = {}
					// value = {}
					className="short-input"
					key={props.key}
					id={props.id}
			/>
		</label>
		
	)
}

export default ShortInput;
