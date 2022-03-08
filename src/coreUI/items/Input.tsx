import styled, { css } from 'styled-components';
import { ColorTye } from '../../utilis/theme/themeDefault';

interface Props {
	title: string;
	bgColor: ColorTye;
	btnType?: 'button' | 'reset' | 'submit';
	type?: string;
	error?: string;
}

const Label = styled.label`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	row-gap: 0.5rem;
	font-size: 0.9rem;
	width: 20rem;

	p {
		width: 100%;
		font-size: 0.8rem;
		color: ${({ theme }) => theme.danger};
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		width: 15rem;
	}
`;

const StyledInput = styled.input<{ bgColor: string }>`
	width: 100%;
	padding: 0.85rem;
	font-size: 1rem;
	border: 1px solid ${({ theme }) => theme.grey500};
	border-radius: ${({ theme }) => theme.radius[1]};

	${({ theme, bgColor }) =>
		bgColor &&
		theme[bgColor] &&
		css`
			background-color: ${theme[bgColor]};
		`};
`;

const StyledButton = styled.button<{ type: string }>`
	margin-left: auto;
	border: none;
	background: transparent;
	font-weight: ${({ theme }) => theme.semiBold};
	cursor: pointer;
`;

export const Input = ({ title, type = 'text', bgColor = 'transparent', error, btnType }: Props) => (
	<Label>
		{title}
		{btnType && <StyledButton type={btnType}>Zmień</StyledButton>}
		<StyledInput type={type} bgColor={bgColor} />
		{error && <p>{error}</p>}
	</Label>
);
