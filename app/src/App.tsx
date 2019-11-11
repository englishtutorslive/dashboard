import React from "react";
import { ThemeProvider } from "styled-components";
import { Box } from "rebass";

import theme from "./utils/theme";
import { P, Em, Small, Heading } from "./Components/Text";
import { Button } from "./Components/Button/Button";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box variant="card">Card</Box>
      <Box variant="">Card</Box>

      <Button button="secondary">Button</Button>
      <Heading variant="h1">H1</Heading>
      <Heading text="h2">H2</Heading>
      <Heading text="h3">H3</Heading>
      <Heading text="h4">H4</Heading>
      <Heading text="h5">H5</Heading>
      <Heading text="h6">H6</Heading>

      <P>P Test</P>
      <Em>Em Test</Em>
      <Small>Small Test</Small>
    </ThemeProvider>
  );
};

export default App;
