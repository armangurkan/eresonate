import React from 'react';
import Header from './HeaderComponent/Header.js'
import Footer from './FooterComponent/Footer.js'
import ContactForm from './ContactFormComponent/ContactForm.js'
import Main from './ContactFormComponent/Main'
const App = () => {
	return (
			<React.Fragment>
				<Main />

				<Header />
				<div className="titleBlock">Report A Problem</div>
				<ContactForm/>
				<Footer />
			</React.Fragment>
	)
}

export default App;
