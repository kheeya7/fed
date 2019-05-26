import React from 'react';
import PropTypes from 'prop-types';

export default class SectionTitle extends React.Component {
  render() {
    return (
      <h3
        className="section-title">
        {this.props.text}
      </h3 >
    );
  }
}

SectionTitle.propTypes = {
  text: PropTypes.string,
};

SectionTitle.defaultProps = {
  text: '',
};
