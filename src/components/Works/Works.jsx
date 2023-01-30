/** @format */

import React, { useContext } from 'react';
import './Works.css';
import prosper from '../../img/prosper.png';
import datasoft from '../../img/datasoft.png';
import emoji2 from '../../img/emoji2.png';
import emoji1 from '../../img/emoji1.png';
import fna from '../../img/fna.png';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
const Works = () => {
	// context
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;

	// transition
	return (
		<div className='works' id='works'>
			{/* left side */}
			<div className='w-left'>
				<div className='awesome'>
					{/* dark Mode */}
					<span style={{ color: darkMode ? 'white' : '' }}>
						Works for All these
					</span>
					<span>Brands & Clients</span>
					<spane>
						Lorem ispum is simpley dummy text of printing of printing Lorem
						<br />
						ispum is simpley dummy text of printingLorem ispum is simpley dummy
						text
						<br />
						y dummy text of printingLorem
						<br />
						ispum is simpley dummy text of printing
					</spane>
					<Link to='contact' smooth={true} spy={true}>
						<button className='button w-button'>Hire Me</button>
					</Link>
					<div
						className='blur s-blur1'
						style={{ background: '#ABF1FF94' }}
					></div>
				</div>

				{/* right side */}
			</div>
			<div className='w-right'>
				<motion.div
					initial={{ rotate: 45 }}
					whileInView={{ rotate: 0 }}
					viewport={{ margin: '-40px' }}
					transition={{ duration: 3.5, type: 'spring' }}
					className='w-mainCircle'
				>
					<div className='w-secCircle'>
						<img src={prosper} alt='' className='prosper' />
					</div>
					<div className='w-secCircle'>
						<img src={datasoft} alt='' className='datasoft' />
					</div>
					<div className='w-secCircle'>
						<img src={emoji2} alt='' className='emoji2' />
					</div>{' '}
					<div className='w-secCircle'>
						<img src={emoji1} alt='' className='emoji1' />
					</div>
					<div className='w-secCircle'>
						<img src={fna} alt='' className='fna' />
					</div>
				</motion.div>
				{/* background Circles */}
				<div className='w-backCircle blueCircle'></div>
				<div className='w-backCircle yellowCircle'></div>
			</div>
		</div>
	);
};

export default Works;
