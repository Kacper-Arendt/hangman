import { useState } from 'react';
import { logout, useAppDispatch, useAppSelector } from '../../../redux';
import { Burger, NavbarLink } from '../items';
import { StyledMenu, StyledNav } from '../Styles';
import { Button } from '../../../coreUI';

export const Nav = () => {
	const { authenticated } = useAppSelector((state) => state.auth);
	const [isOpen, setIsOpen] = useState(false);
	const dispatch = useAppDispatch();

	const toggleMenuHandler = () => {
		setIsOpen(!isOpen);
	};

	return (
		<StyledNav>
			<Burger isOpen={isOpen} setIsOpen={toggleMenuHandler} />
			<StyledMenu isOpen={isOpen}>
				{authenticated ? (
					<NavbarLink value="Profil" path="/profile" onClick={toggleMenuHandler} />
				) : (
					<NavbarLink onClick={toggleMenuHandler} value="Login" path="/login" />
				)}
				<NavbarLink value="Single game" path="/" onClick={toggleMenuHandler} />
				<NavbarLink value="Multiplayer" path="/multiplayer" onClick={toggleMenuHandler} />
				{authenticated && <Button variant="black" value="Wyloguj" onClick={() => dispatch(logout())} />}
			</StyledMenu>
		</StyledNav>
	);
};
