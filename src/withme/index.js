import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class WithmeView extends React.PureComponent {
    render() {
        return (
            <section className="withme-view-container">
                <div className="filter">
                    <Container fluid className="withme">
                        <div className="withme-wrapper">
                            <h2>Do you want to work with me?</h2>
                            <div className="line-separator">♦</div>
                            <p>I am looking for a UX/UI designer and developer position.</p>
                            <p>Please contact me if you are looking for a person </p>
                            <p> who practiced human-centered design and front-end development skills.</p>
                            <a href="mailto:kheeya7@hotmail.com" className="btn btn-info text-center text-uppercase">Contact Kate</a>
                        </div>
                    </Container>
                </div>
            </section>
        )
    }
}