import React from 'react'

export default class NavView extends React.Component {
    render() {
        return (
            <div className="container" role="banner">
                <nav className="navbar bg-bright navbar-bright navbar-expand-md no-hor-padding">
                    <a className="navbar-brand d-sm-inline-block font-weight-bold" href="/">
                        Kate Sohng
                    </a>
                    <small className="navbar-text d-none d-xl-inline-block">
                        Front-End Developer | UX Designer
                    </small>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#togglerNav" aria-controls="togglerNav"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="togglerNav">
                        <div className="navbar-nav ml-auto font-weight-bold">
                            <a className="nav-item nav-link" onClick={() => this.props.onSelectedNavClicked('about')}>About</a>
                            <a className="nav-item nav-link" onClick={() => this.props.onSelectedNavClicked('projects')}>Portfolio</a>
                            <a className="nav-item nav-link" href="http://katesohng.com/blog" target="_blank">Blog</a>
                            <a className="nav-item nav-link" href="#">Contact</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}