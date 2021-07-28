import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const StyledButton = styled.button`
  ${({ theme }) => css`
    margin-top: 30px;
    border: 2px solid ${theme.buttonBorder};
    background-color: ${theme.buttonBg};
    color: ${theme.buttonText};
    padding: 14px 28px;
    font-size: 16px;
    transition-duration: 0.2s;
    transition-property: background-color, color;
    cursor: pointer;
    margin-right: 5px;

    :hover {
      background-color: ${theme.buttonBgHover};
      color: ${theme.buttonTextHover};
    }
  `}
`;
