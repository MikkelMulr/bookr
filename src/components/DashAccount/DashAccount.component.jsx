import React from 'react';
import { useSelector } from 'react-redux';
import './DashAccount.style.scss';

export default function DashAccount() {
	const user = useSelector((state) => state.userName);

	return (
		<div className='DashAccount'>
			<h2>DASHACCOUNT</h2>
		</div>
	);
}
