import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { clearInterval } from 'timers';

const skills = [
    {
        id: 0,
        title: 'Development',
        description: 'Front-End development is not only one of my skills but also my favorite hobby. Writing codes for my web design and UX design is so rewarding, so I have trained myself for years to keep my coding skill sharp. My interest in the field keeps me exploring and studying more for upcoming technologies.',
    },
    {
        id: 1,
        title: 'Design',
        description: 'I started building my career in the field as a graphic designer and web designer. I am comfortable using Photoshop, Illustrator, and Sketch and take designs from mock-up to implementation.',
    },
    {
        id: 2,
        title: 'User Experience Design',
        description: 'I believe it is important to understand both design and development as a front-end developer to create a more successful user-centered design. I have studied how to conduct research-based UX design considering usability heuristics and empathy.',
    },
    {
        id: 3,
        title: 'Project Management',
        description: 'I have experienced project management during the course of study at the University of Washington. Most of my personal/team projects had applied lean UX approaches for agile environments.',
    },
];

export default class SkillsView extends React.Component {
    constructor() {
        super();

        this.state = {
            selectedIndex: 0,
        };

        this.onSkillClicked = this.onSkillClicked.bind(this);

        this.skillInterval = setInterval(() => {
            this.setState({
                selectedIndex: (this.state.selectedIndex + 1) % 4,
            });
        }, 2000);
    }

    onSkillClicked(e) {
        window.clearInterval(this.skillInterval);
        const newSelectedId = Number.parseInt(e.currentTarget.id, 10);

        this.setState({
            selectedIndex: newSelectedId,
        });
    }

    render() {
        const showSelectedSkillDescription = () => {
            switch (this.state.selectedIndex) {
                case 0:
                    return (
                        <div>
                            {
                                skills[0].description
                            }
                        </div>
                    )
                case 1:
                    return (
                        <div>
                            {
                                skills[1].description
                            }
                        </div>
                    )
                case 2:
                    return (
                        <div>
                            {
                                skills[2].description
                            }
                        </div>
                    )
                case 3:
                    return (
                        <div>
                            {
                                skills[3].description
                            }
                        </div>
                    )
                default:
                    return (<div></div>);
            }
        }

        return (
            <section className="pb-0">
                <Container className="skills">
                    <Row>
                        <Col>
                            <h2>Skills</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>I build websites, and I love creating digital production for the web. Here is my skillset I am good at and passionate about.</p>
                        </Col>
                    </Row>
                    <Row className="mb-xs-60 mb-md-80 skills-container">
                        <Col
                            xs="12"
                            md="5"
                            className="mb-xs-80 mb-md-0 skill-left-panel">
                            {
                                showSelectedSkillDescription()
                            }
                        </Col>
                        <Col
                            xs="12"
                            md="5"
                            className="skill-right-panel">

                        </Col>
                        <Col
                            md="2"
                            className="skill-tabs">
                            <div data-component="skillsList">
                                {
                                    skills.map((skill) => {
                                        return (
                                            <Button
                                                className={skill.id === this.state.selectedIndex ? 'selected-skill-tab' : 'default-skill-tab'}
                                                id={skill.id}
                                                onClick={this.onSkillClicked}>
                                                <h3>{skill.title}</h3>
                                                {/* <p>{skill.description}</p> */}
                                            </Button>
                                        )
                                    })
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}