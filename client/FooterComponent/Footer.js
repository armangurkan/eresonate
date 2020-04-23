import React from 'react';
import TwitterLogo from '../assets/twitter.svg';
import LinkedinLogo from '../assets/linkedin.svg';
import IgLogo from '../assets/instagram.svg'


const Footer = () => {
	return (
			<div className="footer">
				<div className="social">
					<TwitterLogo />
					<LinkedinLogo />
					<IgLogo />
				</div>
				<div className="lower-footer-wrapper">
					<div className='links'>
						<a className="venue-claim" href="">Claim Your Venue</a>
						<a className="venue-login" href="">Venue Log In</a>
						<a className="terms-conditions" href=""> Terms and Conditions</a>
						<a className="privacy-policy" href="">Privacy Policy</a>
					</div>
					<div className='probbutton'>
						Report a Problem
					</div>
				</div>
				
			</div>
	);
}

export default Footer;
