/** @format */

import React, { useContext } from 'react';
import { themeContext } from '../../Context';
import './Experience.css';
const Experience = () => {
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;

	return (
		<div className='experience' id='experience'>
			<div className='achievement'>
				{/* darkMode */}
				<div
					className='circle'
					style={{ color: darkMode ? 'var(--orange)' : '' }}
				>
					1+
				</div>
				<span style={{ color: darkMode ? 'white' : '' }}>Developer </span>
				<span>Updating every day</span>
			</div>
			<div className='achievement'>
				<div
					className='circle'
					style={{ color: darkMode ? 'var(--orange)' : '' }}
				>
					1+
				</div>
				<span style={{ color: darkMode ? 'white' : '' }}>
					Project management{' '}
				</span>
				<span>Learning and experimenting</span>
			</div>
			<div className='achievement'>
				<div
					className='circle'
					style={{ color: darkMode ? 'var(--orange)' : '' }}
				>
					6+
				</div>
				<span style={{ color: darkMode ? 'white' : '' }}>Accounting</span>
				<span>Practicing and updating</span>
			</div>
		</div>
	);
};

export default Experience;
