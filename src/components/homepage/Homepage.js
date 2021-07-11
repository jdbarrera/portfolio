import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Projects from './Projects';
import Intro from './Intro';


const Homepage = () => {

    return (
        <Container>
            <Intro />
            <Projects />
        </Container>
    );
};

export default Homepage;