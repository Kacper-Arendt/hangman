import { StyledClose, StyledI } from '../Styles';
import { AlertType } from '../sections/Body';

export const CloseBtn = ({ type, handleClose }: { type: AlertType; handleClose: () => void }) => (
	<StyledClose type="button" onClick={handleClose}>
		<StyledI type={type} className="far fa-times" />
	</StyledClose>
);
