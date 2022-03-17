// Components
import { Body } from '../sections/Body';
import { removeAlert, useAppDispatch, useAppSelector } from '../../../../redux';

// STYLES
import { StyledWrapper } from '../Styles';

export const GlobalAlert = () => {
	const { alerts } = useAppSelector((state) => state.global);
	const dispatch = useAppDispatch();

	return (
		<StyledWrapper>
			{alerts?.slice(0, 3).map(({ id, type, title, value, closeBtn, progressBar, initDelay }) => (
				<Body
					key={id}
					width="15rem"
					type={type}
					title={title}
					value={value}
					closeBtn={closeBtn}
					progressBar={progressBar}
					initDelay={initDelay}
					handleClose={id ? () => dispatch(removeAlert(id)) : () => {}}
				/>
			))}
		</StyledWrapper>
	);
};
