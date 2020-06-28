import React from 'react';
import { Link } from 'react-router-dom';
import './Header.style.scss';

export default function Header() {
	return (
		<div className='Header'>
			<section className='Header--Logo'>
				<h1>
					<Link to='/'>
						BOOK<span>.</span>R
					</Link>
				</h1>
			</section>
			<section className='Header--Nav'>
				<Link to='/signin'>
					<h3>Sign In</h3>
				</Link>
				<div className='Header--Nav--Icon' />
			</section>
		</div>
	);
}
