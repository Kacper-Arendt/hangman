import styled from 'styled-components';
import { Spinner } from '../../../coreUI';

const StyledWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Waiting = () => (
	<StyledWrapper>
		<h2>Looking for opponent...</h2>
		<Spinner size={2} />
	</StyledWrapper>
);
