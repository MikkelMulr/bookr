import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home.component';
import SignIn from './pages/SignIn/SignIn.component';
import DashBoard from './pages/DashBoard/DashBoard.component';
import Header from './components/Header/Header.component';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/actions/';

function App() {
	// const counter = useSelector((state) => state.counter);
	// const dispatch = useDispatch();

	return (
		<div className='App'>
			<Header />
			<section className='App-Content'>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/signin' component={SignIn} />
					<Route exact path='/dashboard' component={DashBoard} />
				</Switch>
			</section>
		</div>
	);
}

export default App;
