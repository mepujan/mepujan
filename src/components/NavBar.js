import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import pujan from '../images/pujan1.JPEG';

export const NavBar = () => {
    return (
        <Navbar>
            <Container fluid>
            <Navbar.Brand className='text-white'>
            <img
              alt="pujan logo"
              src={pujan}
              width="30"
              height="30"
              className="rounded-circle align-top ms-4"
            />{'   '}
            Pujan Gautam
          </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

