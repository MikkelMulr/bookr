import React from 'react';
import './Button.style.scss';
import { Link } from 'react-router-dom';

export default function Button({ pathTo, labelFor }) {
	return (
		<div className='Button'>
			<Link to={`/${pathTo}`}>{labelFor}</Link>
			<span />
		</div>
	);
}
