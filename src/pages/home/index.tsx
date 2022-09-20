import { About } from "./components/about"
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Header } from "./components/header"
import { Main } from "./components/main";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";

export function Home() {

    return (
        <>
            <Header/>
            <Main/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>        
    )
}