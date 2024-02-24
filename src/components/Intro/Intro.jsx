/** @format */

import React, { useContext } from 'react';
import './Intro.css';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import girl from '../../img/girl.png';
import glassesimoji from '../../img/glassesimoji.png';
import contador from '../../img/contador.png';
import crown from '../../img/crown.png';
import FloatinDiv from '../FloatingDiv/FloatingDiv';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
const Intro = () => {
	// Transition
	const transition = { duration: 2, type: 'spring' };

	// context
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;

	return (
		<div className='Intro' id='Intro'>
			{/* left name side */}
			<div className='i-left'>
				<div className='i-name'>
					{/* yahan change hy darkmode ka */}
					<span style={{ color: darkMode ? 'white' : '' }}>Hello! I Am</span>
					<span>Ayda Montoya Henao</span>
					<span>
						I am a Certified Public Accountant with 6 years of experience.
						Likewise, I am a Front End developer. Bilingual (English B1). I have
						experience in project management and have the ability to lead and
						direct work groups.
					</span>
				</div>
				<Link to='contact' smooth={true} spy={true}>
					<button className='button i-button'>Hire me</button>
				</Link>
				{/* social icons */}
				<div className='i-icons'>
					<a href='https://github.com/AydaMontoya' target='_blanck'>
						<img src={Github} alt='GitHub' />
					</a>
					<a
						href='https://www.linkedin.com/in/ayda-yineth-montoya-henao-8609a0221/'
						target='_blanck'
					>
						<img src={LinkedIn} alt='LinkedIn' />
					</a>
					<a href='https://www.instagram.com/aydamontoya96/' target='_blanck'>
						<img src={Instagram} alt='Instagram' />
					</a>
				</div>
			</div>
			{/* right image side */}
			<div className='i-right'>
				<img src={Vector1} alt='' />
				<img src={Vector2} alt='' />
				<img src={girl} alt='' className='girl' />
				{/* animation */}
				<motion.img
					className='emoji'
					initial={{ left: '-36%' }}
					whileInView={{ left: '-24%' }}
					transition={transition}
					src={glassesimoji}
					alt=''
				/>

				<motion.div
					initial={{ top: '-3%', left: '74%' }}
					whileInView={{ left: '66%' }}
					transition={transition}
					className='floating-div'
				>
					<FloatinDiv img={crown} text1='Software' text2='Developer' />
				</motion.div>

				{/* animation */}
				<motion.div
					initial={{ left: '9rem', top: '18rem' }}
					whileInView={{ left: '0rem' }}
					transition={transition}
					className='floating-div'
				>
					{/* floatinDiv mein change hy dark mode ka */}
					<FloatinDiv img={contador} text1='Public ' text2='Accountant' />
				</motion.div>

				<div className='blur' style={{ background: 'rgb(238 210 255)' }}></div>
				<div
					className='blur'
					style={{
						background: '#C1F5FF',
						top: '17rem',
						width: '21rem',
						height: '11rem',
						left: '-9rem',
					}}
				></div>
			</div>
		</div>
	);
};

export default Intro;
