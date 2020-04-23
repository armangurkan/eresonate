import React from 'react';


const LongInput = (props) => {
	return (
		<label htmlFor="">
			{props.labelValue}
			<textarea
				value={props.initial}
				className="long-input"
				onChange={e => {
					const existingErrorMessage = e.target.parentElement.querySelector('.errormessagediv');
					if(existingErrorMessage) existingErrorMessage.remove();
					props.handler(e.target.value);
				}}
				key={props.key}
				id={props.id}
				required
			/>
		</label>
	)
}

export default LongInput
