import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class NavView extends React.PureComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            hasScrolled: false,
        };
    }

    componentDidMount() {
        document.onscroll = () => {
            if (window.pageYOffset > 100) {
                this.setState({
                    hasScrolled: true,
                });
            } else {
                this.setState({
                    hasScrolled: false,
                });
            }
        };
    }

    render() {
        const navbarClassName = this.state.hasScrolled ? 'nav-view-container navbar-scrolled' : 'nav-view-container';
        return (
            <Navbar className={navbarClassName} fixed="top" expand="md " collapseOnSelect>
                <a
                    className="navbar-brand d-sm-inline-block font-weight-bold"
                    href="/">
                    <div className="logo">
                        <h1>Kate Sohng</h1>
                        <h2 className="navbar-text">
                            Front-End Developer | UX Designer
                            </h2>
                    </div>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#togglerNav"
                    aria-controls="togglerNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <i
                        className="fa fa-bars"
                        aria-hidden="true">
                    </i>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="togglerNav">
                    <div className="navbar-nav ml-auto font-weight-bold">
                        <Link
                            to="/"
                            className="nav-item nav-link">
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="nav-item nav-link">
                            About
                        </Link>
                        {/* <a
                            className="nav-item nav-link"
                            href="http://katesohng.com/blog"
                            target="_blank">
                            Blog
                                </a> */}
                        <a
                            className="nav-item nav-link"
                            href="mailto:kheeya7@hotmail.com">
                            Contact
                                </a>
                    </div>
                </div>
            </Navbar>
        )
    }
}