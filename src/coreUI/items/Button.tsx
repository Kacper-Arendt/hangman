import styled, { css } from "styled-components";
import React from "react";

export interface ButtonProps {
  variant: "white" | "grey" | "black" | "green";
  value: string;
  width?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
  font-size: 1rem;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  border-radius: ${({ theme }) => theme.radius[1]};
  width: ${({ width }) => width || "auto"};
  padding: 1rem;
  border: 0;

  :disabled {
    cursor: unset;
  }

  :hover {
    transform: scale(1.01);
  }

  ${({ variant }) => {
    switch (variant) {
      case "white":
        return css`
          background-color: ${({ theme }) => theme.white};
          ${({ theme }) => theme.shadow({ color: theme.black })};
        `;
      case "green":
        return css`
          background-color: ${({ theme }) =>
            theme.transparentize({ amount: 0.15, color: theme.success })};
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

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 15rem;
  }
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
