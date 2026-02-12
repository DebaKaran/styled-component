import { ThemeProvider } from "styled-components"
import Header from "./components/Header"
import { Container } from "./components/styled/Container.styled"
import { theme } from "./styled/theme"

function App() {

  return (
    <ThemeProvider theme={theme}>
       <>
          <Header />
          <Container>
              <h1>Hello World</h1>
            </Container>
        </>
    </ThemeProvider>
   
    
  )
}

export default App
