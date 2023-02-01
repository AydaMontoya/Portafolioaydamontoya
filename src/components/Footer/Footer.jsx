/** @format */

import React from 'react';
import './Footer.css';
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Gitub from '@iconscout/react-unicons/icons/uil-github';

const Footer = () => {
	return (
		<div className='footer'>
			<img src={Wave} alt='' style={{ width: '100%' }} />
			<div className='f-content'>
                <div className='dat'>
                <h4>aidamontoya96@gmail.com</h4>
				<h4>3123261708</h4>
                </div>
				<div className='f-icons'>
					<a href='https://www.instagram.com/aydamontoya96/' target='_blanck'>
						<Insta color='white' size={'3rem'} />
					</a>
					<a href='https://www.facebook.com/analai96' target='_blanck'>
						<Facebook color='white' size={'3rem'} />
					</a>
					<a href='https://github.com/AydaMontoya' target='_blanck'>
						<Gitub color='white' size={'3rem'} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
