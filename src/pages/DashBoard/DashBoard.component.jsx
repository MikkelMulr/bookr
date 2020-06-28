import React, { useState } from 'react';
import './DashBoard.style.scss';
import DashMain from '../../components/DashMain/DashMain.component';
import DashAccount from '../../components/DashAccount/DashAccount.component';
import DashEvents from '../../components/DashEvents/DashEvents.component';
import DashLists from '../../components/DashLists/DashLists.component';

export default function DashBoard({ userName, orgName }) {
	const [ view, setView ] = useState('dashboard');

	return (
		<div className='DashBoard'>
			<section className='DashBoard--Nav'>
				<div className='DashBoard--Nav_User'>
					<div className='DashBoard--Nav_User--Image'>
						<div className='User--Profile' />
						<h3>USERNAME{userName}</h3>
						<h4>ORGANIZATION NAME{orgName}</h4>
					</div>
				</div>
				<nav className='DashBoard--Nav--Menu'>
					<ul>
						<li onClick={() => setView('dashboard')}>Dashboard</li>
						<li onClick={() => setView('account')}>Account</li>
						<li onClick={() => setView('events')}>Events</li>
						<li onClick={() => setView('lists')}>Lists</li>
					</ul>
					<p>Privacy</p>
				</nav>
			</section>

			<section className='DashBoard--Main'>
				{view === 'dashboard' ? (
					<DashMain />
				) : view === 'account' ? (
					<DashAccount />
				) : view === 'events' ? (
					<DashEvents />
				) : view === 'lists' ? (
					<DashLists />
				) : (
					<h1 className='errormsg'>Something went wrong </h1>
				)}
			</section>
		</div>
	);
}
