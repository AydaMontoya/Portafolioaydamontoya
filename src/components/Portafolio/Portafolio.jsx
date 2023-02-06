/** @format */

import React, { useContext } from 'react';
import './Portafolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import RodandoPM from '../../img/RodandoPM.png';
import marvel from '../../img/marvel.png';
import PortafolioAM from '../../img/PortafolioAM.png';
import contadorclick from '../../img/contadorclick.png';
import { themeContext } from '../../Context';
const Portafolio = () => {
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;
	return (
		<div className='portafolio' id='portafolio'>
			{/* heading */}
			<span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
			<span>Portafolio</span>

			{/* slider */}
			<Swiper
				spaceBetween={30}
				slidesPerView={3}
				grabCursor={true}
				className='portafolio-slider'
			>
				<SwiperSlide>
					<a href='https://rodandopormanizales.com.co' target='_blanck'>
						<img src={RodandoPM} alt='Rodando por Manizales' />
					</a>
				</SwiperSlide>
				<SwiperSlide>
					<a
						href='https://marvelportalprospercityam.vercel.app/'
						target='_blanck'
					>
						<img src={marvel} alt='Marvel' />
					</a>
				</SwiperSlide>
				<SwiperSlide>
					<a href='https://portafolioaydamontoya.vercel.app/'>
						<img src={PortafolioAM} alt='' />
					</a>
				</SwiperSlide>
				<SwiperSlide>
					<a
						href='https://contador-click-react-smoky.vercel.app/'
						target='_blanck'
					>
						<img src={contadorclick} alt='Contador' />
					</a>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Portafolio;
