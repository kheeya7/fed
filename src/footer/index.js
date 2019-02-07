import React from 'react'

export default class FooterView extends React.Component {
    render() {
        return (
            <div className="container-fluid footer no-hor-padding">
                <div className="bg-main pad-5">
                    <h2 className="text-center">About Kate
            <i className="fa fa fa-angle-right"></i>
                    </h2>
                </div>
                <div className="container footer-container">
                    <div className="row group mb-xs-40 mb-ms-80">
                        <div className="col-xs-12 col-md-5 mb-xs-40">
                            <h4 className="mb-xs-20 mb-sm-40">Kate Sohng</h4>
                            <div className="row">
                                <div className="col-xs-12 col-sm-6">
                                    <ul className="list-unstyled">
                                        <li> Image placeholder </li>
                                        <li> text placeholder </li>
                                    </ul>
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                    <ul className="list-unstyled">
                                        <li>Front-end developer</li>
                                        <li>Available January 2019</li>
                                        <li>Get in touch</li>
                                        <li>Download resume ></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-2 mb-xs-40">
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-2 mb-xs-40">
                            <h4 className="mb-xs-20 mb-sm-40">Menu</h4>
                            <ul className="list-unstyled">
                                <li className="list-item">About</li>
                                <li className="list-item">Project</li>
                                <li className="list-item">Blog</li>
                            </ul>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-2 mb-xs-40">
                            <h4 className="mb-xs-20 mb-sm-40">Social</h4>
                            <ul className="list-unstyled">
                                <li className="list-item">About</li>
                                <li className="list-item">Project</li>
                                <li className="list-item">Blog</li>
                            </ul>
                        </div>
                    </div>
                    <small className="text-center copyright">Copyright&copy;2019
            <a href="/"> Kate Sohng</a>
                    </small>
                </div>
            </div>
        )
    }
}