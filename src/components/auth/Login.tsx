import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Form, Input } from '../../coreUI';
import { addAlert, loginWithEmailAndPassword, useAppDispatch, useAppSelector } from '../../redux';
import { useField } from '../../hooks';

const initVal = {
	password: '',
	email: '',
};

export const Login = () => {
	const { handleChange, fields } = useField(initVal);
	const { authenticated } = useAppSelector((state) => state.auth);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const loginWithCredentials = (e: React.SyntheticEvent) => {
		try {
			e.preventDefault();
			dispatch(loginWithEmailAndPassword({ password: fields.password, email: fields.email }));
		} catch (e) {
			dispatch(
				addAlert({
					value: 'Spróbuj ponownie',
					title: 'Błąd podczas logowania',
					type: 'danger',
				}),
			);
		}
	};

	useEffect(() => {
		if (authenticated) navigate('/');
	}, [authenticated, navigate]);

	return (
		<Form
			email
			buttonValue="Login"
			onSubmit={loginWithCredentials}
			linkPath="/register"
			linkValue="Register"
			linkText="Need an account?"
		>
			<Input name="email" onChange={handleChange} bgColor="transparent" title="Email" type="email" />
			<Input name="password" onChange={handleChange} bgColor="white" title="Password" type="password" />
		</Form>
	);
};
