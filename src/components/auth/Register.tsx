import React from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';

// CONFIG
import { firebaseAuth } from '../../config';

// HOOKS
import { useField } from '../../hooks';

//COMPONENTS
import { Form, Input } from '../../coreUI';
import { generateUserDoc } from '../../firebase/firestore';
import { logout, useAppDispatch } from '../../redux';

interface NewUser {
	name: string;
	password: string;
	email: string;
}

const initVal = {
	email: '',
	password: '',
	name: '',
};

export const Register = () => {
	const dispatch = useAppDispatch();
	const { handleChange, fields } = useField<NewUser>(initVal);

	const onSubmitHandler = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		try {
			const registerUser = await createUserWithEmailAndPassword(firebaseAuth, fields.email, fields.password);
			if (registerUser.user) {
				const { uid, email } = registerUser.user;
				if (email) {
					await generateUserDoc({ id: uid, email, displayName: fields.name, photoURL: null });
				}
				dispatch(logout());
			}
		} catch (e: any) {
			console.log(e.message);
		}
	};

	return (
		<Form
			name
			email
			buttonValue="Register"
			onSubmit={onSubmitHandler}
			linkPath="/login"
			linkValue="Login"
			linkText="Already have an account?"
		>
			<Input name="email" onChange={handleChange} bgColor="transparent" title="Email" type="email" />
			<Input name="name" onChange={handleChange} bgColor="white" title="Name" type="text" />
			<Input name="password" onChange={handleChange} bgColor="white" title="Password" type="password" />
		</Form>
	);
};
