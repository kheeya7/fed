import React from 'react';
import { Image } from 'react-bootstrap';

export default class ProjectPreview extends React.Component {
  render() {
    return (
      <div>
        <Image src={this.props.imageUrl} responsive />
      </div>
    );
  }
}
