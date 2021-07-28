import React from "react";
import { css, Global } from "@emotion/react";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        body {
          margin: 0;
          font-family: -apple-system, Segoe UI, Helvetica, Arial, sans-serif;
        }
      `}
    />
  );
};

export default GlobalStyles;
