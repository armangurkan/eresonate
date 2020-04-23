import React from 'react';


const ShortInput = (props) => {
	const errMessage = props.errorMessage;
	return (
		<label htmlFor={ props.id }>
			{ props.labelValue }
			<input
					value={props.initial}
					type={props.type}
					onChange={e => {
						const existingErrorMessage = e.target.parentElement.querySelector('.errormessagediv');
						if(existingErrorMessage) existingErrorMessage.remove();
						props.handler(e.target.value)
					}}
					className="short-input"
					key={props.key}
					id={props.id}
					pattern={props.pattern}
					required
			/>
		</label>
		
	)
}

export default ShortInput;
