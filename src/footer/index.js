import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class FooterView extends React.PureComponent {
    render() {
        return (
            <Container fluid className="footer-view-container no-hor-padding">
                <Container className="footer-wrapper">
                    <div className="row group mb-xs-40 mb-ms-80">
                        <div className="col-12 col-sm-12 col-md-6 mb-xs-40 footer-intro">
                            <h4 className="mb-xs-20 mb-sm-40">Kate Sohng</h4>
                            <div className="row">
                                <div className="col-5 pl-0">
                                    <ul className="list-unstyled">
                                        <li>Front-end developer</li>
                                        <li>UX | UI designer</li>
                                        <li>Available April 2019</li>
                                    </ul>
                                </div>
                                <div className="col-7">
                                    <ul className="list-unstyled">
                                        <li><a href="mailto:kheeya7@hotmail.com">Get in touch ></a></li>
                                        <li><a href="katesohng-resume-2019.pdf" title="Download Resume" download="Katesohng-resume-2019">Download resume ></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-5 col-sm-5 col-md-3 col-md-2 mb-xs-40">
                            <h4 className="mb-xs-20 mb-sm-40">Menu</h4>
                            <ul className="list-unstyled">
                                <li className="list-item"><Link to="/">Home</Link></li>
                                <li className="list-item"><Link to="/about">About</Link></li>
                                <li className="list-item"><Link to="/">Portfolio</Link></li>
                                <li className="list-item"><a href="http://katesohng.com/blog" target="_blank">Blog</a></li>
                            </ul>
                        </div>
                        <div className="col-7 col-sm-7 col-md-3 col-md-2 mb-xs-40">
                            <h4 className="mb-xs-20 mb-sm-40">Social</h4>
                            <ul className="list-unstyled">
                                <li className="list-item"><a href="https://github.com/kheeya7" className="btn btn-social btn-github btn-simple" target="_blank"><i className="fa fa-github"></i> GitHub</a></li>
                                <li className="list-item"><a href="https://www.linkedin.com/in/kate-sohng/" className="btn btn-social btn-linkedin btn-simple" target="_blank"><i className="fa fa-linkedin"></i> LinkedIn</a></li>
                                <li className="list-item"><a href="https://www.instagram.com/kate.mostly/" className="btn btn-social btn-instagram btn-simple" target="_blank"><i className="fa fa-instagram"></i> Instagram </a></li>
                            </ul>
                        </div>
                    </div>
                    <small className="text-center copyright">Copyright&nbsp;&copy;&nbsp;2019 <a href="/"> Kate Sohng</a>
                    </small>
                </Container>
            </Container>
        )
    }
} 