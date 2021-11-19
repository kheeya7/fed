import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Scrollchor } from 'react-scrollchor'

export default class HeaderView extends React.PureComponent {
    render() {
        return (
            <Container fluid className="header-view-container">
                <Row className="intro">
                    <Col className="align-self-center text-center">
                        <img
                            src="images/kate-logo-black-2019.svg"
                            alt="Kate sohng logo"
                            className="kate-logo" />
                        <h1>Front-End Developer<br />
                            UX Designer in Seattle</h1>
                        <p>Producing responsive, accessibile rich websites for exceptional user experience</p>
                        <Scrollchor
                            to="#portfolio"
                            className="btn btn-info text-center text-uppercase">
                            View Projects ˅
                        </Scrollchor>
                    </Col>
                </Row>
            </Container>
        )
    }
}