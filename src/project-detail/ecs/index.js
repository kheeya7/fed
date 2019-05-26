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
import EcsCarousel from './ecs-carousel';

const summaryData = [
  {
    imagePath: '/images/icon-person.png',
    title: 'Role',
    description: 'UX Researcher | UI Designer',
  },
  {
    imagePath: '/images/icon-mobile.png',
    title: 'Type',
    description: 'Empathic Design Approach | Group Project  ',
  },
  {
    imagePath: '/images/icon-responsibility.png',
    title: 'Responsibilities',
    description: 'Defining users & problems | UI Design | Research through Design',
  },
  {
    imagePath: '/images/icon-clock.png',
    title: 'Duration',
    description: '10 weeks',
  },
];

export default class EcsView extends React.Component {
  render() {
    return (
      <main className="project-detail pb-5">
        <div className="project-detail-header">
          <Title text="ECS" />
          <div className="project-description-wrapper">
            <ProjectDescription text="Electronic Catalog System for the UW IT Department" />
          </div>
        </div>
        <div className="project-detail-body">
          <SectionTitle text="Project Overview" />
          <Row>
            <Col xs={7} md={7}>
              <Paragraph text="My team worked with a group of UW students who work in Information Technologies (IT) helpdesk. The IT Helpdesk is the single point of contact for all IT services for UW students. In this project, we discovered a need of staffs of the IT Helpdesk through different research methods of human-centered design." />
            </Col>
            <Col xs={5} md={5}>
              <ProjectSummary summaryData={summaryData} />
            </Col>
          </Row>
          <SectionTitle text="Finding Problems" />
          <Row>
            <Col xs={12} md={12}>
              <Paragraph text="The problem within the UWB IT Department revolves around repetitive and tedious tasks that the workers have to do. Some of the specific issues we found were the blue cards and the inventory chart. The blue card, used for equipment checkout, is very cluttered and unorganized. The IT worker has to fill out the entire card every single time someone checks out equipment. They then have to enter the information into the IT database. The inventory chart is a physical chart on the wall that shows the circulating equipment demand. The IT workers must manually change that every day." />
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <Image src="/images/blue_card.jpg" />
            </Col>
            <Col xs={6} md={6}>
              <Image src="/images/it_circulating_equipment_demand.jpg" />
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <Paragraph text="Patrons have to fill all their information in the blue card and then the staff has to enter the information into their database." />
            </Col>
            <Col xs={6} md={6}>
              <Paragraph text="Also, staffs have to update this Circulating Equipment Demand list manually." />
            </Col>
          </Row>
          <SectionTitle text="Research" />
          <SectionSubtitle text="Cultural Probe" />
          <Paragraph text="My team used cultural probes to arouse design inspirations and collect responses from participants. We collected casual, informal, enthusiastic and personal data from participants. Through this research, I personally tried to get a real emotional understanding of our users." />
          <Row>
            <Image src="/images/cultural-props.jpg" />
          </Row>
          <div className="ecs-ul">
            <ul>
              <li>They mostly love their job, they are passionate about it.</li>
              <li>They mostly love video games, only one person dislikes it.</li>
              <li>IT employees generally spend a lot of time on campus between eating and studying.</li>
              <li>They generally don’t recognize questions from patrons as “dumb”, maybe they enjoy helping people.</li>
              <li>Most seem to like their job but they are also stressed.</li>
            </ul>
          </div>
          <SectionSubtitle text="Interview" />
          <Paragraph text="The goal was to learn more about the individuals on a personal level, learn more about the day to day schedule of an IT worker, and fill in the gaps from the cultural probe kits." />
          <Row>
            <Col xs={12} md={4}>
              <Image src="/images/positive.png" />
            </Col>
            <Col xs={12} md={4}>
              <Image src="/images/negative.png" />
            </Col>
            <Col xs={12} md={4}>
              <Paragraph text="Based on the positive attitudes, it seems that all the interviewees enjoy their job at the IT department, but they expressed mixed feelings toward some tasks. We collected all the terms they used to respond to questions relating to their tasks." />
            </Col>
          </Row>
          <SectionSubtitle text="Questionnaire" />
          <Paragraph text="We learned more details about what they think their job can be stressful at times. Most of the complaints were about the IT checkout system, miscommunication between them and patrons, and repetitive tasks. The frustration of “blue cards” was mentioned multiple times from the participants." />

          <SectionTitle text="Solutions" />
          <Paragraph text="Our app idea combines the blue card system, the inventory chart, and the equipment catalog that is currently in a binder at the IT helpdesk to minimize repetitive tasks and increase efficiency. In addition, we also found out the student ID is essential to check out the equipment, and we detected that employers ask students to give student IDs to them and swipe IDs every time to proceed with the checkout process. Thus, we will design a software that will simplify and streamline all these tasks that are currently controlled manually or non-electrically into one place with a PC tablet with an attached card reader." />
          <SectionSubtitle text="Paper Prototype" />
          <Row>
            <Image src="/images/paperproto-checkout-all-in-1.jpg" />
          </Row>
          <SectionSubtitle text="Interactive Prototype" />
          <Row>
            <EcsCarousel />
          </Row>
          <SectionTitle text="Conclusion" />
          <Paragraph text="Through this system, we pursue values not only for our user group but also for the patrons of the IT helpdesk. Our app helps the user group to have more enjoyable work experience by fulfilling their desires toward reducing repetitive tasks. Furthermore, the system will reduce the tedious handwriting task of the blue cards for patrons which needs to be done every time. Patrons will also be provided with better information about the performance of equipment and the circulating equipment demand in an intuitive way. Satisfied patrons will give positive feedback to the employees which will increase the satisfaction of the working experience for IT employees, especially the ones who seek the value of their work from helping others. To further streamline and improve the technology check-out process, our tablet app will be able to send reminder emails to students who have checked out equipment, which is a task not viable with the current paper system. This could help solve another problem that IT identified consistently throughout our research: communication." />
        </div>
      </main>
    );
  }
}
