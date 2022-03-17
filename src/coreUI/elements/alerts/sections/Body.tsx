import { useState } from 'react';

// Components
import { AlertHeader, CloseBtn, Message } from '../elements';
import { ProgressBar } from '../../progressBar';

// Styles
import { StyledAlert, StyledMain } from '../Styles';

export type AlertType = 'primary' | 'success' | 'warning' | 'danger';

export interface AlertBodyProps {
	width: string;
	type: AlertType;
	title?: string;
	value?: string;
	closeBtn?: boolean;
	progressBar?: boolean;
	initDelay?: string;
	handleClose?: () => void;
}

export const Body = ({ width, title, value, type, closeBtn, handleClose }: AlertBodyProps) => {
	const [isTimerActive, setIsTimerActive] = useState(true);

	return (
		<StyledAlert width={width} onMouseLeave={() => setIsTimerActive(true)} onMouseEnter={() => setIsTimerActive(false)}>
			<StyledMain type={type}>
				<div>
					{title && <AlertHeader type={type}>{title}</AlertHeader>}
					{value && <Message>{value}</Message>}
				</div>
				{closeBtn && handleClose && <CloseBtn handleClose={handleClose} type={type} />}
			</StyledMain>
			<ProgressBar type={type} animationPause={!isTimerActive} onAnimationEnd={handleClose} time={5000} />
		</StyledAlert>
	);
};
