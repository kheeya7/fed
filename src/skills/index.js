import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { clearInterval } from 'timers';

const skills = [
    {
        id: 0,
        title: 'Development',
        description: 'Front-End development is not only one of my skills but also my favorite hobby. Writing codes for my web design and UX design is so rewarding, so I have trained myself for years to keep my coding skill sharp. My interest in the field keeps me exploring and studying more for upcoming technologies.',
        image: './images/card-unify-ios.png',
        relatedProjects: [
            {
                name: 'Unify |',
                url: '/project-detail/unify',
            },
            {
                name: 'Pocket',
                url: '/project-detail/pocket',
            }
        ]
    },
    {
        id: 1,
        title: 'Graphic Design',
        description: 'I started building my career in the field as a graphic designer and web designer. I am comfortable using Photoshop, Illustrator, and Sketch and take designs from mock-up to implementation.',
        image: './images/card-stronger.png',
        relatedProjects: [
            {
                name: '#stronger',
                url: '/project-detail/stronger',
            },
        ],
    },
    {
        id: 2,
        title: 'UX | UI Design',
        description: 'I believe it is important to understand both design and development as a front-end developer to create a more successful user-centered design. I have studied how to conduct research-based UX design considering usability heuristics and empathy.',
        image: './images/card-yuri.png',
        relatedProjects: [
            {
                name: 'Pocket |',
                url: '/project-detail/pocket',
            },
            {
                name: 'Project Yuri |',
                url: '/project-detail/yuri',
            },
            {
                name: 'Unify |',
                url: '/project-detail/unify',
            },
            {
                name: 'ECS',
                url: '/project-detail/ecs',
            },
        ],
    },
    {
        id: 3,
        title: 'Project Management',
        description: 'I have experienced project management during the course of study at the University of Washington. Most of my personal/team projects had applied lean UX approaches for agile environments.',
        image: './images/card-ecs.png',
        relatedProjects: [
            {
                name: 'Unify |',
                url: '/project-detail/unify',
            },
            {
                name: 'ECS',
                url: '/project-detail/ecs',
            },
        ],
    },
]

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
        }, 4000);
    }


    onSkillClicked(e) {
        window.clearInterval(this.skillInterval);
        const newSelectedID = Number.parseInt(e.currentTarget.id, 10);
        this.setState({
            selectedIndex: newSelectedID,
        });
    }

    render() {
        const showSelectedSkillDescription = () => {
            return (
                <div>
                    <h3>
                        {
                            skills[this.state.selectedIndex].title
                        }
                    </h3>
                    <div className="skill-description">
                        {
                            skills[this.state.selectedIndex].description
                        }
                    </div>
                    <div className="project-link-wrap">
                        {
                            skills[this.state.selectedIndex].relatedProjects.map((relatedProject) => {
                                return (
                                    <Link
                                        key={relatedProject.name}
                                        className="project-link"
                                        to={relatedProject.url}
                                    >
                                        {
                                            relatedProject.name
                                        }
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            )
        }
        const showSelectedSkillImage = () => {
            switch (this.state.selectedIndex) {
                case 0:
                    return (
                        <div>
                            <img src={skills[0].image} />
                        </div>

                    )
                case 1:
                    return (
                        <div>
                            <img src={skills[1].image} />
                        </div>
                    )
                case 2:
                    return (
                        <div>
                            <img src={skills[2].image} />
                        </div>
                    )
                case 3:
                    return (
                        <div>
                            <img src={skills[3].image} />
                        </div>
                    )
            }
        }

        return (
            <section className="pb-0">
                <Container className="skills section-card-container">
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
                            xl="2"
                            sm="12"
                            md="12"
                            className="skill-tabs-hor">
                            <div data-data-component="skillsList">
                                {
                                    skills.map((skill) => {
                                        return (
                                            <Button
                                                key={skill.id}
                                                id={skill.id}
                                                className={skill.id === this.state.selectedIndex ? 'selected-Skill' : ''}
                                                onClick={this.onSkillClicked} >
                                                <h3>{skill.title}</h3>
                                            </Button>
                                        )
                                    })
                                }
                            </div>
                        </Col>
                        <Col
                            xs="12"
                            sm="12"
                            md="6"
                            l=""
                            xl="5"
                            className="mb-xs-80 mb-md-0 skill-left-panel">
                            <div>
                                {
                                    showSelectedSkillDescription()
                                }
                            </div>
                            <div className="project-icons">

                            </div>
                        </Col>
                        <Col
                            xs="12"
                            sm="12"
                            md="6"
                            xl="5"
                            className="skill-right-panel">
                            {
                                showSelectedSkillImage()
                            }

                        </Col>
                        <Col
                            xl="2"
                            sm="12"
                            md="12"
                            className="skill-tabs-ver">
                            <div data-data-component="skillsList">
                                {
                                    skills.map((skill) => {
                                        return (
                                            <Button
                                                id={skill.id}
                                                className={skill.id === this.state.selectedIndex ? 'selected-Skill' : ''}
                                                onClick={this.onSkillClicked} >
                                                <h3>{skill.title}</h3>
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