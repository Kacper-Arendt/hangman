import { StyledBurger } from '../Styles';

export interface MenuIProps {
	isOpen: boolean;
	setIsOpen?: () => void;
}

export const Burger = ({ isOpen, setIsOpen }: MenuIProps) => (
	<StyledBurger isOpen={isOpen} onClick={setIsOpen}>
		<div />
		<div />
		<div />
	</StyledBurger>
);
