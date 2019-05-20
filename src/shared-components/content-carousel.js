import React from 'react';
import {
  ButtonToolbar,
  ToggleButtonGroup,
  ToggleButton,
  Carousel,
  Image,
  Row,
  Col,
} from 'react-bootstrap';
import './content-carousel.less';

export default class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      selectedIndex: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      selectedIndex,
      direction: e.direction,
    });
  }

  handleChange(e) {
    this.setState({ selectedIndex: e });
  }

  render() {
    const { selectedIndex, direction } = this.state;

    return (
            <div className="project-content-carousel">
                <div>
                    <ButtonToolbar>
                        <ToggleButtonGroup
                            type="radio"
                            name="options"
                            value={this.state.selectedIndex}
                            onChange={this.handleChange}
                        >
                            <ToggleButton
                                className={this.state.selectedIndex === 0 ? 'selectedToggleButtonStyle' : 'toggleButtonStyle'} value={0}>
                                Personas
                            </ToggleButton>
                            <ToggleButton
                                className={this.state.selectedIndex === 1 ? 'selectedToggleButtonStyle' : 'toggleButtonStyle'} value={1}>
                                Data
                            </ToggleButton>
                            <ToggleButton
                                className={this.state.selectedIndex === 2 ? 'selectedToggleButtonStyle' : 'toggleButtonStyle'} value={2}>
                                Affordance
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </ButtonToolbar>
                </div>
                <Carousel
                    activeIndex={selectedIndex}
                    direction={direction}
                    onSelect={this.handleSelect}
                    interval={null}
                >
                    <Carousel.Item>
                        <Row className="carousel-item-container">
                            <Col className="carousel-text" xs={12} md={12}>
                                The archetype of this persona is an educator and she represents a group of people who care to educate people.
                            </Col>
                            <Col xs={12} md={12}>
                                <Image className="carousel-image" src="/images/unify-persona.png"></Image>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="carousel-item-container">
                            <Col className="carousel-text" xs={12} md={12}>
                                To make a successful and innovative product, the designers need to determine the range of data to support the heuristic approach for design decisions. In addition, the designers should consider the affordance of the product to create a better and more natural user experience.
                            </Col>
                            <Col xs={12} md={12}>
                                <Image className="carousel-image" src="/images/unify-data.jpg"></Image>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="carousel-item-container">
                            <Col className="carousel-text" xs={12} md={12}>
                                Our team decided to use the card layout, which is the type of presenting information with intuitive images. With some self-explanatory images and short descriptions with the buttons, the users will get what they want more easily without having to think.
                            </Col>
                            <Col xs={12} md={12}>
                                <Image className="carousel-image" src="/images/unify-wireframe-02.png"></Image>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </div>
    );
  }
}
