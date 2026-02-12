import { ThemeProvider } from "styled-components"
import Header from "./components/Header"
import { Container } from "./components/styled/Container.styled"
import { theme } from "./styled/theme"
import GlobalStyles from "./styled/Global"

function App() {

  return (
    <ThemeProvider theme={theme}>
       <>
       <GlobalStyles />
          <Header />
          <Container>
              <h1>Hello World</h1>
            </Container>
        </>
    </ThemeProvider>
   
    
  )
}

export default App
