import React from 'react'
import { Link } from 'react-router-dom'

export default class PortfolioView extends React.Component {
    render() {
        return (
            <section className="pt-0">
                <div className="container-fluid section-container" id="portfolio">
                    <h2 className="col-sm-6 hidden">Projects</h2>
                    <div className="row pb-0">
                        <div className="col-sm-6 col-lg-4 card-display">
                            <figure className="bg-beige h-300 h-400 mb-0">
                                <div className="card-container">
                                    <div className="overlay"><h4>Directory Browser</h4>HTML5, CSS3, JavaScript, React</div>
                                </div>
                            </figure>
                        </div>
                        <div className="col-sm-6 col-lg-4 card-display">
                            <figure className="bg-yellow h-300 h-400 mb-0">
                                <div className="card-container">
                                    <div className="overlay"><h4>Lafolks</h4>HTML5, CSS3, JavaScript, React</div>
                                </div>
                            </figure>
                        </div>
                        <Link to="/project-detail/unify" className="col-sm-6 col-lg-4 card-display">
                            <figure className="bg-unify h-300 h-400 mb-0">
                                <div className="card-container">
                                    <img src="images/unify-card-design-simple.png" alt="project unify" className="project-card-img" />
                                    <div className="overlay"><h4>Unify</h4>Objective-C, UX/UI Design </div>
                                </div>
                            </figure>
                        </Link>
                        <Link to="/project-detail/ecs" className="col-sm-6 col-lg-4 card-display">
                            <figure className="bg-purple h-300 h-400 mb-0">
                                <div className="card-container">
                                    <div className="overlay"><h4>Electronic Catalog</h4>UX Design, Prototyping</div>
                                </div>
                            </figure>
                        </Link>
                        <Link to="/project-detail/stronger" className="col-sm-6 col-lg-4 card-display">
                            <figure className="bg-blue h-300 h-400 mb-0">
                                <div className="card-container">
                                    <div className="overlay"><h4>#Stronger</h4>UX Design, Prototyping, Graphic Design</div>
                                </div>
                            </figure>
                        </Link>
                        <Link to="/project-detail/pocket" className="col-sm-6 col-lg-4 card-display">
                            <figure className="bg-pink h-300 h-400 mb-0">
                                <div className="card-container">
                                    <div className="overlay"><h4>POCKET</h4>UX Design, Prototyping, HTML, CSS, JavaScript</div>
                                </div>
                            </figure>
                        </Link>
                    </div>
                </div>
            </section>
        )
    }
}