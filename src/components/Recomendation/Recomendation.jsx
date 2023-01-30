/** @format */

import React from 'react';
import './Recomendation.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import profilePic1 from '../../img/profile1.jpg';
import profilePic2 from '../../img/profile2.jpg';
import profilePic3 from '../../img/profile3.jpg';

const Recomendation = () => {
	const clients = [
		{
			img: profilePic1,
			name: 'Valentina Ramirez Zapata',
			occupation: 'Co-founder / Head of Community at Prospercity',
			review:
				'Nuestra misión es educar, generar oportunidades e impacto social que transforme el mundo en un lugar con más prosperidad. Sin estudiantes como Ayda este propósito no sería posible. Es una persona comprometida y persistente, con ganas de aprender y sin temor a preguntar, una capacidad que es tal vez la mayor falencia de las personas hoy en día. Resiliente, una mujer capaz de reinventarse y cambiar de carrera para perseguir sus sueños, participativa y lista para ayudar a los demás.',
		},
		{
			img: profilePic2,
			name: 'Oscar Oswaldo Mahecha Reina',
			occupation: 'FNA Presidency Advisor',
			review:
				'Recomiendo a Ayda, como profesional, es una excelente funcionaria con sólidos competencias y conocimientos en el campo contable, muy responsable y ejecutiva, siempre se encuentra en constante desarrollo de nuevos conocimientos. Conozco a Ayda hace más de 4 años en el campo laboral y la recomiendo para cualquier campo en desarrollo de su perfil, en los niveles de gerencia media o gerencia alta.',
		},
		{
			img: profilePic3,
			name: 'Andrés Mauricio Martínez Hincapié',
			occupation: 'Senior FullStack Engineer',
			review:
				'Ayda es sin duda una persona con capacidades especiales para el desarrollo de software. Su alto grado de organización y empeño la llevó a lograr resultados importantes con Javascript y lógica de programación en general, tiene muy buena actitud frente a los procesos de auto aprendizaje y desarrollo personal. Creo que la industria gana una muy buena Front End.',
		},
	];

	return (
		<div className='t-wrapper' id='testimonial'>
			<div className='t-heading'>
				<span>Some </span>
				<span>recommendations </span>
				<span>about my work...</span>
				<div
					className='blur t-blur1'
					style={{ background: 'var(--purple)' }}
				></div>
				<div className='blur t-blur2' style={{ background: 'skyblue' }}></div>
			</div>
			<Swiper
				// install Swiper modules
				modules={[Pagination]}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				{clients.map((client, index) => {
					return (
						<SwiperSlide key={index}>
							<div className='testimonial'>
								<img src={client.img} alt='' />
								<h3 className='name'>{client.name}</h3>
								<h4 className='occupation'>{client.occupation}</h4>
								<span className='text'>{client.review}</span>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default Recomendation;
