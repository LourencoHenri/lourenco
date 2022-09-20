import { Box, Container, Contacts, Title, Content, CallToAction, ContactContents } from "./styles";

import { SiGithub, SiGmail, SiInstagram, SiLinkedin, SiMicrosoftoutlook } from 'react-icons/si';

import { HiOutlineMail } from 'react-icons/hi';
import { useTheme } from "styled-components";
import { ThemeModel } from "../../../../hooks/theme";

export function Contact() {

    const theme = useTheme() as ThemeModel
    
    const iconColor = theme.primary


    return (
        <Container id="Contact">
            <Content>
                <Title>Contact</Title>
                <Box>
                    <Contacts>

                        <ContactContents target="_blank" href="https://github.com/LourencoHenri">
                            <SiGithub size={28} color={iconColor} />LourencoHenri                            
                        </ContactContents> 

                        <ContactContents target="_blank" href="https://www.linkedin.com/in/henrique-lourenco/">
                            <SiLinkedin size={28} color={iconColor} />Henrique Lourenço                            
                        </ContactContents>  

                        <ContactContents target="_blank" href="https://www.instagram.com/lourencohenri/">
                            <SiInstagram size={28} color={iconColor} />@lourencohenri                            
                        </ContactContents>

                        <ContactContents>
                            <HiOutlineMail size={32} color={iconColor} />henri.lourenco@outlook.com                            
                        </ContactContents>
                          
                    </Contacts>
                    <CallToAction>
                        <h3>Contact me</h3>
                        <h2>Let's work together!</h2>
                    </CallToAction>
                </Box>
            </Content>
        </Container>
    )
}