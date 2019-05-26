import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import {
  Title,
  Paragraph,
  SectionTitle,
  SectionSubtitle,
  ProjectDescription,
} from '../../shared-components';
import { ProjectSummary } from '../../shared-components/project-summary';

const summaryData = [
  {
    imagePath: '/images/icon-person.png',
    title: 'Role',
    description: 'UX Designer | Front-end Developer',
  },
  {
    imagePath: '/images/icon-mobile.png',
    title: 'Type',
    description: 'Group project',
  },
  {
    imagePath: '/images/icon-responsibility.png',
    title: 'Responsibilities',
    description: 'Defining problems  Design Brief | Branding | Prototyping',
  },
  {
    imagePath: '/images/icon-clock.png',
    title: 'Duration',
    description: '4 weeks',
  },
];

export default class PocketView extends React.Component {
  render() {
    return (
      <main className="project-detail pb-5">
        <div className="project-detail-header">
          <Title text="POCKET" />
          <div className="project-description-wrapper">
            <ProjectDescription text="The complete solution for your account problems." />
          </div>
        </div>
        <div className="project-detail-body">
          <SectionTitle text="Project Overview" />
          <Row className="mb-0">
            <Col xs={7} md={7}>
              <Paragraph text="POCKET is an application that makes it possible to manage all of users accounts in one place. Through this team project, I found out how to define the design problem, target audience, potential solution, competitors, and documented them into a form of the design brief." />
            </Col>
            <Col xs={5} md={5}>
              <ProjectSummary summaryData={summaryData} />
            </Col>
          </Row>
          <SectionTitle text="Finding Problems" />
          <Paragraph text="The majority of people who live these days own many different accounts and passwords. In addition, it is unavoidable to create different types of passwords because of security issues. We often forget passwords at important moments that distract our productivity." />
          <SectionTitle text="Research" />
          <SectionSubtitle text="Storyboard" />
          <Row>
            <Col xs={12} md={12}>
              <Image src="/images/pocket-storyboard-01.jpg" />
            </Col>
            <Col xs={12} md={12}>
              <Image src="/images/pocket-storyboard-02.jpg" />
            </Col>
          </Row>
          <SectionSubtitle text="Survey" />
          <Row>
            <embed width="100%" height="700px" src="/assets/survey-result.pdf" type="application/pdf"></embed>
          </Row>
          <SectionSubtitle text="Word Cloud: What POCKET would like to convey to users?" />
          <Row>
            <Col>
              <Image src="/images/pocket-word-cloud.png" />
            </Col>
          </Row>

          <SectionTitle text="Solutions" />
          <Paragraph text="Organize and manage your accounts into one dashboard, and increase work flow, while minimizing time switching between different platforms." />
          <Image src="/images/pocket-userflowmap.png" />
          <SectionSubtitle text="Link and manage all your accounts in one place" />
          <Row>
            <Col xs={12} md={3}>
              <Image src="/images/account-01.png" />
            </Col>
            <Col xs={12} md={9} className="vertical-align pl-5">
              <span>Select popular apps from the list, or use the search bar to find others. Next, sign in to each app through POCKET. You can now access all your linked accounts at once. No more forgetting passwords, mixing up user names, or having to log in at the start of each new session. POCKET will store all your current credentials and give you access to everything you need in one easy-to-use app.</span>
            </Col>
          </Row>
          <SectionSubtitle text="A Place for Everything and Everything in Its Place" />
          <Row>
            <Col xs={12} md={3}>
              <Image src="/images/account-02.png" />
            </Col>
            <Col xs={12} md={9} className="vertical-align pl-5">
              <span>POCKET will organize your accounts into easily customizable folders. Use the default folders, or create your own to group accounts into categories like work or school. Easily view and interact with all the apps in a folder at once, and you can even keep the same account in multiple folders. Customize your folders view by deleting ones you don’t need, or tap and hold to drag and rearrange them however you like.</span>
            </Col>
          </Row>
          <SectionSubtitle text="All your emails in one place" />
          <Row>
            <Col xs={12} md={3}>
              <Image src="/images/account-03.png" />
            </Col>
            <Col xs={12} md={9} className="vertical-align pl-5">
              <span>POCKET will organize your accounts into easily customizable folders. Use the default folders, or create your own to group accounts into categories like work or school. Easily view and interact with all the apps in a folder at once, and you can even keep the same account in multiple folders. Customize your folders view by deleting ones you don’t need, or tap and hold to drag and rearrange them however you like.</span>
            </Col>
          </Row>
          <SectionTitle text="Artifacts" />
          <Row>
            <Col xs={12} md={12}>
              <small>External Links to the POCKET presentation website</small>
            </Col>
            <Col xs={12} md={12}>
              <a href="http://www.katesohng.com/pocketapp/" target="_blank">✻ POCKET Presentation Website ✻</a>
            </Col>
          </Row>
        </div>
      </main >
    );
  }
}
