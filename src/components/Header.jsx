import { StyledHeader, Nav, Logo } from './styled/Header.styled'
import { Container } from './styled/Container.styled'
import { Button } from './styled/Button.styled'

const Header = () => {
  return (
    <StyledHeader>
        <Container> 
            <Nav>
                <Logo src="./images/logo.svg" alt=""/>
                <Button>Try it free</Button>
            </Nav>
        </Container>
    </StyledHeader>
  )
}

export default Header