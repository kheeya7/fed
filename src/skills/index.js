import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class SkillsView extends React.PureComponent {
  render() {
    return (
      <section className="pb-0">
        <Container className="skills">
          <Row>
            <Col>
              <h2>Skills</h2>
            </Col>
          </Row>
          <Row className="mb-xs-60 mb-md-80">
            <Col
              xs="12"
              md="6"
              className="mb-xs-80 mb-md-0"
            >
              <p>
                I build websites, and I love creating digital production for the web. Here is my skillset I am good at and passionate about.
              </p>
            </Col>
            <Col
              xs="12"
              md="6"
            >
              <Row data-component="skillsList">
                <Col
                  xs="12"
                  sm="6"
                  md="12"
                  className="mb-xs-20 mb-md-40"
                >
                  <h3>
                    Development
                  </h3>
                  <p>
                    Front-End development is not only one of my skills but also my favorite hobby. Writing codes for my web design and UX design is so rewarding, so I have trained myself for years to keep my coding skill sharp. My interest in the field keeps me exploring and studying more for upcoming technologies.
                  </p>
                </Col>
                <Col
                  xs="12"
                  sm="6"
                  md="12"
                  className="mb-xs-20 mb-md-40"
                >
                  <h3>
                    Design</h3>
                  <p>
                    I started building my career in the field as a graphic designer and web designer. I am comfortable using Photoshop, Illustrator, and Sketch and take designs from mock-up to implementation.
                  </p>
                </Col>
                <Col
                  xs="12"
                  sm="6"
                  md="12"
                  className="mb-xs-20 mb-md-40"
                >
                  <h3>
                    User Experience Design
                  </h3>
                  <p>
                    I believe it is important to understand both design and development as a front-end developer to create a more successful user-centered design. I have studied how to conduct research-based UX design considering usability heuristics and empathy.
                  </p>
                </Col>
                <Col
                  xs="12"
                  sm="6"
                  md="12"
                  className="mb-xs-20 mb-md-40"
                >
                  <h3>
                    Project Management</h3>
                  <p>
                    I have experienced project management during the course of study at the University of Washington. Most of my personal/team projects had applied lean UX approaches for agile environments.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
