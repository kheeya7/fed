import React from 'react'
import Iframe from 'react-iframe'
import {
    Title,
    Paragraph,
    SectionTitle,
    SectionSubtitle,
    ProjectDescription
} from '../../shared-components/'
import { Row, Col, Image } from 'react-bootstrap'
import { UnifyHeaderImage } from './header-image'
import { ProjectSummary } from '../../shared-components/project-summary'
import ContentCarousel from '../../shared-components/content-carousel'

const summaryData = [
    {
        imagePath: '/images/icon-person.png',
        title: 'Role',
        description: 'UX Researcher | UI Designer',
    },
    {
        imagePath: '/images/icon-mobile.png',
        title: 'Type',
        description: 'iOS Mobile App | Group Project  '
    },
    {
        imagePath: '/images/icon-responsibility.png',
        title: 'Responsibilities',
        description: 'Defining users & problems UI Design'
    },
    {
        imagePath: '/images/icon-clock.png',
        title: 'Duration',
        description: '10 weeks'
    }
]


export default class UnifyView extends React.Component {
    render() {
        return (
            <main className="project-detail">
                <div className="project-detail-header">
                    <Title text="Unify" />
                    <div className="project-description-wrapper">
                        <ProjectDescription text="Interests-sharing network for everyone" />
                        <ProjectDescription text="who wants to make feminist innovation and technology" />
                    </div>
                    <UnifyHeaderImage />
                </div>
                <div className="project-detail-body">
                    <SectionTitle text="Project Overview" />
                    <Row>
                        <Col xs={7} md={7}>
                            <Paragraph text="Unify team presents the high-fidelity prototype of the iOS application for FemTechNet members and people who want to share information about women in/and technology. This annotated portfolio shows the process of the application design through research from the ethnography interview, defining problems, research through design, and viable solutions with different types of prototypes." />
                        </Col>
                        <Col xs={5} md={5}>
                            <ProjectSummary summaryData={summaryData} />
                        </Col>
                    </Row>
                    <SectionTitle text="Finding Problems" />
                    <Row>
                        <Col xs={7} md={7}>
                            <Paragraph text="The design research started with ethnographic interviews with stakeholders from FemTechNet. Based on the information from the interviews, our team narrowed down the main problems into two issues: having too many different communication platforms and difficulties of maintaining the long-term involvement of students in the network." />
                        </Col>
                        <Col xs={5} md={5}>
                            <Image src="/images/unify-cloud.jpg" />
                        </Col>
                    </Row>
                    <SectionTitle text="Research" />
                    <SectionSubtitle text="Hunt Statement" />
                    <Paragraph text="We are going to figure out how all the communities of FemTechNet communicate with each other so that we can identify the key factors that enhance or hinder the interaction within communities." />
                    <ContentCarousel />
                    <SectionTitle text="Solutions" />
                    <Paragraph text="Unify team suggests two types of solutions as the team have developed both approaches to have more chances for the ideal solution." />            <SectionSubtitle text="Integrating Communication Services to Reduce the Complexity" />
                    <Row>
                        <Col xs={6} md={6}>
                            <Image src="/images/unify-wireframe-01.png" />
                        </Col>
                        <Col xs={6} md={6}>
                            <Paragraph text="With this solution, the team has tried to solve one of the main problems that are related to organizational internal tasks. By integrating all the communication platforms, the stakeholder's using, the design tried to resolve the difficulties and complexity of communication." />
                        </Col>
                    </Row>
                    <SectionSubtitle text="Creating Connections without Having the Central Hub (Decentralized Network)" />
                    <Row>
                        <Col xs={12} md={7}>
                            <Paragraph text="This prototype has a priority on making stronger networks among members by matching users' similar interests and profiles. So that each member and group have their own networks to other members and groups without passing the center hub of the community." />
                            <Paragraph text="The key features of using these data are in the community section. After the user signs up for the application, they will see these suggestions that are sorted by their interests and profiles. Once they join in several communities, now they can see the list of their groups. Also, they can see the list of friends on the friend’s tab. Not only that, they can also see a list of people who have similar interests. They can initiate the chat group (or channel) and can invite these people who have similar interests and passions on the topic."
                            />
                        </Col>
                        <Col xs={12} md={5}>
                            <Iframe url="https://invis.io/BMENJHG5C"
                                width="438"
                                height="870"
                                position="relative"
                                styles={{ transform: "scale(0.65)", transformOrigin: "top center" }}
                            />
                        </Col>
                    </Row>
                    <SectionTitle text="Artifacts" />
                    <Row>
                        <Col xs={12} md={12}>
                            <small>External Links to Kate Sohng' blog</small>
                        </Col>
                        <Col xs={12} md={12}>
                            <a href="http://katesohng.com/blog/index.php/2017/10/30/prfaq/" target="_blank">✻ PRFAQ ✻</a>
                        </Col>
                        <Col xs={12} md={12}>
                            <a href="http://katesohng.com/blog/index.php/2017/11/21/data-and-affordances/" target="_blank">✻ Data and Affordance ✻</a>
                        </Col>
                    </Row>
                </div>
            </main>
        )
    }
}

