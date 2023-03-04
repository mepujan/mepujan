// import pujanImg from '../images/pujan_gautam.jpg';
import { NavBar } from "../components/NavBar";
import {FcGoogle} from 'react-icons/fc';
import {FaGithub,FaFacebook,FaLinkedin} from 'react-icons/fa';
import pujan from '../images/pujan_comp.JPG';

export const Home = () => {
    return (
        <>
        <div className='container-fluid'>
        <NavBar/>
        <div className='row'>
        <div className='col-md-8'>
            <div className="p-3 p-md-5 m-md-3 text-center">
                <div class="col-md-5 mx-auto my-5">
                    <h1 class="display-4 fw-normal text-white mb-5">I'm FullStack Web Developer</h1>
                    <a href='mailto:mepujan10@gmail.com'> <FcGoogle size={20}/></a>
                    <a href='https://github.com/' rel="noreferrer" target="_blank"><FaGithub size={20} className='text-white ms-3'/></a>
                    
                    <a href="https://www.facebook.com/mepujan10/" rel="noreferrer" target="_blank"><FaFacebook size={20} className='text-primary ms-3'/></a>
                    
                    <a href="https://www.linkedin.com/in/pujangautam/" rel="noreferrer" target="_blank"><FaLinkedin size={20} className='text-white ms-3'/></a>
                </div>
            </div>
        </div>
        <div className='col-md-4 mt-2 d-none d-md-block'>
        <img src={pujan} className="img-fluid" alt='banner'/>
        </div>
        </div>
        </div>
        </>
    )
}