import styled, { css } from 'styled-components';
import { ColorType } from '../../utilis/theme/themeDefault';
import React from 'react';
import { Spinner } from '../elements/Spinner';

interface Props {
	title: string;
	name: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
	btnType?: 'button' | 'reset' | 'submit';
	type?: string;
	error?: string;
	value?: string;
	bgColor?: ColorType;
	loading?: boolean;
}

const Label = styled.label`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
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
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	cursor: pointer;
	min-height: 1.5rem;
`;

export const Input = ({
	title,
	type = 'text',
	bgColor = 'transparent',
	error,
	btnType,
	onChange,
	name,
	value,
	loading,
}: Props) => (
	<Label>
		{title}
		{btnType && <StyledButton type={btnType}>{loading ? <Spinner size={1} /> : 'Zmień'}</StyledButton>}
		<StyledInput type={type} bgColor={bgColor} onChange={onChange} name={name} value={value} />
		{error && <p>{error}</p>}
	</Label>
);
