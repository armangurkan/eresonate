import React from 'react';
import Header from './HeaderComponent/Header.js'
import Footer from './FooterComponent/Footer.js'
import ContactForm from './ContactFormComponent/ContactForm.js'

const App = () => {
	return (
			<React.Fragment>
				<Header />
				<div className="titleBlock">Report A Problem</div>
				<ContactForm />
				<Footer />
			</React.Fragment>
	)
}

export default App;
