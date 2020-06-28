import React from 'react';
import './Home.style.scss';
import Button from '../../components/Button/Button.component';

export default function Home() {
	return (
		<div className='Home'>
			<h1>BOOK.R</h1>
			<p>EVENT BOOKING MADE EASIER THAN EVER</p>

			<Button pathTo='signin' labelFor='JOIN NOW' />
		</div>
	);
}
