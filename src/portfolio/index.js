import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

export default class PortfolioView extends React.PureComponent {
    render() {
        return (
            <section className="pt-0">
                <Container
                    fluid
                    className="portfolio-view-container"
                    id="portfolio">
                    <h2 className="col-sm-6 hidden">Projects</h2>
                    <Row className="pb-0">
                        <Col
                            sm="6"
                            lg="4"
                            className="card-display">
                            <Link to="/project-detail/unify">
                                <figure className="bg-unify h-300 h-400 mb-0">
                                    <div className="card-container">
                                        <img
                                            src="images/project-card-unify.png"
                                            alt="project unify"
                                            className="project-card-img" />
                                        <div className="overlay">
                                            <h4>Unify<br />—</h4>Objective-C, UX/UI Design
                                    </div>
                                    </div>
                                </figure>
                            </Link>
                        </Col>
                        <Col
                            sm="6"
                            lg="4"
                            className="card-display">
                            <Link to="/project-detail/ecs">
                                <figure className="bg-purple h-300 h-400 mb-0">
                                    <div className="card-container">
                                        <img
                                            src="images/project-card-ecs.png"
                                            alt="project unify"
                                            className="project-card-img" />
                                        <div className="overlay">
                                            <h4>Electronic Catalog<br />—</h4>UX Design, Prototyping
                                    </div>
                                    </div>
                                </figure>
                            </Link>
                        </Col>
                        <Col
                            sm="6"
                            lg="4"
                            className="card-display">
                            <Link to="/project-detail/stronger">
                                <figure className="bg-blue h-300 h-400 mb-0">
                                    <div className="card-container">
                                        <img
                                            src="images/project-card-stronger.png"
                                            alt="project unify"
                                            className="project-card-img" />
                                        <div className="overlay">
                                            <h4>#Stronger<br />—</h4>UX Design, Graphic Design
                                    </div>
                                    </div>
                                </figure>
                            </Link>
                        </Col>
                        <Col
                            sm="6"
                            lg="4"
                            className="card-display">
                            <Link to="/project-detail/pocket">
                                <figure className="bg-pink h-300 h-400 mb-0">
                                    <div className="card-container">
                                        <img src="images/project-card-pocket.png" alt="project unify" className="project-card-img" />
                                        <div className="overlay">
                                            <h4>POCKET<br />—</h4>UX Design, Prototyping, HTML, CSS, JavaScript
                                    </div>
                                    </div>
                                </figure>
                            </Link>
                        </Col>
                        <Col
                            sm="6"
                            lg="4"
                            className="card-display">
                            <Link to="/project-detail/yuri">
                                <figure className="bg-yellow h-300 h-400 mb-0">
                                    <div className="card-container">
                                        <img
                                            src="images/placehopder01-card-design.png"
                                            alt="project yuri"
                                            className="project-card-img" />
                                        <div className="overlay">
                                            <h4>Project Yuri<br />—</h4>
                                            Arduino, Interactive Installation, Android Artwork</div>
                                    </div>
                                </figure>
                            </Link>
                        </Col>
                        <Col
                            sm="6"
                            lg="4"
                            className="card-display">
                            <a href="http://katesohng.com/portfolio-2015/index.html" target="_blank">
                                <figure className="bg-beige h-300 h-400 mb-0">
                                    <div className="card-container">
                                        <img
                                            src="images/project-card-pocket.png"
                                            alt="project unify"
                                            className="project-card-img" />
                                        <div className="overlay"><h4>Kate Sohng Portfolio 2015<br />—</h4>
                                            <div className="project-skill">HTML, CSS, Photoshop, Illustrator</div>
                                        </div>
                                    </div>
                                </figure>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}