import React from 'react';
import ShortInput from './ShortInput';
import LongInput from './LongInput';
import uuid from 'uuid'

const ContactForm = () => {
	const labels = ['Your Name', 'Phone Number', 'Email', 'Message'];
	const formElements = [...Array.from(Array(labels.length - 1), (x, i) =>
			<ShortInput
					id={i}
					key={uuid}
					labelValue={labels[i]}
			/>),
		<LongInput
			id={labels.length}
			key={uuid}
			labelValue={labels[labels.length - 1]}
		/>
		]

	return (
			<div className="contact-form">
				<form >
					{formElements}
					<input
							type="submit"
					/>
				</form>
			</div>
			
	)
}


export default ContactForm;
