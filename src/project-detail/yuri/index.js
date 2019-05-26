import React from 'react';
import Iframe from 'react-iframe';
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
    description: 'UX Designer',
  },
  {
    imagePath: '/images/icon-mobile.png',
    title: 'Type',
    description: 'Interactive Installation',
  },
  {
    imagePath: '/images/icon-responsibility.png',
    title: 'Responsibilities',
    description: 'Designing Android Artwork',
  },
  {
    imagePath: '/images/icon-clock.png',
    title: 'Duration',
    description: '10 weeks',
  },
];

export default class YuriView extends React.Component {
  render() {
    return (
      <main className="project-detail pb-5">
        <div className="project-detail-header">
          <Title text="Yuri" />
          <div className="project-description-wrapper">
            <ProjectDescription text="Is robot a slave or object of human?" />
          </div>
        </div>
        <div className="project-detail-body">
          <SectionTitle text="Project Overview" />
          <Row>
            <Col xs={7} md={7}>
              <Paragraph text="Project Yuri is motivated by Nam June Paik’s “K-456” that attempted to recalibrate the race and lead people to think about the “human/machine binary and deconstructing binary logic (Rhee)”. Project Yuri throws the main questions of “Is robot a slave or object of human?” to think about the hierarchical relationship between robot and human." />
            </Col>
            <Col xs={5} md={5}>
              <ProjectSummary summaryData={summaryData} />
            </Col>
          </Row>
          <SectionTitle text="Finding Problems" />
          <Row>
            <Col xs={12} md={12}>
              <Paragraph text="In a history of our media, robots have been often portrayed as slaves, sex objects, dehumanized things, and things that can be destroyed by a necessity of human. As media designers, it is necessary to think about whether this is the right projection of robots to public or not. Does this tendency aggravate stereotypes of certain race and gender? In addition, do the typical relationships between robot and human in our media still illustrate the slavery in human history? Project Yuri is designed to answer those questions." />
            </Col>
          </Row>
          <SectionTitle text="Research" />
          <Paragraph text="“Most importantly, understanding race and/as technology enables us to frame the discussion around ethics rather than ontology, on modes of recognition and relation, rather than being. (Chun)”" />
          <Paragraph text="Nam June Paik focused on humanizing his robot “K-456” by letting his robot act like a human. The robot walks, talks, excretes, and interacts with other human and deliver the message that says “how race can be recalibrated through technology in order to disentangle the boundaries between human and machine. (Rhee)” Like K-456, Yuri is a humanized robot who can talk and interact with people. Her interaction is designed to answer certain types of questions and focused on expressing her emotions that increase the completeness of humanization on robots." />
          <SectionTitle text="Robot Design" />
          <Paragraph text="Design choice for her appearance has changed a lot from initial proposal design of this project. Since she has to carry different types of hardware in her body that include a portable computer, a Bluetooth speaker, circuits, and LCD, etc. I had to design her body to have a boxy shape so that she could contain everything, which I tried to avoid in the initial design. Thus, I decorated her head part with half cylinders to reduce the sense of boxy on her appearance. Also, she is decorated with flowers on her body and butterflies on her head. This is an attempt to reduce her artificial appearance by using the symbols of nature. As I anticipated, audiences thought the flower decoration was used to express Yuri as a girl. Yuri is a female since she is the otherness of Kate, but she does not want to be defined by certain stereotypes of gender. In addition, she answers “I am not a robot, but an otherness of Kate” when the audience asks if she is a robot. By expressing her identity clearly to people, Yuri attempted to eliminate the binary thinking in gender, race, and relationship between robot and human." />
          <Row>
            <Image width="100%" height="100%" src="/images/project-yuri-01.jpg" />
          </Row>
          <Row>
            <Image width="100%" height="100%" src="/images/project-yuri-02.jpg" />
          </Row>
          <SectionTitle text="Digital Performance in Public" />
          <Row>
            <Iframe
              url="https://www.youtube.com/embed/Wy66bedwccA"
              width="850px"
              height="490px"
              position="relative"
            />
          </Row>
          <Paragraph text="In the performance, three audiences successfully interacted with Yuri. To get a successful result of the performance, I had to search indoor public places since the voice recognition technology I implemented does not work properly when a place has continuous noise. Two of audiences among three audiences who effectively interacted with Yuri said it was very interesting experience talking with the robot who think she is not a robot. However, one participant gave me a feedback the limited reactions of Yuri made him consider Yuri as a robotic existence. In addition, since they were not provided with the entire context of the project, they gave me feedback regarding the technical experiences more than the meaning of social justice. Nonetheless, it was a great experience that leads me to think about the way/direction of our design and technology need to go." />
          <SectionTitle text="Workcited" />
          <Row>
            <Col xs={12} md={12}>
              Rhee, Margaret. “Racial Recalibration.” Asian Diasporic Visual Cultures and the Americas (n.d.): 285-309.
                        </Col>
            <Col xs={12} md={12}>
              Chun, Wendy Hui Kyong. “Race and/as Technology or How to do Things With Race.” Nakamura, Lisa and Peter Chow. Race After the Internet. Taylor and Francis, 2013. 353.
                        </Col>
          </Row>
        </div>
      </main>
    );
  }
}
