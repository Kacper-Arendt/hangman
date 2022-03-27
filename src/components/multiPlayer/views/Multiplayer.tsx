import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect } from 'react';
import styled from 'styled-components';

// COMPONENTS
import { Wrapper } from '../../../coreUI';
import { Game } from '../sections/Game';

// HELPERS
import { FirebasePath, MPGameStatus, StartMPGame } from '../../../models';
import { startMultiplayer, useAppDispatch, useAppSelector } from '../../../redux';
import { firestore } from '../../../config';
import { End, Waiting } from '../sections';
import { useParams } from 'react-router';

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

export const Multiplayer = () => {
	const { id } = useParams();
	const { status } = useAppSelector((state) => state.MPGame);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (id) {
			const q = query(collection(firestore, FirebasePath.games), where('id', '==', id));
			onSnapshot(q, (querySnapshot) => {
				querySnapshot.forEach((doc) => {
					dispatch(startMultiplayer(doc.data() as StartMPGame));
				});
			});
		}
	}, [id]);

	const gameStatusHandler = () => {
		switch (status) {
			case MPGameStatus.waiting:
				return <Waiting />;
			case MPGameStatus.during:
				return <Game />;
			case MPGameStatus.end:
				return <End />;
			default:
				return null;
		}
	};

	return (
		<Wrapper>
			<StyledWrapper>{gameStatusHandler()}</StyledWrapper>
		</Wrapper>
	);
};
