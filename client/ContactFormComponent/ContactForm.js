import React, {useState} from 'react';
import ShortInput from './ShortInput';
import LongInput from './LongInput';
import uuid from 'uuid';

const ContactForm = () => {
	const [name, setName] = useState('');
	const [tel, setTel] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const states = [name, tel, email, message];
	const changeHandlers = [setName, setTel, setEmail, setMessage];
	
	
	const labels = ['Your Name', 'Phone Number', 'Email', 'Message'];
	const types = ['text', 'tel', 'email']
	const formElements = [...Array.from(Array(labels.length - 1), (x, i) =>
			<ShortInput
					initial={states[i]}
					handler={changeHandlers[i]}
					id={i}
					key={uuid}
					labelValue={labels[i]}
					type={types[i]}
					required
					errorMessage={[]}
			/>),
		<LongInput
			initial={message}
			handler={setMessage}
			id={labels.length - 1}
			key={uuid}
			labelValue={labels[labels.length - 1]}
			required
			errorMessage={[]}
		/>
		];
	const handleSubmit = e => {
		e.preventDefault();
		
			console.log({
				name,
				tel,
				email,
				message
			});
		fetch('/send_report', {
			method: 'POST',
			body: JSON.stringify({
				name,
				tel,
				email,
				message
			}),
			headers: {'Content-type': 'application/json'}
		})
		.then(res => {
			console.log(res);
			return res.json();
		})
		.then(res => {
			console.log(res);
			alert(`Your Message has been sent ${name}`)
		})
		.then(value => {
			for (const setter of changeHandlers) {
				setter('');
			}
		})
		.catch(err => {
			alert(`Your Message can not be sent Err:${err}`)
		})
		
	}
	return (
			<div className="contact-form">
				<form
					onSubmit={handleSubmit}
					onInvalid={e => {
						e.preventDefault();
						const errMsg = document.createElement('div');
						errMsg.className = 'errormessagediv';
						if(!e.target.nextSibling) {
							if(e.target.value === ''){
								errMsg.innerText = '*required';
							} else {
								errMsg.innerText = 'not valid email'
							}
							e.target.parentElement.append(errMsg);
						}
						
					}}
				>
					{formElements}
					<input
							type="submit"
					/>
				</form>
			</div>
			
	)
}


export default ContactForm;
