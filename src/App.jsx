import { ThemeProvider } from "styled-components"
import Header from "./components/Header"
import { Container } from "./components/styled/Container.styled"
import { theme } from "./styled/theme"
import GlobalStyles from "./styled/Global"
import content from "./content"
import Card from "./components/Card"

function App() {

  return (
    <ThemeProvider theme={theme}>
       <>
          <GlobalStyles />
          <Header />
          <Container>
              {content.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </Container>
        </>
    </ThemeProvider>
   
    
  )
}

export default App
