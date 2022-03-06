import styled from 'styled-components';
import { GameMessage } from '../../../models';

const StyledMessage = styled.p<GameMessage>`
	grid-area: info;
	width: 80%;
	font-size: 1.2rem;
	line-height: 1.35;

	span {
		margin-left: 0.3rem;
		color: ${({ theme }) => theme.success};
		font-weight: bold;
	}
`;

export const Message = ({ type, value, content }: GameMessage) => {
	return (
		<StyledMessage type={type} value={value}>
			{value}
			{content && <span>{content}</span>}
		</StyledMessage>
	);
};
