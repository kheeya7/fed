import React from 'react'

export default class PortfolioView extends React.Component {
    render() {
        return (
            <section className="pt-0">
                <div className="container-fluid section-container" id="portfolio">
                    <h2 className="col-sm-6 hidden">Projects</h2>
                    <div className="row pb-0">
                        <div className="col-sm-4 card-display">
                            <figure className="bg-beige h-300 h-400 mb-0">
                                <div className="card-container">
                                    {/* <img src="images/unify-card-design-simple.png" alt="project unify" className="project-card-img" /> */}
                                    <div className="overlay"><h4>Directory Browser</h4>HTML5, CSS3, JavaScript, React</div>
                                </div>
                            </figure>
                        </div>
                        <div className="col-sm-4 card-display">
                            <figure className="bg-yellow h-300 h-400 mb-0">
                                <div className="card-container">
                                    {/* <img src="images/lala-card-design.png" alt="react project project customizer" className="project-card-img" /> */}
                                    <div className="overlay"><h4>Lafolks</h4>HTML5, CSS3, JavaScript, React</div>
                                </div>
                            </figure>
                        </div>
                        <div className="col-sm-4 card-display">
                            <figure className="bg-unify h-300 h-400 mb-0">
                                <div className="card-container">
                                    <img src="images/unify-card-design-simple.png" alt="project unify" className="project-card-img" />
                                    <div className="overlay"><h4>Unify</h4>Objective-C, UX/UI Design Research</div>
                                </div>
                            </figure>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 card-display">
                            <figure className="bg-purple h-300 h-400 mb-0">
                                <div className="card-container">
                                    {/* <img src="images/ecs-card-design-simple.png" alt="project ecs" className="project-card-img" /> */}
                                    <div className="overlay"><h4>Electronic Catalog</h4>UX Design Research, Prototyping</div>
                                </div>
                            </figure>
                        </div>
                        <div className="col-sm-4 card-display">
                            <figure className="bg-blue h-300 h-400 mb-0">
                                <div className="card-container">
                                    {/* <img src="images/stronger-card-design-simple.png" alt="project stronger" className="project-card-img" /> */}
                                    <div className="overlay"><h4>#Stronger</h4>UX Design Research, Prototyping, Graphic Design</div>
                                </div>
                            </figure>
                        </div>
                        <div className="col-sm-4 card-display">
                            <figure className="bg-pink h-300 h-400 mb-0">
                                <div className="card-container">
                                    {/* <img src="images/pocket-card-design-simple.png" alt="project pocket" className="project-card-img" /> */}
                                    <div className="overlay"><h4>POCKET</h4>UX Design Research, Prototyping, HTML, CSS, JavaScript</div>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}