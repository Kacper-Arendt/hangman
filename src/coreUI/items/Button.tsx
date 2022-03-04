import styled, { css } from "styled-components";
import React from "react";

export interface ButtonProps {
  variant: "white" | "grey" | "black";
  value: string;
  width?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
  font-size: 1rem;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  border-radius: ${({ theme }) => theme.radius[2]};
  width: ${({ width }) => width || "auto"};
  padding: 0.75rem 1rem;
  border: 0;

  :disabled {
    cursor: unset;
  }

  ${({ variant }) => {
    switch (variant) {
      case "white":
        return css`
          background-color: ${({ theme }) => theme.white};
          border: 1px solid ${({ theme }) => theme.white};
          ${({ theme }) => theme.shadow({ color: theme.black })};
        `;
      case "grey":
        return css`
          background-color: ${({ theme }) => theme.grey300};
        `;
      case "black":
        return css`
          background-color: ${({ theme }) =>
            theme.transparentize({ amount: 0.25, color: theme.black })};
          ${({ theme }) =>
            theme.shadow({
              color: theme.transparentize({ amount: 0.25, color: theme.black }),
            })};
          color: ${({ theme }) => theme.white};
        `;
      default:
        return null;
    }
  }};
`;

export const Button = ({
  variant,
  width,
  type,
  onClick,
  value,
}: ButtonProps) => (
  <StyledButton
    variant={variant}
    value={value}
    type={type}
    width={width}
    onClick={onClick}
  >
    {value}
  </StyledButton>
);
