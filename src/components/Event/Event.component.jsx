import React from 'react';
import './Event.style.scss';

export default function Event({ eventData }) {
	return (
		<div className='Event'>
			<div className='Event--left'>
				<h2>{eventData.name}</h2>
				<h4>
					<span>Date:</span> {eventData.date}
				</h4>
				<h4>
					<span>Time:</span> {eventData.time}
				</h4>
			</div>
			<div className='Event--right'>
				<div className='Event--right--img' />
			</div>
		</div>
	);
}
