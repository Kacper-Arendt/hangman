import styled from 'styled-components';
import { Wrapper } from '../../../coreUI';
import { UserData } from './sections/UserData';

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

export const Profile = () => {
	return (
		<Wrapper>
			<StyledWrapper>
				<UserData />
			</StyledWrapper>
		</Wrapper>
	);
};
