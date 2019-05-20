import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class ExperienceView extends React.PureComponent {
  render() {
    return (
            <section>
                <Container className="experience-view-container">
                    <Row>
                        <h2 className="experience-title mt-5">
                            Experience
                        </h2>
                    </Row>
                    <Row className="mt-5">
                        <Col
                            xs={12}
                            sm={4}
                            md={4}
                            className="experience-item">
                            <img
                                src='./images/researcher.svg'
                                className='experience-icon'
                                alt="researcher icon" />
                            <h3 className='experience-role mt-3'>
                                UX Researcher &amp; Internship
                            </h3>
                            <div className='experience-description'>
                                Internship as a user experience researcher at the POC lab at the University of Washington.
                            </div>
                        </Col>
                        <Col
                            xs={12}
                            sm={4}
                            md={4}
                            className="experience-item">
                            <img
                                src='./images/web-designer.svg'
                                className='experience-icon'
                                alt="web designer icon" />
                            <h3 className='experience-role mt-3'>
                                Web Designer
                            </h3>
                            <div className='experience-description'>
                                Web designer at an online e-commerce company,
                                <a
                                    href="https://en.koreadepart.com/"
                                    target="_blank">
                                    &nbsp;AllKorea Inc.
                                </a>
                            </div>
                        </Col>
                        <Col
                            xs={12}
                            sm={4}
                            md={4}
                            className="experience-item">
                            <img
                                src='./images/graphic-designer.svg'
                                className='experience-icon'
                                alt="graphic designer icon" />
                            <h3 className='experience-role mt-3'>
                                Graphic Desinger
                            </h3>
                            <div className='experience-description'>
                                Graphic designer at e-commerce companies
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
    );
  }
}
