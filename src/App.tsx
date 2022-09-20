import { ThemeProvider as SCThemeProvider } from "styled-components";
import { useTheme } from "./hooks/theme";
import { Home } from "./pages/home";
import { GlobalStyle } from "./styles/global";

export function App() {

  const { theme } = useTheme()

  return (
    <SCThemeProvider theme={theme}>
      <Home/>
      <GlobalStyle/>
    </SCThemeProvider>    
  )
}