import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "@emotion/react";
import { GlobalStyles } from "@/styles";

import { StyledContent, StyledButton } from "@/components/styled";
import { Example } from "@/components";

const themeLight = {
  text: "#000",
  background: "#fff",
  buttonText: "#000",
  buttonTextHover: "#fff",
  buttonBorder: "#000",
  buttonBg: "rgba(0, 0, 0, 0)",
  buttonBgHover: "rgba(0, 0, 0, 1)",
};

const themeDark = {
  text: "#fff",
  background: "#121212",
  buttonText: "#fff",
  buttonTextHover: "#000",
  buttonBorder: "#fff",
  buttonBg: "rgba(255, 255, 255, 0)",
  buttonBgHover: "rgba(255, 255, 255, 1)",
};

const App = () => {
  const [isDark, setIsDark] = React.useState(false);

  return (
    <ThemeProvider theme={isDark ? themeDark : themeLight}>
      <GlobalStyles />
      <StyledContent data-cy="content">
        <h2>Vite, React, Emotion, Jest, Rtl starter pack</h2>
        <Example />
        <StyledButton onClick={() => setIsDark(current => !current)}>
          {isDark ? "light" : "dark"}
        </StyledButton>
      </StyledContent>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
