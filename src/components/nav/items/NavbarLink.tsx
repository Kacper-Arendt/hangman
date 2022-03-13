import { StyledLink } from '../Styles';

interface Props {
	value: string;
	path: string;
	onClick?: () => void;
}

export const NavbarLink = ({ value, path, onClick }: Props) => (
	<StyledLink onClick={onClick} to={path}>
		{value}
	</StyledLink>
);
