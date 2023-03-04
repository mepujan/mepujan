import { About } from "../components/About";
import { Footer } from "../components/Footer";
import { Home } from "../components/Home";
import { Projects } from "../components/Projects";
import { Services } from "../components/Service";

export const HomePage = () =>{
    return (
        <>
        <Home/>
        <About/>
        <Services/>
        <Projects/>
        <Footer/>
        </>
    )
}