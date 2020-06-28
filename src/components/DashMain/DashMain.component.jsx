import React from 'react';
import './DashMain.style.scss';
import Button from '../Button/Button.component';

export default function DashMain() {
	return (
		<div className='DashMain'>
			<section className='DashMain--Events'>
				<h2>Events</h2>
				<div className='DashMain--container '>
					<Button pathTo='dashboard' labelFor='Create Event' />
				</div>
			</section>
			<section className='DashMain--Lists'>
				<h2>Lists</h2>
				<div className='DashMain--container '>
					<Button pathTo='dashboard' labelFor='Create List' />
				</div>
			</section>
		</div>
	);
}
