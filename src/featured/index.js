import React from 'react'

export default class FeaturedView extends React.Component {
    render() {
        return (
            <section>
                <div className="container section-container">
                    <div className="row">
                        <h2 className="col-sm-6" id="portfolio">Featured Project</h2>
                        <p className="col-sm-6 text-right">
                            <a href="#">
                                <small className="font-weight-bold">View All</small>
                            </a>
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 card-display">
                            <figure className="bg-unify h-300 h-400">
                                <div className="card-container">
                                    <img src="images/unify-card-design.png" alt="project unify" className="project-card" />
                                    <div className="overlay">Objective-C, UX/UI Design Research</div>
                                </div>
                            </figure>
                        </div>
                        <div className="col-sm-6 card-display">
                            <figure className="bg-blue h-300 h-400">
                                <div className="card-container">
                                    <img src="images/stronger-card-design.png" alt="project stronger" className="project-card" />
                                    <div className="overlay">UX Design Research, Prototyping, Graphic Design</div>
                                </div>
                            </figure>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 card-display">
                            <figure className="bg-pink h-300 h-400">
                                <div className="card-container">
                                    <img src="images/pocket-card-design.png" alt="project pocket" className="project-card" />
                                    <div className="overlay">UX Design Research, Prototyping, HTML, CSS, JavaScript</div>
                                </div>
                            </figure>
                        </div>
                        <div className="col-sm-6 card-display">
                            <figure className="bg-purple h-300 h-400">
                                <div className="card-container">
                                    <img src="images/ecs-card-design.png" alt="project ecs" className="project-card" />
                                    <div className="overlay">UX Design Research, Prototyping</div>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}