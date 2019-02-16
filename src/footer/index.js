import React from 'react'
import { Link } from 'react-router-dom'

export default class FooterView extends React.Component {
    render() {
        return (
            <div className="container-fluid footer no-hor-padding">
                <div className="container footer-container">
                    <div className="row group mb-xs-40 mb-ms-80">
                        <div className="col-12 col-sm-12 col-md-6 mb-xs-40 footer-intro">
                            <h4 className="mb-xs-20 mb-sm-40">Kate Sohng</h4>
                            <div className="row">
                                <div className="col-5">
                                    <ul className="list-unstyled">
                                        <li> Image placeholder </li>
                                        <li> text placeholder </li>
                                    </ul>
                                </div>
                                <div className="col-7">
                                    <ul className="list-unstyled">
                                        <li>Front-end developer</li>
                                        <li>Available February 2019</li>
                                        <li><a href="mailto:kheeya7@hotmail.com">Get in touch ></a></li>
                                        <li>Download resume ></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-3 col-md-2 mb-xs-40">
                            <h4 className="mb-xs-20 mb-sm-40">Menu</h4>
                            <ul className="list-unstyled">
                                <li className="list-item"><Link to="/">Home</Link></li>
                                <li className="list-item"><Link to="/about">About</Link></li>
                                <li className="list-item"><Link to="/">Portfolio</Link></li>
                                <li className="list-item"><a href="http://katesohng.com/blog" target="_blank">Blog</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-6 col-md-3 col-md-2 mb-xs-40">
                            <h4 className="mb-xs-20 mb-sm-40">Social</h4>
                            <ul className="list-unstyled">
                                <li className="list-item"><a href="https://github.com/kheeya7" className="btn btn-social btn-github btn-simple" target="_blank"><i className="fa fa-github"></i> GitHub</a></li>
                                <li className="list-item"><a href="https://www.linkedin.com/in/kate-sohng/" className="btn btn-social btn-linkedin btn-simple" target="_blank"><i className="fa fa-linkedin"></i> LinkedIn</a></li>
                                <li className="list-item"><a href="https://www.instagram.com/kate.mostly/" className="btn btn-social btn-instagram btn-simple" target="_blank"><i className="fa fa-instagram"></i> Instagram </a></li>
                            </ul>
                        </div>
                    </div>
                    <small className="text-center copyright">Copyright&copy;2019 <a href="/"> Kate Sohng</a>
                    </small>
                </div>
            </div>
        )
    }
}