/** @format */

import React, { useContext } from 'react';
import './Works.css';
import prosper from '../../img/prosper.png';
import datasoft from '../../img/datasoft.png';
import emoji2 from '../../img/emoji2.png';
import etex from '../../img/etex.png';
import fna from '../../img/fna.png';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';
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
						Companies where
					</span>
					<span>I have worked</span>
					<spane>
						Over the years I have worked at these wonderful companies,
						<br />
						which have given me incredible knowledge not only professionally,
						<br />
						but also in my personal growth.
					</spane>
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
						<a
							href='https://www.linkedin.com/company/prospercityco/'
							target='_blanck'
						>
							<img src={prosper} alt='' className='prosper' />
						</a>
					</div>
					<div className='w-secCircle'>
						<a
							href='https://www.linkedin.com/company/datasoft-ingenier%C3%ADa/'
							target='_blanck'
						>
							<img src={datasoft} alt='' className='datasoft' />
						</a>
					</div>
					<div className='w-secCircle'>
						<img src={emoji2} alt='' className='emoji2' />
					</div>{' '}
					<div className='w-secCircle'>
						<a
							href='https://www.linkedin.com/showcase/etex-colombia/'
							target='_blanck'
						>
							<img src={etex} alt='' className='etex' />
						</a>
					</div>
					<div className='w-secCircle'>
						<a
							href='https://www.linkedin.com/company/fondo-nacional-del-ahorro/'
							target='_blanck'
						>
							<img src={fna} alt='' className='fna' />
						</a>
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
