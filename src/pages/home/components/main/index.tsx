import { CodingImage, Container, Content } from "./styles";
import { useTheme } from "styled-components";
import { ThemeModel } from "../../../../hooks/theme";

export function Main() {

    const theme = useTheme() as ThemeModel
    
    return (
        <Container id="Home">
            <Content>
                <span>Hello, I'm</span>
                <h1>Henrique Lourenço_</h1>
                <h2>Web Developer</h2>
            </Content>

            <CodingImage src={`./assets/${theme.id}Computer.svg`} />

        </Container>
    )
}

