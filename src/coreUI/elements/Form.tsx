import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Input, Logo } from '../';

interface Props {
	email?: boolean;
	name?: boolean;
	buttonValue: string;
	onSubmit: () => void;
	linkPath: string;
	linkValue: string;
	linkText: string;
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

export const Form = ({ email, name, linkPath, linkValue, buttonValue, onSubmit, linkText }: Props) => (
	<Wrapper>
		<StyledForm onSubmit={onSubmit}>
			<Logo />
			{email && <Input bgColor="white" title="Email" type="email" />}
			{name && <Input bgColor="white" title="Name" type="text" />}
			<Input bgColor="white" title="Password" type="password" />
			<Button value={buttonValue} type="submit" variant="black" width="100%" />
		</StyledForm>
		<span>
			{linkText} <Link to={linkPath}>{linkValue}</Link>
		</span>
	</Wrapper>
);
