import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Icon01 from '../../dist/images/researcher.svg'
import Icon02 from '../../dist/images/web-designer.svg'
import Icon03 from '../../dist/images/graphic-designer.svg'

export default class ExperienceView extends React.Component {
    render() {
        return (
            <section>
                <div className="experience-container container">
                    <Row>
                        <h2 className="experience-title mt-5">
                            Experience
                        </h2>
                    </Row>
                    <Row className="mt-5">
                        <Col xs={12} sm={4} md={4} className="experience-item">
                            <div>
                                <img src={Icon01} className='experience-icon'></img>
                            </div>
                            <h3 className='experience-role mt-3'>
                                UX Researcher &amp; Internship
                            </h3>
                            <div className='experience-description'>
                                Internship as a user experience researcher at the POC lab at the University of Washington.
                            </div>
                        </Col>
                        <Col xs={12} sm={4} md={4} className="experience-item">
                            <div>
                                <img src={Icon02} className='experience-icon'></img>
                            </div>
                            <h3 className='experience-role mt-3'>
                                Web Designer
                            </h3>
                            <div className='experience-description'>
                                Web designer at an online e-commerce company, <a href="https://en.koreadepart.com/" target="_blank">AllKorea Inc.</a>
                            </div>
                        </Col>
                        <Col xs={12} sm={4} md={4} className="experience-item">
                            <div>
                                <img src={Icon03} className='experience-icon'></img>
                            </div>
                            <h3 className='experience-role mt-3'>
                                Graphic Desinger
                            </h3>
                            <div className='experience-description'>
                                Graphic designer at e-commerce companies
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        )
    }
}