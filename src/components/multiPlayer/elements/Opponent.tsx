import { useAppSelector } from '../../../redux';
import styled from 'styled-components';
import { Lives } from '../../game/elements';

const StyledOpponent = styled.div`
	grid-area: opponent;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid ${({ theme }) => theme.grey400};
	border-radius: ${({ theme }) => theme.radius[2]};
	${({ theme }) => theme.shadow({})}
	align-self: center;
	padding: 0.5rem;
`;

export const Opponent = () => {
	const { id } = useAppSelector((state) => state.auth);
	const { players } = useAppSelector((state) => state.MPGame);
	const player = players.find((p) => p.id !== id);

	if (player) {
		return (
			<StyledOpponent>
				<p>
					Opponent: <strong>{player.displayName}</strong>
				</p>
				<Lives lives={player.lives} />
				<p>{player.status === 'during' ? 'Playing' : 'End'}</p>
			</StyledOpponent>
		);
	} else return null;
};
