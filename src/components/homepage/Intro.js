import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profilePic from '../../assets/images/profile-pic.jpg';


const Intro = () => {

    return (
        <Container className='section hero'>
            <Row className='full-width-row hero-main-row'>
                <Col lg={4} xs={12} className='col-center profile-pic-col'>
                    <div className='profile-pic-wrap'>
                        <div className='profile-pic'></div>
                    </div>
                </Col>
                <Col className='hero-info'>
                    <h1 className='h1-light hero-h1'>Jason Barrera</h1>
                    <p className='paragraph-light hero-p'>Software Developer</p>
                    <Row className='contact-info'>
                        <Col className='phone' lg={6}>
                            <p>Phone</p>
                            <h3>+1(312)909-7515</h3>
                        </Col>
                        <Col className='email' lg={6}>
                            <p>Email</p>
                            <h3>jason.barrera.94@gmail.com</h3>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Intro;