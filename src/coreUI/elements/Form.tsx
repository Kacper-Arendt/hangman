import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Logo } from '../';
import React, { ReactNode } from 'react';
import { loginWithGoogle } from '../../redux/auth/thunk';
import { addAlert, useAppDispatch } from '../../redux';

interface Props {
	email?: boolean;
	name?: boolean;
	buttonValue: string;
	linkPath: string;
	linkValue: string;
	linkText: string;
	children?: ReactNode;
	onSubmit: (e: React.SyntheticEvent) => void;
}

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	row-gap: 2rem;
	background: radial-gradient(50% 50% at 50% 50%, #fff 0%, #eeeff0 100%);
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	row-gap: 1rem;
`;

export const Form = ({ linkPath, linkValue, buttonValue, onSubmit, linkText, children }: Props) => {
	const dispatch = useAppDispatch();

	const appLogin = () => {
		try {
			dispatch(loginWithGoogle());
		} catch (e) {
			dispatch(addAlert({ title: 'Wystąpił błąd', value: 'Spróbuj ponownie', type: 'danger' }));
		}
	};

	return (
		<Wrapper>
			<StyledForm onSubmit={onSubmit}>
				<Logo />
				{children}
				<Button value={buttonValue} type="submit" variant="black" width="100%" />
			</StyledForm>
			<span>
				{linkText} <Link to={linkPath}>{linkValue}</Link>
			</span>
			<Button variant="white" value="Login With Google" onClick={() => appLogin()} />
		</Wrapper>
	);
};
