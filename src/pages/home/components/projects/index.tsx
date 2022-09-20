import { Container, Content, Title, SubTitle, Box, Card, CardImg, CardTitle, CardText, CardAnchor, CardContent } from "./styles";
import calculator from "../../../../assets/calculator.png"
import dtmoney from "../../../../assets/dtmoney.png"
import timer from "../../../../assets/timer.png"
import social from "../../../../assets/social.png"
import toDo from "../../../../assets/toDo.png"

export function Projects() {

    return (
        <Container id="Projects">
            <Content>

                <Title>Projects</Title>
                <SubTitle>
                    Press <span>access</span> to visit the project page.
                </SubTitle>

                <Box>

                    <Card>
                        <CardImg>
                            <img src={calculator} />
                        </CardImg>
                        <CardContent>
                            <CardTitle>Calculator</CardTitle>
                            <CardText>
                                <p>Scientific and standard calculator.</p>
                                <p>I used React, TypeScript and Styled-Components to develop it.</p>
                            </CardText>
                            <CardAnchor target="_blank" href="https://lourenco-calculator.herokuapp.com/" >
                                <button>
                                    Access
                                </button>
                            </CardAnchor>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardImg>
                            <img src={timer} />
                        </CardImg>
                        <CardContent>
                            <CardTitle>Timer</CardTitle>
                            <CardText>
                                <p>Timer to assist with Pomodoro technique.</p>
                                <p>I used React, TypeScript and Styled-Components to develop it.</p>
                            </CardText>
                            <CardAnchor target="_blank" href="https://github.com/LourencoHenri/timer-js" >
                                <button>
                                    Access
                                </button>
                            </CardAnchor>
                        </CardContent>
                    </Card>
                    
                    <Card>
                        <CardImg>
                            <img src={dtmoney} />
                        </CardImg>
                        <CardContent>
                            <CardTitle>dt.money</CardTitle>
                            <CardText>
                                <p>We can add withdrawn and deposited amounts.</p>
                                <p>I used React, TypeScript and Styled-Components to develop it.</p>
                            </CardText>
                            <CardAnchor target="_blank" href="https://github.com/LourencoHenri/dt-money" >
                                <button>
                                    Access
                                </button>
                            </CardAnchor>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardImg>
                            <img src={toDo} />
                        </CardImg>
                        <CardContent>
                            <CardTitle>To.do</CardTitle>
                            <CardText>
                                <p>A "to do list". We can add, remove and tag tasks as done.</p>
                                <p>I used React and CSS to develop it.</p>
                            </CardText>
                            <CardAnchor target="_blank" href="https://github.com/LourencoHenri/list-jsx" >
                                <button>
                                    Access
                                </button>
                            </CardAnchor>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardImg>
                            <img src={social} />
                        </CardImg>
                        <CardContent>
                            <CardTitle>Social Network</CardTitle>
                            <CardText>
                                <p>Comment system, similar to Facebook.</p>
                                <p>I used React, TypeScript and CSS to develop it.</p>
                            </CardText>
                            <CardAnchor target="_blank" href="https://lourenco-calculator.herokuapp.com/" >
                                <button>
                                    Access
                                </button>
                            </CardAnchor>
                        </CardContent>
                    </Card>

                </Box>             

            </Content>
        </Container>
    )
}

/*

import { Box, Container, Content, Project, ProjectsText, Title, ProjectTitle, ProjectImg, ProjectText, ProjectContent, AccessProject } from "./styles";
<Box>
                    <Project>

                        <ProjectImg>
                            <img src={calculator} />
                        </ProjectImg>

                        <ProjectContent>
                            <ProjectTitle>Calculator</ProjectTitle>
                            <ProjectText>Scientific and standard calculator. <br/> I used React, TypeScript and Styled-Components to develop it.</ProjectText>
                            <AccessProject target="_blank" href="https://lourenco-calculator.herokuapp.com/">View More</AccessProject> 
                        </ProjectContent>  

                    </Project>

                    <Project>

                        <ProjectImg>
                            <img src={timer}/>
                        </ProjectImg>
                        
                        <ProjectContent>
                            <ProjectTitle>Timer</ProjectTitle>
                            <ProjectText>Timer to assist with Pomodoro technique.<br/>I used React, TypeScript and Styled-Components to develop it.</ProjectText> 
                            <AccessProject><a target="_blank" href="https://github.com/LourencoHenri/timer-js">Access</a></AccessProject>
                        </ProjectContent>  

                    </Project>

                    <Project>

                        <ProjectImg>
                            <img src={dtmoneyImg}/>
                        </ProjectImg>
                        
                        <ProjectContent>
                            <ProjectTitle>dt money</ProjectTitle>
                            <ProjectText>We can add withdrawn and deposited amounts.<br/> I used React, TypeScript and Styled-Components to develop it.</ProjectText> 
                            <AccessProject><a target="_blank" href="https://github.com/LourencoHenri/dt-money">Access</a></AccessProject>
                        </ProjectContent>  

                    </Project>

                    <Project>

                        <ProjectImg>
                            <img src={toDo}/>
                        </ProjectImg>
                        
                        <ProjectContent>
                            <ProjectTitle>To.do</ProjectTitle>
                            <ProjectText>A "to do list". We can add, remove and tag tasks as done. <br/>I used React and CSS to develop it.</ProjectText> 
                            <AccessProject><a target="_blank" href="https://github.com/LourencoHenri/list-jsx">Access</a></AccessProject>
                        </ProjectContent>  

                    </Project>

                    <Project>

                        <ProjectImg>
                            <img src={socialNetwork}/>
                        </ProjectImg>
                        
                        <ProjectContent>
                            <ProjectTitle>Social Network</ProjectTitle>
                            <ProjectText>Comment system, similar to Facebook. <br/>I used React, TypeScript and CSS to develop it.</ProjectText> 
                            <AccessProject><a target="_blank" href="https://github.com/LourencoHenri/tsx-class">Access</a></AccessProject>
                        </ProjectContent>  

                    </Project>

                </Box> */