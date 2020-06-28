import React, { useState } from 'react';
import './SignIn.style.scss';
import Button from '../../components/Button/Button.component';

import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../redux/actions/index';

export default function SignIn() {
	const [ register, setRegister ] = useState(false);

	const user = useSelector((state) => state.name);

	if (register) {
		return (
			<div className='SignIn'>
				<header>
					<h1>Sign Up</h1>
				</header>
				<section className='Form'>
					<form>
						<input type='text' name='firstName' placeholder='first name' />
						<input type='text' name='lastName' placeholder='last name' />
						<input type='text' name='email' placeholder='email' />
						<input type='text' name='password' placeholder='password' />
						<input type='text' name='confirm_password' placeholder='confirm password' />
						<input type='text' name='organization' placeholder='organization' />
						<input type='text' name='organization_email' placeholder='organization email' />

						<Button pathTo='' labelFor='Join Now' />
						<p>
							Already a member?{' '}
							<span
								onClick={() => {
									setRegister(!register);
								}}
							>
								Sign In
							</span>
						</p>
					</form>
				</section>
			</div>
		);
	} else {
		return (
			<div className='SignIn'>
				<header>
					<h1>Sign In</h1>
				</header>
				<section className='Form'>
					<form>
						<input type='text' name='email' placeholder='email' />
						<input type='text' name='password' placeholder='password' />

						<Button pathTo='dashboard' labelFor='Sign In' />
						<p>
							Not registered?{' '}
							<span
								onClick={() => {
									setRegister(!register);
								}}
							>
								Join Now
							</span>
						</p>
					</form>
				</section>
			</div>
		);
	}
}
