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
                                <img src="images/project-card-pocket.png" alt="project unify" className="project-card-img" />
                                <div className="card-container">
                                    <div className="overlay"><h4>Directory Browser<br />—</h4>
                                        <div className="project-skill">HTML5, CSS3, JavaScript, React</div></div>
                                </div>
                            </figure>
                        </div>
                        <div className="col-sm-6 col-lg-4 card-display">
                            <figure className="bg-yellow h-300 h-400 mb-0">
                                <img src="images/placehopder01-card-design.png" alt="project unify" className="project-card-img" />
                                <div className="card-container">
                                    <div className="overlay"><h4>Lafolks<br />—</h4>HTML5, CSS3, JavaScript, React</div>
                                </div>
                            </figure>
                        </div>
                        <Link to="/project-detail/unify" className="col-sm-6 col-lg-4 card-display">
                            <figure className="bg-unify h-300 h-400 mb-0">
                                <div className="card-container">
                                    <img src="images/project-card-unify.png" alt="project unify" className="project-card-img" />
                                    <div className="overlay"><h4>Unify<br />—</h4>Objective-C, UX/UI Design </div>
                                </div>
                            </figure>
                        </Link>
                        <Link to="/project-detail/ecs" className="col-sm-6 col-lg-4 card-display">
                            <figure className="bg-purple h-300 h-400 mb-0">
                                <div className="card-container">
                                    <img src="images/project-card-ecs.png" alt="project unify" className="project-card-img" />
                                    <div className="overlay"><h4>Electronic Catalog<br />—</h4>UX Design, Prototyping</div>
                                </div>
                            </figure>
                        </Link>
                        <Link to="/project-detail/stronger" className="col-sm-6 col-lg-4 card-display">
                            <figure className="bg-blue h-300 h-400 mb-0">
                                <div className="card-container">
                                    <img src="images/project-card-stronger.png" alt="project unify" className="project-card-img" />
                                    <div className="overlay"><h4>#Stronger<br />—</h4>UX Design, Graphic Design</div>
                                </div>
                            </figure>
                        </Link>
                        <Link to="/project-detail/pocket" className="col-sm-6 col-lg-4 card-display">
                            <figure className="bg-pink h-300 h-400 mb-0">
                                <div className="card-container">
                                    <img src="images/project-card-pocket.png" alt="project unify" className="project-card-img" />
                                    <div className="overlay"><h4>POCKET<br />—</h4>UX Design, Prototyping, HTML, CSS, JavaScript</div>
                                </div>
                            </figure>
                        </Link>
                    </div>
                </div>
            </section>
        )
    }
}