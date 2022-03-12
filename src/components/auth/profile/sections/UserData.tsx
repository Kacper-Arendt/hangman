import styled from 'styled-components';
import { useAppSelector } from '../../../../redux';
import { SingleForm } from '../items/SingleForm';
import { UserImage } from '../items/UserImage';

const StyledUserData = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	row-gap: 0.75rem;
`;

export const UserData = () => {
	const { displayName, photoURL, id } = useAppSelector((state) => state.auth);

	return (
		<StyledUserData>
			{id && (
				<>
					<UserImage id={id} src={photoURL} alt="User Avatar" />
					{displayName && <SingleForm id={id} value={displayName} name="displayName" title="Name" editAuth />}
				</>
			)}
		</StyledUserData>
	);
};
