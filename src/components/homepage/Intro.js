import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profilePic from '../../assets/images/profile-pic.jpg';


const Intro = () => {

    return (
        <Container className='section intro'>
            <Row className='row-center'>
                <Col className='col-center'>
                    <img className='profile-pic' src={profilePic} alt='Profile Picture' />
                    <h1 className='jb-h1-light'>Jason Barrera</h1>
                    <p className='jb-paragraph-light'>Software Developer</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Intro;