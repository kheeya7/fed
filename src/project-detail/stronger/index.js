import React from 'react'
import {
    Title,
    Paragraph,
    SectionTitle,
    SectionSubtitle,
    ProjectDescription
} from '../../shared-components/'
import { Row, Col, Image } from 'react-bootstrap'
import { ProjectSummary } from '../../shared-components/project-summary'

const summaryData = [
    {
        imagePath: '/images/icon-person.png',
        title: 'Role',
        description: 'Research Assistant  UI/Graphic Designer',
    },
    {
        imagePath: '/images/icon-mobile.png',
        title: 'Type',
        description: 'Internship'
    },
    {
        imagePath: '/images/icon-responsibility.png',
        title: 'Responsibilities',
        description: 'Defining problems | UI Design'
    },
    {
        imagePath: '/images/icon-clock.png',
        title: 'Duration',
        description: '10 weeks'
    }
]

export default class StrongerView extends React.Component {
    render() {
        return (
            <main className="project-detail pb-5">
                <div className="project-detail-header">
                    <Title text="#Stronger" />
                    <div className="project-description-wrapper">
                        <ProjectDescription text="A decolonial vision of futures of health and fitness." />
                    </div>
                </div>
                <div className="project-detail-body">
                    <SectionTitle text="Project Overview" />
                    <Row>
                        <Col xs={7} md={7}>
                            <Paragraph text="#Stronger is a project that pursues a “decolonial vision of futures of health and fitness” (cárdenas) for the transgender and gender non-conforming people. The world of sports we encounter everyday still creates outdated and biased images of fitness and health that do not consider a lots of people such as LGBTQI people." />
                        </Col>
                        <Col xs={5} md={5}>
                            <ProjectSummary summaryData={summaryData} />
                        </Col>
                    </Row>
                    <SectionTitle text="Finding Problems" />
                    <Row>
                        <Col xs={12} md={12}>
                            <Paragraph text="As a part of the project #Stronger, this sub-project mainly focuses on how the gender discrimination and biased images on health and fitness are taking place in wearable health applications from global scale corporations. The goal of this project is to promote public awareness of how some of the interfaces deliver discriminative messages to LGBTQI people by showing existing user interfaces and by suggesting desired interfaces." />
                        </Col>
                    </Row>
                    <SectionTitle text="Research" />
                    <Paragraph text="There are lots of wearable health applications and devices in the market. They exist to motivate users to move their bodies and have efficient workout sessions. These applications get users’ information such as their age, weight, height, and gender. These types of information are used to estimate more accurate physical data such as strides that are used to calculate moving distances and calorie burn rates." />
                    <Image src="/images/stronger-how-gender-info-used.jpg" />
                    <div className="mt-3">
                        <small>Information on how gender information is used</small>
                    </div>
                    <div className="mb-5">
                        <small>Screen captured from Fitbit website</small>
                    </div>
                    <SectionSubtitle text="Binary gender options in the profile setting" />
                    <Row>
                        <Col xs={12} md={4}>
                            <Image src="/images/wrong-ui-01.jpg" />
                        </Col>
                        <Col xs={12} md={4}>
                            <Paragraph text="These are the profile setting pages from two major companies in the wearable health application market. Users provide their information including their genders. However, there are only binary options in gender selection, which do not consider the existence of different gender identities. These are outdated and indifferent designs that deliver gender discrimination and “LGBTIQ invisibility and oppression (cárdenas)”." />
                        </Col>
                        <Col xs={12} md={4}>
                            <Image src="/images/wrong-ui-02.jpg" />
                        </Col>
                    </Row>
                    <SectionTitle text="Solutions" />
                    <Paragraph text="This subproject of #Stronger suggests user experience designs that respect all different genders and sexual identities." />
                    <SectionSubtitle text="Suggested gender options in a health application #01" />  <Row>
                        <Image src="/images/gender-option-1.jpg" />
                    </Row>
                    <SectionSubtitle text="Suggested gender options in a health application #02" />
                    <Row>
                        <Image src="/images/gender-option-2.jpg" />
                    </Row>
                    <SectionTitle text="Conclusion and Further Research" />
                    <Paragraph text="Therefore, existing applications need new algorithms that consider and respect all gender identities to pursue the design that eliminates the gender norm and discrimination. However, lack of statistical resources of LGBTIQ people makes it hard to develop new algorithms for LGBTIQ people. Therefore, the future research can pursue the way of gathering the right amount of statistical resources of LGBTIQ people to build proper algorithms for health applications." />
                    <SectionTitle text="Artifacts" />
                    <Row>
                        <Col xs={12} md={12}>
                            <small>External Links to Kate Sohng' blog</small>
                        </Col>
                        <Col xs={12} md={12}>
                            <a href="http://katesohng.net/blog/index.php/2016/10/23/sub-project-stronger/" target="_blank">✻ #Stronger poster for the UWB Undergraduate Research and Creative Practice event ✻</a>
                        </Col>
                    </Row>
                </div>
            </main>
        )
    }
}