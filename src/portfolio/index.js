import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import projectData from './project-data.json';

export default class PortfolioView extends React.PureComponent {
  render() {
    return (
            <section className="pt-0">
                <Container
                    fluid
                    className="portfolio-view-container"
                    id="portfolio">
                    <h2 className="col-sm-6 hidden">Projects</h2>
                    <Row className="pb-0">
                        {
                            projectData.map((data) => {
                              const insideLink = () => (
                                    <div>
                                        <figure className={`${data.backgroundClass} h-300 h-400 mb-0`}>
                                            <div className="card-container">
                                                <img
                                                    src={data.imageUrl}
                                                    alt={data.title}
                                                    className="project-card-img" />
                                                <div className="overlay">
                                                    <h4>{data.title}<br />—</h4>
                                                    {data.role}
                                                </div>
                                            </div>
                                        </figure>
                                        <div className="xs-display">
                                            <h4>{data.title}<br /></h4>
                                            {data.role}
                                        </div>
                                    </div>
                              );


                              return (
                                    <Col
                                        key={data.id}
                                        md="6"
                                        lg="4"
                                        className="card-display">
                                        {
                                            data.linkTo
                                            && <Link to={data.linkTo}>
                                                {insideLink()}
                                            </Link>
                                        }
                                        {
                                            data.externalLink
                                            && <a href={data.externalLink} target="_blank">
                                                {insideLink()}
                                            </a>
                                        }
                                    </Col>
                              );
                            })
                        }
                    </Row>
                </Container>
            </section>
    );
  }
}
