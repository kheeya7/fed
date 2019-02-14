import React from 'react'

export default class HeaderView extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row intro">
                    <div className="col align-self-center text-center">
                        <div>
                            <img src="images/kate-logo-black-2019.png" alt="Kate sohng logo" className="kate-logo" />
                        </div>
                        <h1>Front-End Developer<br />
                            UX Designer in Seattle</h1>
                        <p>Producing responsive, accessibile rich websites for exceptional user experience</p>
                        <a href="#portfolio" className="btn btn-info text-center text-uppercase">View Portfolio</a>
                    </div>
                </div>
            </div>
        )
    }
}