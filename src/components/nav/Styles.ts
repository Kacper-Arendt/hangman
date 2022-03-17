import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MenuIProps } from './items';

export const StyledNav = styled.header`
	position: fixed;
	right: 1rem;
	top: 1rem;
	z-index: 50;
`;

export const StyledMenu = styled.nav<{ isOpen: boolean }>`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: start;
	row-gap: 2rem;
	width: 100%;
	max-width: 23rem;
	transform: ${(props) => (props.isOpen ? 'translateX(25%)' : 'translateX(165%)')};
	padding: 6.5rem 0 3rem;
	transition: transform 0.3s ease-in-out;
	z-index: 10;
	background-color: #8ba68a;

	button {
		margin: auto 0 0 1rem;
		align-self: start;
		width: 100%;
		max-width: 15rem;
	}
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
	color: ${({ theme }) => theme.black};

	padding: 0 5rem 0.5rem 1rem;
	width: 45%;
	white-space: nowrap;
	font-size: 1.4rem;
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
	border-bottom: 1px solid ${({ theme }) => theme.black};
`;

export const StyledBurger = styled.button<MenuIProps>`
  position: relative;
  border: none;
  margin-right: 10%;
  transition: all .35s ease-in-out;
  transform: ${(props: MenuIProps) => props.isOpen && 'rotate(45deg)'};
  z-index: 11;
  background: transparent;

  :before {
    content: "";
    position: absolute;
    top: calc(50% - 1.5rem);
    left: calc(50% - 1.5rem);
    width: 3rem;
    height: 3rem;
    border: 3px solid;
    transition: all .3s ease-in-out;
    border-radius: 100%;
    border-color: ${({ isOpen, theme }) => isOpen && theme.danger};
  }

  div {
    height: 4px;
    margin: 6px auto;
    transition: all .3s ease-in-out;
    background-color: black;
    width: 1.875rem;

    :first-child {
      transform: ${(props: MenuIProps) => props.isOpen && 'translateY(10px)'};
    }

    :nth-child(2) {
      transform: ${(props: MenuIProps) => props.isOpen && 'rotate(90deg)'};
    }

    :nth-child(3) {
      transform: ${(props: MenuIProps) => props.isOpen && 'translateY(-10px)'};
    }
  }
}


@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
  :before {
    top: calc(50% - 1rem);
    left: calc(50% - 1rem);
    width: 2rem;
    height: 2rem;
    border-color: ${({ isOpen, theme }) => isOpen && theme.danger};
  }

  div {
    height: 3px;
    margin: 3px auto;
    transition: all .3s ease-in-out;
    background-color: black;
    width: 1rem;

    :first-child {
      transform: ${(props: MenuIProps) => props.isOpen && 'translateY(6px)'};
    }

    :nth-child(3) {
      transform: ${(props: MenuIProps) => props.isOpen && 'translateY(-6px) rotate(90deg)'};
    }
  } `;
