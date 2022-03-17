import { ReactNode } from 'react';
// Styles
import { StyledMessage } from '../Styles';

export const Message = ({ children }: { children: ReactNode }) => <StyledMessage>{children}</StyledMessage>;
