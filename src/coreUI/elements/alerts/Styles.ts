import styled from 'styled-components';
import { AlertType } from './sections/Body';

interface AlertStyles {
	type: AlertType;
}

export const handleColorType = (type: AlertType) => {
	switch (type) {
		case 'primary':
			return 'base1';
		case 'success':
			return 'success100';
		case 'warning':
			return 'warning';
		case 'danger':
			return 'danger';
		default:
			return 'grey500';
	}
};

export const StyledWrapper = styled.div`
	position: absolute;
	top: 0.5rem;
	left: 0.5rem;
	z-index: 1000;
`;

export const StyledAlert = styled.div<{ width?: string }>`
	overflow: hidden;
	background-color: ${({ theme }) => theme.white};
	border-radius: ${({ theme }) => theme.radius[2]};
	width: ${({ width }) => width ?? 'auto'};
	margin-bottom: 0.5rem;

	:last-child {
		margin-bottom: 0;
	}
`;

export const StyledMain = styled.div<AlertStyles>`
	display: flex;
	justify-content: space-between;
	color: ${({ theme }) => theme.grey800};
	padding: 0.5rem 0.5rem;
	background-color: ${({ theme, type }) => theme.lighten({ amount: 0.3, color: theme[handleColorType(type)] })};

	> * {
		padding: 0 0.25rem;
	}
`;

export const StyledHeader = styled.p<AlertStyles>`
	width: 100%;
	font-size: 1.4rem;
	margin: 0 0 0.5rem 0;
	font-weight: ${({ theme }) => theme.semiBold};
	color: ${({ theme, type }) => theme[handleColorType(type)]};
`;
export const StyledMessage = styled.p`
	line-height: 1rem;
	margin-bottom: 0;
`;

export const StyledIcon = styled.div`
	color: ${({ theme }) => theme.white};
	font-size: 1.5rem;
	line-height: 1.75rem;
	margin-right: 0.5rem;
`;

export const StyledClose = styled.button`
	color: ${({ theme }) => theme.grey300};
	transition: color 250ms ease-out;
	margin: 0 0.5rem auto auto;

	:hover {
		color: ${({ theme }) => theme.white};
	}
`;

export const StyledI = styled.i<AlertStyles>`
	color: ${({ theme, type }) => theme[handleColorType(type)]};
`;
