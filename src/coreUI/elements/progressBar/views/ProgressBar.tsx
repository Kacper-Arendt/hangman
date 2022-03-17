import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

// COMPONENTS
import { AlertType } from '../../alerts/sections/Body';

//STYLES
import { handleColorType } from '../../alerts/Styles';

interface Props {
	time: number;
	onAnimationEnd?: () => void;
	animationPause: boolean;
	type: AlertType;
}

const StyledProgressBar = styled.div<Props>`
	width: 100%;
	height: 0.55rem;
	margin: auto auto 0 0;
	background-color: ${({ theme, type }) => theme.transparentize({ amount: 0.2, color: theme[handleColorType(type)] })};

	animation: progres ${({ time }) => `${time}ms forwards linear`};
	${({ animationPause }) =>
		animationPause &&
		css`
			animation-play-state: paused;
		`};

	@keyframes progres {
		0% {
			width: 100%;
		}
		100% {
			width: 0;
		}
	} ;
`;

export const ProgressBar = ({ time, type, onAnimationEnd, animationPause }: Props) => {
	const [delay, setDelay] = useState(time);
	const [started, setStarted] = useState<any>(new Date());

	useEffect(() => {
		let interval: any = null;

		if (animationPause) {
			setStarted(new Date());
			interval = setTimeout(() => {
				if (onAnimationEnd) {
					onAnimationEnd();
				}
			}, delay);
		} else {
			const date: any = new Date();
			const timeOut = date - started;
			setDelay(delay - timeOut);
		}

		return () => {
			if (interval) {
				clearTimeout(interval);
			}
		};
	}, [animationPause]);

	return (
		<StyledProgressBar type={type} time={time} onAnimationEnd={onAnimationEnd} animationPause={animationPause}>
			<div />
		</StyledProgressBar>
	);
};
