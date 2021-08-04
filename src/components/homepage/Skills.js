import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaPhp } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { SiPhp, SiReact } from 'react-icons/si';
import { RiReactjsLine } from 'react-icons/ri';

const Skills = () => {

    return (
        <Container className='section skills-wrap'>
            <Row className='full-width-row'>
                <Row>
                    <Col className='col-left'>
                        <h2 className='section-header'>My Expertise</h2>
                    </Col>
                </Row>
                <Row className='skills-top-row'>
                    <Col lg={4} xs={12} className='skill skill-1'>
                        <RiReactjsLine color='#ff8553' size={55} />
                        <h4 className='skill-title'>React/React Native</h4>
                        <p className='skill-description'>Developed websites in wordpress and React.</p>
                    </Col>
                    <Col lg={4} xs={12} className='skill skill-2'>
                        <DiJavascript1 color='#ff8553' size={55} />
                        <h4 className='skill-title'>JavaScript</h4>
                        <p className='skill-description'>Developed websites in wordpress and React.</p>
                    </Col>
                    <Col lg={4} xs={12} className='skill skill-3'>
                        <FaNodeJs color='#ff8553' size={55} />
                        <h4 className='skill-title'>Node.js</h4>
                        <p className='skill-description'>Developed websites in wordpress and React.</p>
                    </Col>
                </Row>
                <Row className='skills-bottom-row'>
                    <Col lg={4} xs={12} className='skill skill-4'>
                        <FaHtml5 color='#ff8553' size={55} />
                        <h4 className='skill-title'>HTML5</h4>
                        <p className='skill-description'>Developed websites in wordpress and React.</p>
                    </Col>
                    <Col lg={4} xs={12} className='skill skill-5'>
                        <FaCss3 color='#ff8553' size={55} />
                        <h4 className='skill-title'>CSS3</h4>
                        <p className='skill-description'>Developed websites in wordpress and React.</p>
                    </Col>
                    <Col lg={4} xs={12} className='skill skill-6'>
                        <SiPhp color='#ff8553' size={55} />
                        <h4 className='skill-title'>PHP</h4>
                        <p className='skill-description'>Developed websites in wordpress and React.</p>
                    </Col>
                </Row>
            </Row>
        </Container>
    );
};

export default Skills;