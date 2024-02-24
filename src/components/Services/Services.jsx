/** @format */

import React, { useContext } from 'react';
import './Services.css';
import Card from '../Card/Card';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';
import Resume from './resume.pdf';

const Services = () => {
	// context
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;

	// transition
	const transition = {
		duration: 1,
		type: 'spring',
	};

	return (
		<div className='services' id='services'>
			{/* left side */}
			<div className='awesome'>
				{/* dark mode */}
				<span style={{ color: darkMode ? 'white' : '' }}>Skills and</span>
				<span>Services</span>
				<spane>
					Soft skills such as: Teamwork, effective communication, leadership, empathy,
					<br />
					conflict resolution, critical thinking, creativity, rapid learning and adaptability,
					<br />
					language skills; Spanish (Native), English (B1).
				</spane>
				<a href={Resume} download>
					<button className='button s-button'>Download CV</button>
				</a>
				<div className='blur s-blur1' style={{ background: '#ABF1FF94' }}></div>
			</div>
			{/* right */}
			<div className='cards'>
				{/* first card */}
				<motion.div
					initial={{ left: '23rem' }}
					whileInView={{ left: '14rem' }}
					transition={transition}
				>
					<Card
						emoji={HeartEmoji}
						heading={'Project management'}
						detail={
							'Planning, Organization, Coordination, Work Control, Power BI, Office Pack.'
						}
					/>
				</motion.div>
				{/* second card */}
				<motion.div
					initial={{ left: '-11rem', top: '14rem' }}
					whileInView={{ left: '-4rem' }}
					transition={transition}
				>
					<Card
						emoji={Glasses}
						heading={'Developer'}
						detail={
							'Html, Css, JavaScript, React, Vue, Nodejs, PostgreSQL, Scrum, Flexbox, Visual Studio Code.'
						}
					/>
				</motion.div>
				{/* 3rd */}
				<motion.div
					initial={{ top: '19rem', left: '25rem' }}
					whileInView={{ left: '17rem' }}
					transition={transition}
				>
					<Card
						emoji={Humble}
						heading={'Accounting'}
						detail={
							'Prepare reports and management indicators, Analysis of financial information, Database crossing. '
						}
						color='rgba(252, 166, 31, 0.45)'
					/>
				</motion.div>
				<div
					className='blur s-blur2'
					style={{ background: 'var(--purple)' }}
				></div>
			</div>
		</div>
	);
};

export default Services;
