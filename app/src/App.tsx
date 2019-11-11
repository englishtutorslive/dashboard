import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "./utils/theme";

const App: React.FC = () => {
  return <ThemeProvider theme={theme}>test</ThemeProvider>;
};

export default App;
