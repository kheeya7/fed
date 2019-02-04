import React from 'react'

export default class SkillsView extends React.Component {
    render() {
        return (
            <section>
                <div className="container skills">
                    <h2 className="row col">Skills</h2>
                    <div className="row mb-xs-60 mb-md-80">
                        <div className="col-xs-12 col-md-6 mb-xs-80 mb-md-0">
                            <p>Nice things, persuasive paragraph about my skills Imperdiet proin fermentum leo vel orci
                              portanonpulvinar</p>
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <div className="row" data-component="skillsList">
                                <div className="col-xs-12 col-sm-6 col-md-12 mb-xs-20 mb-md-40">
                                    <h3>Development</h3>
                                    <p> Imperdiet proin fermentum leo vel orci porta non pulvinar. Congue quisque egestas diam in
                                      arcucursus</p>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-12 mb-xs-20 mb-md-40">
                                    <h3>User Experience Design</h3>
                                    <p> Imperdiet proin fermentum leo vel orci porta non pulvinar. Congue quisque egestas diam in
                                      arcucursus.</p>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-12 mb-xs-20 mb-md-40">
                                    <h3>Project Management</h3>
                                    <p> Imperdiet proin fermentum leo vel orci porta non pulvinar. Congue quisque egestas diam in
                                      arcucursus.</p>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-12 mb-xs-20 mb-md-40">
                                    <h3>Organization</h3>
                                    <p> Imperdiet proin fermentum leo vel orci porta non pulvinar. Congue quisque egestas diam in
                                      arcucursus</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}