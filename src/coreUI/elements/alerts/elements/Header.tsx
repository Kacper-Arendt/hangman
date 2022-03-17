import { StyledHeader } from '../Styles';
import { ReactNode } from 'react';
import { AlertType } from '../sections/Body';

export const AlertHeader = ({ children, type }: { children: ReactNode; type: AlertType }) => (
	<StyledHeader type={type}>{children}</StyledHeader>
);
