import React from 'react';
import './DashEvents.style.scss';

import Event from '../Event/Event.component';

export default function DashEvents() {
	return (
		<div className='DashEvents'>
			<ul className='DashEvents--Events'>
				<li className='DashEvents--Events--Event'>
					<Event eventData={{ name: 'Thingy', time: '8:00pm', date: 'Friday, June 17, 2020' }} />
				</li>
				<li className='DashEvents--Events--Event'>
					<Event eventData={{ name: 'Thingy', time: '8:00pm', date: 'Friday, June 17, 2020' }} />
				</li>
				<li className='DashEvents--Events--Event'>
					<Event eventData={{ name: 'Thingy', time: '8:00pm', date: 'Friday, June 17, 2020' }} />
				</li>
				<li className='DashEvents--Events--Event'>
					<Event eventData={{ name: 'Thingy', time: '8:00pm', date: 'Friday, June 17, 2020' }} />
				</li>
				<li className='DashEvents--Events--Event'>
					<Event eventData={{ name: 'Thingy', time: '8:00pm', date: 'Friday, June 17, 2020' }} />
				</li>
			</ul>
		</div>
	);
}
