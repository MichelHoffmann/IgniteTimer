import { Button } from "./components/Button";

import { ThemeProvider } from 'styled-components'
import { defaltTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaltTheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button />
    </ThemeProvider>
  );
}
