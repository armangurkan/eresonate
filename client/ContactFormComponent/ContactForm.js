import React from 'react';
import ShortInput from './ShortInput';
import LongInput from './LongInput';
import uuid from 'uuid'

const ContactForm = () => {
	const formElements = [...Array.from(Array(3), x => <ShortInput />), <LongInput />];
	return (
			<div className="contact-form">
				{formElements}
			</div>
	)
}


export default ContactForm;
