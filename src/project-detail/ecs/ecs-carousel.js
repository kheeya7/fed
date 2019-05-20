import React from 'react';
import {
  Carousel,
  Image,
} from 'react-bootstrap';
import './ecs-carousel.less';

export default class EcsCarousel extends React.Component {
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
            <div className="ecs-carousel">
                <Carousel
                    activeIndex={selectedIndex}
                    direction={direction}
                    onSelect={this.handleSelect}
                    interval={null}
                >
                    <Carousel.Item>
                        <Image className="carousel-image" src="/images/ecs-proto-01.jpg"></Image>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image className="carousel-image" src="/images/ecs-proto-02.jpg"></Image>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image className="carousel-image" src="/images/ecs-proto-03.jpg"></Image>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image className="carousel-image" src="/images/ecs-proto-04.jpg"></Image>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image className="carousel-image" src="/images/ecs-proto-05.jpg"></Image>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image className="carousel-image" src="/images/ecs-proto-06.jpg"></Image>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image className="carousel-image" src="/images/ecs-proto-07.jpg"></Image>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image className="carousel-image" src="/images/ecs-proto-08.jpg"></Image>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image className="carousel-image" src="/images/ecs-proto-09.jpg"></Image>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image className="carousel-image" src="/images/ecs-proto-10.jpg"></Image>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image className="carousel-image" src="/images/ecs-proto-11.jpg"></Image>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image className="carousel-image" src="/images/ecs-proto-12.jpg"></Image>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image className="carousel-image" src="/images/ecs-proto-13.jpg"></Image>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image className="carousel-image" src="/images/ecs-proto-14.jpg"></Image>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image className="carousel-image" src="/images/ecs-proto-15.jpg"></Image>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image className="carousel-image" src="/images/ecs-proto-16.jpg"></Image>
                    </Carousel.Item>
                </Carousel>
            </div>
    );
  }
}
