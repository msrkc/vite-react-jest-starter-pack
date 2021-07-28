import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const StyledContent = styled.div`
  ${({ theme }) => css`
    padding: 100px 0;
    background-color: ${theme.background};
    color: ${theme.text};
    text-align: center;
    height: 100vh;
    transition-duration: 0.2s;
    transition-property: background-color, color;
  `}
`;
