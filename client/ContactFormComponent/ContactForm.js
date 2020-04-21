import React from 'react';
import ShortInput from './ShortInput';
import LongInput from './LongInput';
import uuid from 'uuid'

const ContactForm = () => {
	const labels = ['Your Name', 'Phone Number', 'Email', 'Message'];
	const formElements = Array.from(Array(4), (x, i) => {
		return <ShortInput id={i} labelValue={labels[i]} key={uuid()}/>;
	})

	return (
			<div className="contact-form">
				<form>
					{formElements}
				</form>
				<input
						type="submit"
				
				/>
			</div>
	)
}


export default ContactForm;
