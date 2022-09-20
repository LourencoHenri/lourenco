import { Container, Content, MySkills, Skill, Title } from "./styles";
import { SiTypescript, SiReact, SiJavascript, SiHtml5, SiCss3, SiGithub, SiGit, SiStyledcomponents, SiSass } from 'react-icons/si';
import { useTheme } from "styled-components";
import { ThemeModel } from "../../../../hooks/theme";

export function Skills() {

    const theme = useTheme() as ThemeModel
    
    const iconColor = theme.third
   
    return (
        <Container id="Skills">
            <Content>
                <Title>Hard Skills</Title>
                <MySkills>
                    <Skill target="_blank" href="https://pt-br.reactjs.org/">
                        <SiReact size="4rem" color={iconColor}>a</SiReact>
                        <span>React</span>
                    </Skill>
                    <Skill target="_blank" href="https://www.typescriptlang.org/">
                        <SiTypescript size="4rem" color={iconColor}/>
                        <span>TypeScript</span>
                    </Skill>
                    <Skill target="_blank" href="https://www.javascript.com/">
                        <SiJavascript size="4rem" color={iconColor}/>
                        <span>JavaScript</span>
                    </Skill>
                    <Skill target="_blank" href="https://github.com/LourencoHenri">
                        <SiGithub size="4rem" color={iconColor}/>
                        <span>GitHub</span>
                    </Skill>
                    <Skill target="_blank" href="https://git-scm.com/">
                        <SiGit size="4rem" color={iconColor}/>
                        <span>Git</span>
                    </Skill>
                    <Skill target="_blank" href="https://sass-lang.com/">
                        <SiSass size="4rem" color={iconColor}/>
                        <span>SASS</span>
                    </Skill>
                    <Skill target="_blank" href="https://styled-components.com/">
                        <SiStyledcomponents size="4rem" color={iconColor}/>
                        <span>Styled-components</span>
                    </Skill>
                    <Skill target="_blank" href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">
                        <SiHtml5 size="4rem" color={iconColor}/>
                        <span>HTML5</span>
                    </Skill>
                    <Skill target="_blank" href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">
                        <SiCss3 size="4rem" color={iconColor}/>
                        <span>CSS3</span>
                    </Skill>
                </MySkills>                
            </Content>
        </Container>
    )
}