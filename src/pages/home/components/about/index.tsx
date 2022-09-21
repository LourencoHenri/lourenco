import { Box, CodingImage, Container, Content, TextContent, Title } from "./styles";
import { useTheme } from "styled-components";
import { ThemeModel } from "../../../../hooks/theme";

export function About() {

    const theme = useTheme() as ThemeModel
    
    return (
        <Container id="About">
            <Content>
                <Title>About me</Title>
                
                <Box>
                <CodingImage src={`./assets/${theme.id}Dev.svg`} />
                    <TextContent>
                        <p>My name is Henrique Lourenço, I live in Santos, Brazil. Currently I study programming to learn and increase my skills.</p>
                        <p>I'm enthusiast of programming technologies. I think everything provided is fantastic. I like the lifelong learning style, I always wanna improve and acquire knowledge. </p>
                    </TextContent>
                </Box>                
            </Content>            
        </Container>
    )
}